'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
    const userTypes = ['IndividualUser', 'Restaurants', 'Organizations'];
    const [selectedType, setSelectedType] = useState('IndividualUser');

    

    return (
        <div className="flex h-screen">
            <div className="flex-1 flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
                    <h1 className="text-4xl font-bold mb-6 text-gray-700">Create Free Account</h1>
                    <form action="" className='flex flex-col gap-4'>
                        <select 
                            className="px-4 py-3 w-full rounded text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            {userTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Name"
                            className="px-4 py-3 w-full rounded text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-4 py-3 w-full rounded text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            className="px-4 py-3 w-full rounded text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        {selectedType === 'Restaurants' && (
                            <input
                                type="text"
                                placeholder="Restaurant Name"
                                className="px-4 py-3 w-full rounded text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        )}
                        <input
                            type="password"
                            placeholder="Password"
                            className="px-4 py-3 w-full rounded text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <button type="submit" className="px-4 py-3 bg-green-500 text-white rounded w-full mt-6">
                            Create Account
                        </button>
                        <p className="text-gray-500 text-sm mt-4">
                            Already have an account? <Link href="/login" className='text-blue-500'>Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
            <div className="flex-1 relative">
                <Image src="/background.png" alt="Background" layout="fill" objectFit="cover" />
            </div>
        </div>
    );
}