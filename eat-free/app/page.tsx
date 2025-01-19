import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-500">Welcome to Eat Free</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              <Link href='/login'>Login</Link>
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded">Register</button>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/background.png" alt="Background" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}