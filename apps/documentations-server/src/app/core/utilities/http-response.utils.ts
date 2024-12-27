export class ApiResponseHelper<T> {
  success: boolean;
  message: string;
  data?: T; // Generic type for response payload
  error?: Error | Record<string, unknown> | unknown; // Error details, if applicable
}

export function createApiResponse<T>(
  success: boolean,
  message: string,
  data?: T,
  error?: Error | Record<string, unknown> | unknown
): ApiResponseHelper<T> {
  return {
    success,
    message,
    data,
    error,
  };
}

export const successResponse = <T>(message: string, data: T) =>  createApiResponse(true, message, data);
export const failureResponse = <E>(message: string, error: E) =>  createApiResponse(false, message, null, error);