"use client";

import React, { createContext, useContext, useState } from "react";

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
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [totalPages, setTotalPages] = useState(1);

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