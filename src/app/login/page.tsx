'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Image from 'next/image';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Logging in with', email, password);
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <div className="flex flex-col items-center mb-6">
          <Image 
            src="/icon.png" // make sure this logo exists in /public
            alt="TangaWatts Logo"
            width={68}
            height={68}
            className="mb-2"
            priority
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-600">PowerConnect</h1>
            <p className="text-sm text-green-500">Digital Energy Access for Rwanda</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 text-center">
            Sign in to your account
          </h2>

          <div className="relative">
           <span className="text-black ">
             <FaEnvelope />
           </span>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 mt-1 pr-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="relative">
          <span className="text-black ">
            <FaLock/>
          </span>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 mt-2 pr-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              minLength={8}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`bg-green-600 text-white py-2 px-4 rounded w-full transition ${
              isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-green-700'
            }`}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <p className="text-gray-600">New user?</p>
            <button
              onClick={() => router.push('/signup')}
              className="text-green-600 hover:underline"
            >
              Sign up
            </button>
          </div>

          <button
            onClick={() => router.push('/forgotPassword')}
            className="text-green-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
}
