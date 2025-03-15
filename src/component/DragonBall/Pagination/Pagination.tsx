"use client";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-5">
      <button
        onClick={() => setPage(Math.max(page - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 rounded-lg transition-colors
          bg-[rgb(var(--button-bg))] text-[rgb(var(--button-text))] 
          hover:brightness-90 disabled:opacity-50"
      >
        Anterior
      </button>

      <span className="text-sm font-medium">
        Página {page} de {totalPages}
      </span>

      <button
        onClick={() => setPage(Math.min(page + 1, totalPages))}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-lg transition-colors
          bg-[rgb(var(--button-bg))] text-[rgb(var(--button-text))] 
          hover:brightness-90 disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;