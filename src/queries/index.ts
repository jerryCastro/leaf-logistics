import { QueryClient } from "react-query";
import { StatusCode } from "status-code-enum";

const MAX_RETRIES = 2;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function retry(failureCount: number, err: any) {
  return (
    failureCount < MAX_RETRIES &&
    err.response?.status !== StatusCode.ClientErrorNotFound
  );
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry,
    },
  },
});

export * from "./news";
