import { StatusCodes } from "http-status-codes";
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(statusCode).json({ msg: "Some thing went wrong" });
};
export default errorHandlerMiddleware;
