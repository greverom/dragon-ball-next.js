"use client";

import React, { createContext, useCallback, useContext, useState } from "react";

interface PaginationContextProps {
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationContext = createContext<PaginationContextProps | undefined>(undefined);

export const PaginationProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPageState] = useState(1);
  const [limit, setLimitState] = useState(4);
  const [totalPages, setTotalPages] = useState(1);

  const setPage = useCallback((newPage: number) => {
    setPageState((prev) => (prev !== newPage ? newPage : prev));
  }, []);

  const setLimit = (newLimit: number) => {
    if (newLimit === 0) {
      setPage(1);
      setTimeout(() => setLimitState(newLimit), 0); 
    } else {
      setLimitState(newLimit);
    }
  };

  return (
    <PaginationContext.Provider value={{ page, setPage, limit, setLimit, totalPages, setTotalPages }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination debe ser usado dentro de PaginationProvider");
  }
  return context;
};