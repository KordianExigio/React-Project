import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-6">
          Log in
        </h2>
        <form className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Wpisz email"
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Hasło */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-gray-700 text-sm">
              Hasło
            </label>
            <input
              type="password"
              id="password"
              placeholder="Wpisz hasło"
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Przycisk */}
          <button
            type="submit"
            className="mt-2 w-full py-2.5 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
          >
            Zaloguj się
          </button>
        </form>
      </div>
    </div>
  );
}
