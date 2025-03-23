"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-sm text-foreground hover:underline mb-3"
    >
      <ArrowLeft className="mr-1" size={15} />
      Ir atrás
    </button>
  );
};

export default BackButton;