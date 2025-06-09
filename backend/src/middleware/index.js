import { ApiError } from "../exceptions/api.error.js";

export const unknownEndpoint = (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Unknown endpoint",
    method: req.method,
    path: req.originalUrl,
  });
};

export function errorMiddleware(error, req, res, next) {
  if (error instanceof ApiError) {
    const { status, message, errors } = error;
    res.status(status).send({ message, errors });
    return;
  }

  res.status(500).send({
    message: "Unexpected server error",
    info: error instanceof Error ? error.message : "Unknown error",
  });
}

export const catchError = (handlerFunction) => {
  return async (req, res, next) => {
    try {
      await handlerFunction(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
