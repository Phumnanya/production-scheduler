"use client";
import { useStore } from "../store";
import { Resource } from "../types/types";
import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export default function Table() {
    const resources = useStore((state) => state.resources);
    const columns = React.useMemo<ColumnDef<Resource>[]>(
        () => [
            {
                Key: "id",
                header: "ID",
            },
            {
                Key: "name",
                header: "Name",
            },
            {
                Key: "quantity",
                header: "Quantity",
            },
            {
                Key: "status",
                header: "Status",
            },
        ],
        []
    );

    const tables = useReactTable({
        data: resources, columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return(
        <div className="w-4/5 m-auto p-4">
            <h1>Order Table</h1>
            <table className="w-full border-2 border-black">
                <thead className="bg-gray-100">
                    {tables.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} className="px-4 py-2 border">
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </th>
                        ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                {tables.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                    {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-4 py-2 border">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
