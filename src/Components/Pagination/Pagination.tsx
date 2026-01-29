import type { Table } from "@tanstack/react-table";
import './Pagination.scss';

interface PaginationProps<T> {
  table: Table<T>;
  data: T[];
}

function Pagination<T>({ table, data }: PaginationProps<T>) {
  const getPaginationRange = (
    // currentPage: number,
    totalPages: number
  ): (number | "...")[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    return [
      1, 2, 3,
      "...",
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  };

  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();
  const paginationRange = getPaginationRange(totalPages);

  return (
    <div className="pagination">
      <div className="pagination-left">
        <span>Showing</span>

        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[10, 20, 50, 100].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <span>out of {data.length}</span>
      </div>

      <div className="pagination-right">
        <button
        className="pagination-arrow"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          ‹
        </button>

        {paginationRange.map((page, index) =>
          page === "..." ? (
            <span key={index} className="dots">...</span>
          ) : (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => table.setPageIndex(page - 1)}
            >
              {page}
            </button>
          )
        )}

        <button
        className="pagination-arrow"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Pagination;
