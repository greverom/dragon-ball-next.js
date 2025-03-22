"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-sm text-foreground hover:underline mb-4"
    >
      <ArrowLeft className="mr-2" size={18} />
      Ir atrás
    </button>
  );
};

export default BackButton;