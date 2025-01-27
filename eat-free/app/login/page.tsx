'use client'

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginSubmit = async () => {

    if(!email || !password) {
      alert('Please fill in  the email and password fields');
      return;
    }

    try {
      const payload = {
        email,
        password,
      }
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:5000/users',
        data: {
          payload
        },
      })
      console.log(response.data)
      if (response.status === 201) {
        alert('Login successful');
        window.location.href = '/home';
      } else {
        setError('Invalid credentials');
      }
    } catch (error) { 
      console.log(error);
    }
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className='w-full max-w-md p-8 bg-white rounded shadow-md'>
          <h1 className="text-4xl font-bold mb-4 text-gray-500">Login</h1>
          <div className="space-x-4">
            <form onSubmit={(e) => {
              e.preventDefault();  
              loginSubmit();
            }}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 w-full rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500 mt-4"
              />
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded w-full mt-6">
                Login
              </button>
              <p className="text-gray-500 text-sm mt-4">
                Don&apos;t you have an account? <Link href="/register" className="text-blue-500">Register here</Link>
              </p>
              {
                error && (
                  <div className="text-red-500 text-sm mt-2">
                    {error}
                  </div>
                )
              }
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