"use client";

import { useLoading } from "@/context/LoadingContext";
import Loader from "./ui/loaders";


const GlobalLoader = () => {
  const { loading } = useLoading();

  return loading ? (
    <div className="fixed inset-0 flex justify-center items-center z-[9999] pointer-events-none">
      <Loader />
    </div>
  ) : null;
};

export default GlobalLoader;