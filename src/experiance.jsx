import React from "react";

export default function ExperienceBooking() {
  // przykładowe dane
  const experience = {
    id: 1,
    title: "Degustacja win w Toskanii",
    coverURL:
      "https://images.unsplash.com/photo-1524594154908-eddffda84b0a?w=1200",
    max_guests: 12,
    taken_seats: [2, 5, 7],
  };

  const categories = [
    {
      id: 1,
      order: 1,
      title: "Informacje osobiste",
      questions: [
        { id: 1, question: "Jak masz na imię?" },
        { id: 2, question: "Jak masz na nazwisko?" },
      ],
    },
    {
      id: 2,
      order: 2,
      title: "Preferencje",
      questions: [
        { id: 3, question: "Jakie wina lubisz najbardziej?" },
        { id: 4, question: "Czy masz alergie?" },
      ],
    },
  ];

  const customer = null; // ustaw na obiekt, żeby przetestować flow zalogowanego

  const maxSeats = Math.max(
    0,
    (experience.max_guests ?? 6) - (experience.taken_seats?.length || 0)
  );

  const sortedCategories = [...categories].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="header bg-white border-b shadow-sm p-4 flex justify-between items-center">
        <div className="logo font-bold">Shop</div>
        <nav className="flex gap-4">
          {customer && customer.id ? (
            <a href="/profile" className="text-blue-600">
              {customer.firstName || "Profil"}
            </a>
          ) : (
            <a href="/login" className="text-blue-600">
              Zaloguj się
            </a>
          )}
        </nav>
      </div>

      {/* Hero */}
      <div className="hero relative">
        <img
          src={experience.coverURL}
          alt={experience.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-4 left-4 text-white bg-black/60 px-3 py-2 rounded-xl">
          <h1 className="text-2xl font-semibold">{experience.title}</h1>
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-96 border-r bg-gray-50 p-6">
          <div className="tabs">
            {sortedCategories.map((cat) => (
              <div key={cat.id} className="tab mb-6">
                <h2 className="font-semibold mb-3">{cat.title}</h2>
                {cat.questions.map((q) => (
                  <div key={q.id} className="mb-4">
                    <label className="block font-medium">{q.question}</label>
                    <input
                      type="text"
                      name={`q_${cat.id}_${q.id}`}
                      className="w-full mt-1 border rounded p-2"
                      defaultValue="Przykładowa odpowiedź"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Final step */}
          <div className="final-step">
            {!customer || !customer.id ? (
              <form className="space-y-3">
                <h2 className="text-lg font-semibold">
                  Utwórz konto aby zarezerwować
                </h2>
                <input
                  type="text"
                  placeholder="Imię"
                  className="w-full border rounded p-2"
                  defaultValue="Jan"
                />
                <input
                  type="text"
                  placeholder="Nazwisko"
                  className="w-full border rounded p-2"
                  defaultValue="Kowalski"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded p-2"
                  defaultValue="jan.kowalski@example.com"
                />
                <input
                  type="password"
                  placeholder="Hasło"
                  className="w-full border rounded p-2"
                  defaultValue="••••••••"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-xl"
                >
                  Utwórz konto
                </button>
                <span className="form-errors text-red-500 text-sm"></span>
              </form>
            ) : (
              <a
                href={`/checkout/${experience.id}`}
                className="block w-full bg-green-600 text-white py-2 rounded-xl text-center"
              >
                Przejdź do płatności
              </a>
            )}
          </div>
        </aside>

        {/* Seat selection */}
        <main className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-4">Wybierz miejsca</h2>
          <div className="grid grid-cols-6 gap-3">
            {Array.from({ length: experience.max_guests }).map((_, idx) => {
              const seatNumber = idx + 1;
              const isTaken =
                experience.taken_seats &&
                experience.taken_seats.includes(seatNumber);
              return (
                <div
                  key={seatNumber}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl font-semibold ${
                    isTaken
                      ? "bg-gray-300 text-gray-600"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
