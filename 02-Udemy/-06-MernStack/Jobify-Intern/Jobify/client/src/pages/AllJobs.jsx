import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../component/index";
import customFetch from "../utils/customFetch.js";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
export const loader = async ({ request }) => {
  // console.log(request.url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);
  try {
    const { data } = await customFetch.get("/jobs", {
      params: params,
    });
    return {
      data,
      searchParams: { ...params },
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const AllJobsContext = createContext();

const AllJobs = () => {
  const { data, searchParams } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data, searchParams }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
