import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl text-gray-600 font-bold text-center mb-5">Bienvenido</h1>
      <p className="text-xl text-gray-600 text-center mb-8">Selecciona una opción:</p>

      <div className="flex gap-4">
        
        <Link href="/dragonball" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Página Dragon Ball
        </Link>

        <Link href="/generator" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Generador de Contraseñas
        </Link>
      </div>
    </main>
  );
}