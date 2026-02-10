import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
};

export default App;
