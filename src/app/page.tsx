import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <Image
        src="/images/logoxxx-removebg-preview.png"
        alt="Logo Tany'Art"
        width={300}
        height={80}
      />
      <h1 className="text-4xl font-bold mb-4 text-center">Bienvenue sur Tany'Art</h1>
      <p className="text-xl mb-8">Découvrez ma collection d'œuvres d'art.</p>
      <Link href="/galerie" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Voir la Galerie
      </Link>
    </div>
  );
}
