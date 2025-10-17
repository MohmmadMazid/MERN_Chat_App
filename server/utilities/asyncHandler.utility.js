export const asyncHandler = (func) => {
  return (req, res, next) => {
    Promise.resolve((res, req, next)).catch((err) => next(err));
  };
};
