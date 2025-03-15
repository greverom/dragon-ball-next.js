import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground p-10 transition-colors duration-300 mt-20">
      <h1 className="text-4xl font-bold text-center mb-3">Bienvenido</h1>
      <p className="text-xl text-center mb-8">Selecciona una opción:</p>

      <div className="flex gap-4">
        <Link 
          href="/dragonball" 
          className="w-[200px] text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Página Dragon Ball
        </Link>

        <Link 
          href="/generator" 
          className="w-[200px] text-center py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Generador
        </Link>
      </div>
    </main>
  );
}