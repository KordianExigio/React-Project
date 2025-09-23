export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="fixed top-0 left-0 w-64 h-full z-50 flex bg-white flex-col"
    >
      <div className="flex-1 p-6 overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">Questionnaire</h3>
        <p className="text-gray-600">Questions will be displayed here…</p>
      </div>

      <div className="p-4 border-t flex justify-between">
        <button className="px-4 py-2 rounded-xl bg-gray-200">Back</button>
        <button className="px-4 py-2 rounded-xl bg-black text-white">Next</button>
      </div>
    </div>
  );
}
