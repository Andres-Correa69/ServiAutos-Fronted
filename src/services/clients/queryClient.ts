import { QueryClient } from "@tanstack/react-query";

const MINUTE = 1000 * 60;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * MINUTE, // 5 min
      gcTime: 60 * MINUTE, // 1 hour
      refetchOnWindowFocus: false,
    },
  },
});
