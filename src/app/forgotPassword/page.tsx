'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormData = z.infer<typeof schema>;

export default function ForgotPasswordForm() {
     const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Password reset for:', data.email);
    // Add your password reset logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-white p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-100">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Image 
              src="/icon.png" 
              alt="BistroPulse Logo" 
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-green-600">BistroPulse</h1>
              <p className="text-sm text-green-500 -mt-1">Food at your doorstep</p>
            </div>
          </div>
          
          <div className="bg-green-100 p-3 rounded-full mb-4">
            <FaLock className="text-green-600 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
          <p className="text-gray-600 text-sm mt-1 text-center">
            Enter your email to receive a password reset link
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-green-500" />
              </div>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register('email')}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
              onClick={() => router.push('/resetPassword')}
            disabled={isSubmitting}
            className={`w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </button>

          <div className="text-center text-sm text-gray-500 mt-4">
            Remember your password?{' '}
            <a href="/login" className="text-green-600 hover:text-green-700 font-medium">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}