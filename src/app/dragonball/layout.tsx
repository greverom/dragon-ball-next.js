"use client";

import { PaginationProvider } from "@/context/Paginationcontxt";



export default function DragonBallLayout({ children }: { children: React.ReactNode }) {
  return (
    <PaginationProvider>
      {children}
    </PaginationProvider>
  );
}