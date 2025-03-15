"use client"

import HoverTitleComponent from '@/component/DragonBall/DragonBallTitle/HoverTitle';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground p-10 transition-colors duration-300 mt-20">
      <h1 className="text-4xl font-bold text-center mb-3">Bienvenido</h1>
      <p className="text-xl text-center mb-8">Selecciona una opción:</p>

      <div className="flex gap-10 relative">
        <div className="relative flex flex-col items-center w-[200px] hover-parent">
          <Link 
            href="/dragonball" 
            className="w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition block"
          >
            Página Dragon Ball
          </Link>
          <HoverTitleComponent text="Dragon Ball Z" />
        </div>

        <div className="relative flex flex-col items-center w-[200px]">
          <Link 
            href="/generator" 
            className="w-full text-center py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition block"
          >
            Generador
          </Link>
        </div>
      </div>
    </main>
  );
}