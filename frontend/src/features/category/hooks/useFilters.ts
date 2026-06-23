import { useState, useMemo } from "react";

export default function useFilters<T extends Record<string, any>>(
  data: T[],
  filterKey: keyof T & string
) {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    const query = search.toLowerCase();

    return data.filter((d) => {
      const matchesCategory =
        category === "all" ||
        String(d[filterKey]).toLowerCase() === category.toLowerCase();

      const matchesSearch = Object.values(d).some((value) =>
        String(value).toLowerCase().includes(query)
      );

      return matchesCategory && matchesSearch;
    });
  }, [data, category, search, filterKey]);

  return {
    category,
    search,
    setCategory,
    setSearch,
    filteredData,
  };
}