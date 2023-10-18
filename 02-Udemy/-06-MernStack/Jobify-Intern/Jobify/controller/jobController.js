// import job schema
import Job from "../models/jobModel.js";
// for generating uniqu ID
import { nanoid } from "nanoid";
// For importing the custom error class
import { NotFoundError } from "../errors/customErrors.js";
// for stats pages
import mongoose from "mongoose";
import day from "dayjs";
import StatusCodes from "http-status-codes";
import jobModel from "../models/jobModel.js";
// get all jobs, object
let jobs = [
  { id: nanoid(), company: "google", position: "forntEnd" },
  { id: nanoid(), company: "apple", position: "backEnd" },
];
export const getAllJobs = async (req, res) => {
  console.log(req.query);
  const { search, jobLocation, jobStatus, sort } = req.query;
  const queryObject = {
    createdBy: req.user.userId,
  };
  if (search) {
    queryObject.$or = [
      { position: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }
  if (jobStatus && jobStatus !== "all") {
    queryObject.jobStatus = jobStatus;
  }
  if (jobLocation && jobLocation !== "all") {
    queryObject.jobLocation = jobLocation;
  }
  const sortOptions = {
    newset: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };
  const sortKey = sortOptions[sort] || sortOptions.newset;
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const jobs = await Job.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);
  const jobCount = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(jobCount / limit);
  res.status(200).json({ jobCount, numOfPages, jobs, currentPage:page });
};
export const getSingleJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    throw new NotFoundError(`Not found with this ${id}`);
  }
  res.status(200).json({ job });
};
export const creataJob = async (req, res) => {
  // for acceccing the same user
  req.body.createdBy = req.user.userId;

  const { company, position, createdBy, jobStatus, jobType, jobLocation } =
    req.body;
  // if (!company || !position) {
  //   return res
  //     .status(400)
  //     .json({ msg: "Please Provide a company and position" });
  // }
  // const id = nanoid();
  // const job = { id, company, position };
  // jobs.push(job);
  const job = await Job.create({
    company,
    position,
    createdBy,
    jobLocation,
    jobStatus,
    jobType,
  });
  res.status(200).json({ job });
};
export const updateJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(404).json({ msg: "please provide company and position" });
  }
  const { id } = req.params;
  const job = await Job.findByIdAndUpdate(
    id,
    { company: company, position: position },
    { new: true }
  );
  if (!job) {
    return res.status(404).json({ msg: `no job found with this ${id}` });
  }
  res.status(200).json({ msg: "job modified", job });
};
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  if (!removedJob) {
    return res.status(404).json({ msg: `no job found with this ${id}` });
  }
  res.status(200).json({ msg: "job deleted", job: removedJob });
};

export const showStats = async (req, res) => {
  let stats = await jobModel.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, cur) => {
    const { _id: title, count } = cur;
    acc[title] = count;
    return acc;
  }, {});
  console.log(stats);
  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };
  let monthlyApplications = await jobModel.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { "_id.year": -1, "_id.month": -1 },
    },
    {
      $limit: 6,
    },
  ]);
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = day()
        .month(month - 1)
        .year(year)
        .format("MMM YY");
      return { date, count };
    })
    .reverse();
  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications, stats });
};
