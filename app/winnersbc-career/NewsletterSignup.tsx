import React from 'react';

export default function NewsletterSignup() {
  return (
    <div className="py-16 md:py-24 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest career opportunities and training updates.</p>
        <form className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}