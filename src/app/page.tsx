"use client";

import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground p-10 transition-colors duration-300 mt-20">
      <BackgroundImage />
    </main>
  );
}