"use client";

import { usePagination } from "@/context/Paginationcontxt";

const Pagination = () => {
  const { page, setPage, totalPages, limit, setLimit } = usePagination();

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = e.target.value === "all" ? 0 : Number(e.target.value);
    setPage(1);
    setLimit(newLimit);
  };

  return (
    <div className="flex flex-col items-center space-y-3 mt-5">
      
      <div className="flex items-center space-x-2">
        <label htmlFor="limit" className="text-sm font-medium">Mostrar:</label>
        <select 
          id="limit" 
          value={limit === 0 ? "all" : limit} 
          onChange={handleLimitChange}
          className="border border-gray-400 px-2 py-1 rounded-lg transition-colors
             bg-[rgb(var(--button-bg))] text-[rgb(var(--button-text))] 
             hover:brightness-90"
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="58">Todos</option>
        </select>
        <span className="text-sm font-medium">personajes por página</span>
      </div>

      <div className="flex items-center justify-center space-x-4">
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

    </div>
  );
};

export default Pagination;