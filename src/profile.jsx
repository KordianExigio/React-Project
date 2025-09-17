import React from "react";
import "./prof-style.css";

const UserProfile = () => {
  // Przykładowe dane profilu bo nie mam dostepu do
  const customer = {
    first_name: "Jan",
    last_name: "Kowalski",
    profile_picture: "https://randomuser.me/api/portraits/men/75.jpg",
    birthday: "15-09-1990",
    interests: ["Photography", "Traveling", "Coding", "Cooking"],
    social_handles: [
      { type: "Twitter", link: "https://twitter.com/jankowalski" },
      { type: "Instagram", link: "https://instagram.com/jankowalski" },
      { type: "LinkedIn", link: "https://linkedin.com/in/jankowalski" },
    ],
  };

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

      <div className="mt-40"></div>

      {/* Main content */}
      <div className="profile-container max-w-[600px] w-full items-center px-4 flex flex-col mx-auto mt-32">

        <img
          src={customer.profile_picture}
          className="profile-picture w-24 h-24 object-cover rounded-full mt-4 mb-8"
        />
        <h1 className="font-light font-orpheus text-2xl">
          {customer.first_name} {customer.last_name}
        </h1>
        <span className="member-since text-black/25 mb-8 mt-2">
          Member since 2025
        </span>

        {/* Birthday */}
        <div className="flex flex-col gap-2 w-full">
          <span className="text-zinc-400">Birthday</span>
          <div className="flex gap-4 items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_272)">
                <path
                  d="M7.23786"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_272">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>{customer.birthday}</span>
          </div>
        </div>

        {/* Interests */}
        <div className="flex flex-col gap-2 w-full mt-4">
          <span className="text-zinc-400">Interested in</span>
          <div className="flex flex-wrap gap-2 interests">
            {customer.interests.map((interest, i) => (
              <div
                key={i}
                className="single-interest border flex gap-2 cursor-not-allowed items-center hover:bg-zinc-200 border-black/15 text-sm text-black/50 rounded-full px-3 py-2 h-fit"
              >
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social handles */}
        <div className="flex flex-col gap-2 w-full mt-4">
          <span className="text-zinc-400">Social handles</span>
          <div className="flex flex-col gap-2 w-full handles content-start items-start">
            {customer.social_handles.map((handle, index) => (
              <a
                key={index}
                href={handle.link}
                className="border flex gap-2 cursor-pointer items-center hover:bg-zinc-200 border-black/15 text-sm text-black/50 rounded-full px-3 py-2 h-fit"
              >
                <span>{handle.type}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
