import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import './Table.scss';

import type { ColumnDef, SortingState, ColumnFiltersState, OnChangeFn, } from "@tanstack/react-table";
import Pagination from "../Pagination/Pagination";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  columnFilters: ColumnFiltersState;
  onColumnFiltersChange: OnChangeFn<ColumnFiltersState>;
}

function DataTable<T>({ data, columns, columnFilters, onColumnFiltersChange, }: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
 
  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
        <div className="table-wrapper">
        <table style={{ width: "100%", borderCollapse: "collapse" }} className="data-table">
            <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        style={{ width: header.getSize() , cursor: "pointer" }}
                        >
                        {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )}
                        {{
                            asc: "",
                            desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>

            <tbody>
            {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                    <td key={cell.id}
                    style={{ width: cell.column.getSize() }}
                    >
                    {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                    )}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>

        {/* Pagination */}
        <Pagination table={table} 
        data={data}
        />

    </>
  );
}

export default DataTable;
