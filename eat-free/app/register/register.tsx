import Image from 'next/image';

export default function Login() {
    return (
        <div className="flex h-screen">
            <div className="flex-1 flex items-center justify-center bg-gray-100">
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-gray-500">Login to Eat Free app</h1>
                    <div className="space-x-4">
                        <form action="">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="px-4 py-2 w-full rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="password"
                                placeholder=""
                                className="px-4 py-2 w-full rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-4"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="px-4 py-2 w-full rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="px-4 py-2 w-full rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-4"
                            />
                            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded w-full mt-6">
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex-1 relative">
                <Image src="/background.png" alt="Background" layout="fill" objectFit="cover" />
            </div>
        </div>
    );
}