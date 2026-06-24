import { Table, TableBody, TableHeader,TableHead, TableRow, TableCell } from "@/components/ui/table";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

function DataTable({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return(
    <div > 
        <Table className="table-fixed w-full">
        <TableHeader >
            {table.getHeaderGroups().map(hg=>(
                <TableRow key={hg.id} className="">
                    {hg.headers.map(header=>(
                        <TableHead key={header.id} className="px-6 py-3">
                           <p className="text-left"> {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}</p>
                        </TableHead>
                    ))}
                </TableRow>
            ))}
        </TableHeader>
        <TableBody >
            {table.getRowModel().rows.map(row=>(
                <TableRow key={row.id} >
                    {row.getVisibleCells().map(cell=>(
                        <TableCell key={cell.id} className="px-6 ">
                            <p className="line-clamp-3 text-sm">{flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </p></TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    </Table></div>
  )
}
export default DataTable;
