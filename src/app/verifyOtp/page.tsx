'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaEnvelope, FaShieldAlt } from 'react-icons/fa';


// Zod schema for form validation
const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormData = z.infer<typeof schema>;

export default function VerifyAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Verification code sent to:', data.email);
    // Add your verification logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-white p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-100">
        <div className="flex flex-col items-center justify-center space-y-3 mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <FaShieldAlt className="text-green-600 text-3xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Account Verification
          </h2>
          <p className="text-gray-600 text-center text-sm">
            We have sent a verification code to your email address
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Verification Code'}
          </button>

          {/* Resend Code Option */}
          <div className="text-center text-sm text-gray-500">
            Didnt receive code?{' '}
            <button 
              type="button" 
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Resend
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          <p>Having trouble? Contact our <a href="#" className="text-green-600 hover:underline">support team</a></p>
        </div>
      </div>
    </div>
  );
}