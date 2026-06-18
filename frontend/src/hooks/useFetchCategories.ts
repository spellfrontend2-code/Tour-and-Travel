import { useMemo } from "react";

type Category = {
  name: string;
  id: string;
};

export default function useFetchCategories<T extends Record<string, any>>(
  data: T[],
  key: keyof T & string
): Category[] {
  return useMemo(() => {
    if (!data) return [];

    return Array.from(
      new Map(
        data.map((item: T) => {
          const value = String(item[key]).toLowerCase();

          return [
            value,
            {
              name: String(item[key]),
              id: value,
            },
          ];
        })
      ).values()
    );
  }, [data, key]);
}