export default function Dashboard({ bookings }) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-4">

        {bookings.map((b, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">

            <p className="font-bold text-lg">{b.name}</p>
            <p className="text-gray-500">{b.date} • {b.time}</p>

            <span className="inline-block mt-2 px-3 py-1 text-sm bg-pink-100 text-pink-600 rounded-full">
              {b.style}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}
