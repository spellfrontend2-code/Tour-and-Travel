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
    <div className="border-2 border-gray-900 rounded-xl overflow-x-auto"> 
        <table className="">
        <thead className="bg-gray-100  ">
            {table.getHeaderGroups().map(hg=>(
                <tr key={hg.id} className="">
                    {hg.headers.map(header=>(
                        <th key={header.id} className="px-6 py-3">
                           <p className="text-left"> {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}</p>
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody className="divide-y">
            {table.getRowModel().rows.map(row=>(
                <tr key={row.id} className="odd:bg-white even:bg-gray-100">
                    {row.getVisibleCells().map(cell=>(
                        <td key={cell.id} className="px-6 ">
                            <p className="line-clamp-3 text-sm">{flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </p></td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table></div>
  )
}
export default DataTable;
