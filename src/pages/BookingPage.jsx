import { useState } from "react";
import axios from "axios";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    style: ""
  });

  const handlePay = () => {

    let handler = window.PaystackPop.setup({
      key: "YOUR_PAYSTACK_KEY",
      email: form.email,
      amount: 5000 * 100,

      callback: function(response) {
        saveBooking(response.reference);
      }
    });

    handler.openIframe();
  };

  const saveBooking = async (ref) => {
    await axios.post("YOUR_BACKEND_URL/createBooking", {
      ...form,
      paymentRef: ref
    });

    alert("Booking successful!");
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input type="date" onChange={e => setForm({...form, date:e.target.value})}/>
      <input type="time" onChange={e => setForm({...form, time:e.target.value})}/>

      <select onChange={e => setForm({...form, style:e.target.value})}>
        <option>Classic</option>
        <option>Luxury</option>
        <option>Art</option>
      </select>

      <button onClick={handlePay}>Pay & Book</button>
    </div>
  );
}
