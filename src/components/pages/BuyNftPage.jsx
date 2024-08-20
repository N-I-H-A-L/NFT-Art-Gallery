import Footer from "../Layout/Footer";
import MarketPlace from "../Layout/MarketPlace";
import Navbar from "../Layout/Navbar";

function BuyNftPage() {
  return (
    <>
      <div className="min-h-screen w-full dark:bg-black bg-white flex flex-col items-center justify-center">
        <Navbar />
        <MarketPlace />
      </div>
      <Footer />
    </>
  );
}

export default BuyNftPage;
