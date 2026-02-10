import React, { useState } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import { Button } from "../components/Button";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleCheckout = async () => {
    const res = await fetch(
      "https://prebook.rohitprashar.com/cmb-backend/api/create-order.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email })
      }
    );

    const data = await res.json();

    if (!data.payment_session_id) {
      alert("Order creation failed");
      return;
    }

    // const cashfree = await load({ mode: "sandbox" });
    const cashfree = await load({ mode: "production" });

    cashfree.checkout({
      paymentSessionId: data.payment_session_id,
      redirectTarget: "_self"
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-zinc-900 p-6 rounded-2xl w-full max-w-md shadow-xl">

        <h2 className="text-white text-xl font-semibold mb-4 text-center">
          Checkout
        </h2>

        {/* Name */}
        <input
          className="w-full mb-3 px-4 py-3 rounded-xl
                     bg-white text-black
                     placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-green-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />

        {/* Phone */}
        <input
          className="w-full mb-3 px-4 py-3 rounded-xl
                     bg-white text-black
                     placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-green-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          placeholder="Mobile Number"
        />

        {/* Email */}
        <input
          className="w-full mb-5 px-4 py-3 rounded-xl
                     bg-white text-black
                     placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (optional)"
        />

        <Button
          onClick={handleCheckout}
          className="w-full py-3 text-lg rounded-xl bg-green-500 hover:bg-green-600"
        >
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
