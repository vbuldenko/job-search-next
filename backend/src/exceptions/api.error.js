export class ApiError extends Error {
  constructor(status, message, errors = {}) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
  static BadRequest(message) {
    return new ApiError(400, message);
  }
  static Unauthorized(message) {
    return new ApiError(401, message || "Not authorized");
  }
  static Forbidden(message) {
    return new ApiError(403, message);
  }
  static NotFound(errors) {
    return new ApiError(404, "Not found", errors);
  }
}
