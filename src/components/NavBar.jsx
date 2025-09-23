import React from "react";

export default function NavBar () {
  
  
  return ( 
    <div className="profile-edit font-nova">
      {/* Header */}
      <div className="header z-20 w-full py-10 flex justify-between md:justify-center fixed top-0 left-0 px-4 bg-white border-b border-zinc-200">
        <a href="/">
          <img
            className="logo h-5 md:h-8"
            src="https://example.com/cdn/shop/files/logo.png"
            alt="logo"
          />
        </a>
        <div className="md:absolute top-0 bottom-0 my-auto right-12 font-orpheus h-fit">
          <a href="/" className="flex items-center gap-2 group">
            <span>Go to app</span>
            <svg
              className="transition-all relative group-hover:translate-x-1"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4.25C12 4.8065 12.5498 5.6375 13.1063 6.335C13.8218 7.235 14.6767 8.02025 15.657 8.6195C16.392 9.06875 17.283 9.5 18 9.5M18 9.5C17.283 9.5 16.3912 9.93125 15.657 10.3805C14.6767 10.9805 13.8218 11.7657 13.1063 12.6642C12.5498 13.3625 12 14.195 12 14.75M18 9.5H0"
                stroke="black"
              />
            </svg>
          </a>
        </div>
      </div>

     </div>
  );
};

