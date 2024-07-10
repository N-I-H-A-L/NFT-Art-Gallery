import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SellNftPage from "./components/pages/SellNftPage";
import MyNftPage from "./components/pages/MyNftPage";
import BuyNftPage from "./components/pages/BuyNftPage";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy-nft" element={<BuyNftPage />} />
        <Route path="/sell-nft" element={<SellNftPage />} />
        <Route path="/my-nft" element={<MyNftPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
