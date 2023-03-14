import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "helpers/errorHandler";

interface IFetchHttpBaseError {
  status_code: number;
  status_message: string;
  success: boolean;
}
const useShowError = (error: FetchBaseQueryError | SerializedError) => {
  if (isFetchBaseQueryError(error)) {
    return {
      status: error.status,
      message:
        "error" in error
          ? error.error
          : (error.data as IFetchHttpBaseError).status_message,
    };
  }

  if (isErrorWithMessage(error)) {
    return error;
  }
};

export default useShowError;
