export default function AuthForms() {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">Create Account</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded-xl p-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-xl p-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-xl p-3"
        />
        <button className="w-full py-3 rounded-2xl bg-black text-white font-semibold">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <button className="underline text-black">Log in</button>
      </p>
    </div>
  );
}
