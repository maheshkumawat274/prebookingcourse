import { useEffect, useState } from "react";

type Status = "success" | "failed" | "error";

const SuccessPage = () => {
  const [status, setStatus] = useState<Status>("error");

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("status");
    if (s === "success" || s === "failed") setStatus(s);
  }, []);

  if (status === "success")
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-green-400 text-2xl mb-2">✅ Payment Successful</h1>
        <a href="/" className="text-green-400 underline">Go to Home</a>
      </div>
    );

  if (status === "failed")
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-red-400 text-2xl mb-2">❌ Payment Failed</h1>
        <a href="/checkout" className="text-red-400 underline">Try Again</a>
      </div>
    );

  return <div className="text-red-500">⚠ Something went wrong</div>;
};

export default SuccessPage;
