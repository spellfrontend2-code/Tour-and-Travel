import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function DataTableSkeleton({ columns=6, rows = 10 }) {
  return (
    <div className="border-2 rounded-xl overflow-x-auto">
      <Table className="w-full table-fixed">
        <TableHeader>
          <TableRow className="bg-gray-100">
            {Array.from({ length: columns }).map((_, i) => (
              <TableHead key={i} className="px-6 py-3">
                <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: rows }).map((_, row) => (
            <TableRow key={row}>
              {Array.from({ length: columns }).map((_, col) => (
                <TableCell key={col} className="px-6 py-4">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTableSkeleton;