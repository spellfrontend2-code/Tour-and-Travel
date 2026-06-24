import {  Edit, Eye, Trash } from "lucide-react";

export function generateColumns(data = [],hiddenColumns=[],  onAction?: (action: string, row: any) => void
) {
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
        <div className="flex gap-3">
          <Eye className="cursor-pointer text-gray-500 hover:text-gray-900" strokeWidth={1.5} size={20} onClick={() => {onAction?.("view",original)}}/>
          <Edit className="cursor-pointer text-blue-300 hover:text-blue-500" strokeWidth={1.5}  size={20} onClick={() => {onAction?.("edit",original)}}/>
          <Trash className="cursor-pointer text-red-300 hover:text-red-500" strokeWidth={1.5} size={20} onClick={() => {onAction?.("delete",original)}}/>
    
        </div>

      );
    },
  };
  return [...dynamicColumns,actionsColumn];
}