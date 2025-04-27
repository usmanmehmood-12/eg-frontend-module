import { AxiosError } from 'axios';

/**
 * Extracts an error message from an Axios error or returns a generic error message.
 * @param error An error that may be an Axios error.
 * @returns The error message from the error, or a generic error message if the error is not an Axios error.
 */
export function extractErrorMessage(error: unknown): string {
  const axiosError = error as AxiosError<{ message: string }>;

  if (axiosError.response?.data?.message) {
    return axiosError.response.data.message;
  }

  return 'Something went wrong. Please try again.';
}
