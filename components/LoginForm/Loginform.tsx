import Link from "next/link";

export default function Login() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl ">
        <h1 className=" font-bold text-center text-primary text-4xl ">VHTOP Login</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-primary"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-primary"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-2">
          <button className="w-full px-4 py-2 tracking-wide text-primary transition-colors duration-200 transform bg-primary text-white rounded-md hover:bg-primary hover:text-white focus:outline-none focus:bg-primary focus:text-white">
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-right text-white">
          <Link
            href="/forget"
            className="text-xs text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
        </p>
      </div>
    </div>
  );
}