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
    <div className="bg-white/10 dark:bg-white/45 backdrop-blur-md border border-[rgba(255,255,255,0.2)] 
                    shadow-lg p-3 rounded-xl mt-8 max-w-xl mx-auto">
      <div className="flex flex-col items-center space-y-3 text-sm sm:text-base">
        
      <div className="flex items-center justify-center space-x-2 overflow-x-auto whitespace-nowrap">
        <label htmlFor="limit" className="font-medium text-xs sm:text-sm">
          Mostrar:
        </label>
        <select
          id="limit"
          value={limit === 0 ? "all" : limit}
          onChange={handleLimitChange}
          className="border border-[rgb(var(--border-color))] px-2 py-1 rounded-lg transition-colors
            bg-orange-500 text-white hover:brightness-90 text-xs sm:text-sm"
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="58">Todos</option>
        </select>
        <span className="font-medium text-xs sm:text-sm">personajes por página</span>
      </div>
  
        <div className="flex flex-wrap items-center justify-center space-x-2 sm:space-x-4">
          <button
            onClick={() => setPage(Math.max(page - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition-colors
              bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 text-sm sm:text-base"
          >
            Anterior
          </button>
  
          <span className="font-medium">
            Página {page} de {totalPages}
          </span>
  
          <button
            onClick={() => setPage(Math.min(page + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition-colors
              bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 text-sm sm:text-base"
          >
            Siguiente
          </button>
        </div>
  
      </div>
    </div>
  );
}

 export default Pagination;