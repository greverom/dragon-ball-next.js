"use client";


import { DragonBallButton} from '@/Styles/buttons.styled';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground p-10 transition-colors duration-300 mt-20">
      <h1 className="text-4xl font-bold text-center mb-3">Bienvenido</h1>

      <div className="w-full max-w-[220px]">
        <Link href="/dragonball" passHref legacyBehavior>
          <DragonBallButton>Characters</DragonBallButton>
        </Link>

      </div>
    </main>
  );
}