
import React from "react";

export default function ConfirmationPage() {
  return (
    <html>
      <head>
        <title>Confirmation for Experience - Shop</title>
      </head>
      <body>
        {/* <div className="z-20 w-full py-10 flex justify-center fixed top-0 left-0 px-4 bg-white border-b border-zinc-200">
          <a href="/">
            <img
              className="h-8"
              src="https://example.com/cdn/shop/files/logo.png"
              alt="logo"
            />
          </a>
        </div> */}

        <div className="mt-32" />

      

        <div
          className="w-full mx-auto font-orpheus font-light flex flex-col px-4"
          style={{ maxWidth: "min(1200px, 100%)" }}
        >
          <h1 className="text-3xl font-bold mt-8 mb-4">
            Confirmation for "Experience Title"
          </h1>

          <span className="text-sm font-light font-orpheus text-zinc-400">
            Your reservation was successfully completed. You can view your
            reservation details below.
          </span>

          <div className="mt-8">
            <h2 className="font-orpheus text-xl">Reservation for</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <div className="flex flex-col gap-1 font-nova mt-4">
                <span className="font-semibold text-black">First name</span>
                <span className="font-light">John</span>
              </div>

              <div className="flex flex-col gap-1 font-nova mt-4">
                <span className="font-semibold text-black">Last name</span>
                <span className="font-light">Doe</span>
              </div>

              <div className="flex flex-col gap-1 font-nova mt-4">
                <span className="font-semibold text-black">Phone number</span>
                <span className="font-light">+123456789</span>
              </div>

              <div className="flex flex-col gap-1 font-nova mt-4">
                <span className="font-semibold text-black">E-mail address</span>
                <span className="font-light">john@example.com</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-orpheus text-xl">Order data</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <div className="flex flex-col gap-1 font-nova mt-4">
                <span className="font-semibold text-black">Order number</span>
                <span className="font-light">#123456</span>
              </div>

              <div className="flex flex-col gap-1 font-nova mt-4">
                <span className="font-semibold text-black">Created on</span>
                <span className="font-light">2025-09-22</span>
              </div>

              <div className="flex flex-col gap-1 font-nova mt-4">
                <span className="font-semibold text-black">Status</span>
                <span className="font-light">Confirmed</span>
              </div>

              <div className="flex flex-col gap-1 font-nova mt-4">
                <span className="font-semibold text-black">Cost</span>
                <span className="font-light">$199</span>
              </div>
            </div>
          </div>

          <div className="my-16 flex gap-0 flex-col">
            <h2 className="font-orpheus text-xl">
              You can check your payment status here:
            </h2>
            <a
              className="disabled:bg-black px-8 disabled:cursor-not-allowed mt-6 w-fit bg-black transition-all hover:bg-somm h-[50px] justify-center font-medium duration-250 flex items-center cursor-pointer text-white font-orpheus"
              href="#"
            >
              Payment status
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

