class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this, constructor); // it will only give the necessary information about error
  }
}

export const errorHandler = ErrorHandler;
