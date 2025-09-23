export default function Seats() {
  return (
    <div className="seats grid grid-cols-4 gap-4 p-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <button
          key={i}
          className="seat w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-black hover:text-white transition"
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
