import { StatusCodes } from "http-status-codes";
// import { Error } from "mongoose";
export class NotFoundError extends Error {
  constructor(message) {
    super(message); 
    this.name = "Not Found Error";
    this.StatusCodes = StatusCodes.NOT_FOUND;
  }
}
export class BadRequestError extends Error {
  constructor(message) {
    super(message); 
    this.name = "Bad Request Error";
    this.StatusCodes = StatusCodes.BAD_REQUEST;
  }
}
export class UnauthinticatedError extends Error {
  constructor(message) {
    super(message); 
    this.name = "UnAuthintacted Error";
    this.StatusCodes = StatusCodes.UNAUTHORIZED;
  }
}
export class UNAUTHORIZED extends Error {
  constructor(message) {
    super(message); 
    this.name = "Not Found Error";
    this.StatusCodes = StatusCodes.FORBIDDEN;
  }
}
