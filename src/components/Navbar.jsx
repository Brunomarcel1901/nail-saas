export default function Navbar() {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">

      <h1 className="font-bold text-xl">💅 NailSaaS</h1>

      <div className="flex gap-6 text-gray-600">
        <a href="/">Book</a>
        <a href="/dashboard">Dashboard</a>
      </div>

    </div>
  );
}
