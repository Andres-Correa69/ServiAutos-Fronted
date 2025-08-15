import { useQuery } from "@tanstack/react-query";

import { ExampleApi } from "@/services/api/exampleApi";
import { QUERY_KEYS } from "@/services/queryKeys";

export function useGetExample() {
  return useQuery({
    queryKey: [QUERY_KEYS.EXAMPLE],
    queryFn: () => ExampleApi.fetchExample(),
  });
}
