import { ReactNode, useEffect } from "react";

import { useHeaderStore } from "@/store/headerStore";

export const usePageHeader = (header: ReactNode) => {
  const setHeader = useHeaderStore((state) => state.setHeader);

  useEffect(() => {
    setHeader(header);
    return () => setHeader(null);
  }, [header, setHeader]);
};
