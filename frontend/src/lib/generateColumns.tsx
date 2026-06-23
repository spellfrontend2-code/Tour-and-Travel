import { Delete, Edit, Eye, View } from "lucide-react";

export function generateColumns(data = [],hiddenColumns=[]) {
  if (!data.length) return [];

  const sample = data[0];

const dynamicColumns = Object.keys(sample)
  .filter((key) => !hiddenColumns.includes(key)).map((key) => ({
    accessorKey: key,
    header: key.toUpperCase(),
    cell: (info) => {
      const value = info.getValue();

      if (typeof value === "object" && value !== null) {
        return JSON.stringify(value);
      }

      return value ?? "-";
    },
  }))
  const actionsColumn = {
    id: "actions",
    header: "ACTIONS",
    cell: ({ row }) => {
      const original = row.original;

      return (
        <div className="flex justify-between">

          <Eye strokeWidth={1} size={20} onClick={()=>console.log("view")}/>
          <Edit strokeWidth={1} color="blue" size={20} onClick={() => {console.log("edit")}}/>
          <Delete strokeWidth={1} color="red" size={20} onClick={() => {console.log("delete")}}/>
        </div>

      );
    },
  };
  return [...dynamicColumns,actionsColumn];
}