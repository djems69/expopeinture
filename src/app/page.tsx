import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen pt-16">
      <Image
        src="/images/bg03.jpeg"
        alt="Fond d'écran galerie"
        fill
        className="object-cover z-0"
        style={{objectPosition: 'center'}}
        priority
      />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 relative z-10 bg-black/40">
        <Image
          src="/images/logoxxx-removebg-preview.png"
          alt="Logo Tany'Art"
          width={300}
          height={80}
        />
        <h1 className="text-4xl font-bold mb-4 text-center text-white drop-shadow-lg">Bienvenue sur Tany&apos;Art</h1>
        <p className="text-xl mb-8 text-white drop-shadow">D&eacute;couvrez ma collection d&apos;&oelig;uvres d&apos;art.</p>
        <Link href="/galerie" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Voir la Galerie
        </Link>
      </div>
    </div>
  );
}
