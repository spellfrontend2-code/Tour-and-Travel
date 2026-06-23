// import { useMemo } from "react";

// type Category = {
//   name: string;
//   id: string;
// };

// export default function useFetchCategories<T extends Record<string, any>>(
//   data: T[],
//   key: keyof T & string
// ): Category[] {
//   return useMemo(() => {
//     if (!data) return [];

//     return Array.from(
//       new Map(
//         data.map((item: T) => {
//           const value = String(item[key]).toLowerCase();

//           return [
//             value,
//             {
//               name: String(item[key]),
//               id: value,
//             },
//           ];
//         })
//       ).values()
//     );
//   }, [data, key]);
// }
import { useMemo } from "react";

type Category = {
  name: string;
  id: string;
};

function getNestedValue(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export default function useFetchCategories<T extends Record<string, any>>(
  data: T[],
  path: string
): Category[] {
  return useMemo(() => {
    if (!data?.length) return [];

    const map = new Map<string, Category>();

    data.forEach((item) => {
      const rawValue = getNestedValue(item, path);

      if (!rawValue) return;

      const value = String(rawValue).toLowerCase();

      map.set(value, {
        name: String(rawValue),
        id: value,
      });
    });

    return Array.from(map.values());
  }, [data, path]);
}
