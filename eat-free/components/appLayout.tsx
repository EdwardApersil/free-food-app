import Image from 'next/image';
import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/background.png" // Ensure this path is correct
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <header className="w-full p-4 bg-opacity-75 bg-gray-800 text-white">
          <h1 className="text-2xl font-bold">Eat Free App</h1>
        </header>
        <main className="flex-1 w-full p-4">{children}</main>
        <footer className="w-full p-4 bg-opacity-75 bg-gray-800 text-white text-center">
          &copy; {new Date().getFullYear()} Eat Free App. All rights reserved.
        </footer>
      </div>
    </div>
  );
}