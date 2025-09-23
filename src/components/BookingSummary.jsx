export default function BookingSummary() {
  return (
    <div className="sticky bottom-0 w-full bg-white border-t shadow-lg p-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">Selected seats: 2</p>
          <p className="font-bold text-lg">$120</p>
        </div>
        <button className="px-6 py-3 rounded-2xl bg-black text-white font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
}
