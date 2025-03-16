"use client";

import { useLoading } from "@/context/LoadingContext";
import Loader from "./ui/loaders";
import { useMemo } from "react";


const GlobalLoader = () => {
  const { loading } = useLoading();

  const loaderComponent = useMemo(() => {
    return loading ? (
      <div className="fixed inset-0 flex justify-center items-center z-[9999] pointer-events-none">
        <Loader />
      </div>
    ) : null;
  }, [loading]);

  return loaderComponent;
};

export default GlobalLoader;