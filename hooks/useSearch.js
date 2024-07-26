import { useMemo } from "react";

const useFilter = ({ data, query, filterParam }) => {
  const filteredData = useMemo(() => {
    if (!data || !query || !filterParam) return data;

    return data.filter((item) =>
      item?.[filterParam]?.toLowerCase()?.includes(query?.toLowerCase()),
    );
  }, [data, query, filterParam]);

  return filteredData;
};

export default useFilter;
