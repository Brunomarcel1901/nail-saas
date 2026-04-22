import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, "bookings"));
      setBookings(snap.docs.map(doc => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {bookings.map((b, i) => (
        <div key={i}>
          <p>{b.name} - {b.date} {b.time}</p>
        </div>
      ))}
    </div>
  );
}