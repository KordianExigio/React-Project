import React from "react";

const ErrorPage = ({ errorCode, errorMessage, pageProps }) => {
  return (
    <div className="font-nova flex flex-col items-center justify-center h-screen w-screen bg-white">
      {/* Logo */}
      <img
        src="https://example.com/cdn/shop/files/logo.png"
        className="w-[300px]"
        alt="Error"
      />

      {/* Error code */}
      <h1 className="font-orpheus text-8xl mt-8">{errorCode}</h1>

      {/* Error message */}
      <span className="font-orpheus text-zinc-500 mt-4">{errorMessage}</span>

      {/* Back to homepage */}
      <a
        href="/"
        className="mt-8 font-orpheus w-fit px-4 py-2.5 gap-3 flex items-center justify-center bg-somm rounded-full transition-all hover:bg-somm/80"
      >
        <span className="text-white font-medium">Go back to homepage</span>
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.25C12 4.8065 12.5498 5.6375 13.1063 6.335C13.8218 7.235 14.6767 8.02025 15.657 8.6195C16.392 9.06875 17.283 9.5 18 9.5M18 9.5C17.283 9.5 16.3912 9.93125 15.657 10.3805C14.6767 10.9805 13.8218 11.7657 13.1063 12.6642C12.5498 13.3625 12 14.195 12 14.75M18 9.5H0"
            stroke="white"
          />
        </svg>
      </a>
    </div>
  );
};

export default ErrorPage;
