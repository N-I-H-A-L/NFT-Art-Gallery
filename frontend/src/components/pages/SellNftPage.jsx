import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import { SellNftForm } from "../Layout/SellNftForm";

function SellNftPage() {
  return (
    <>
      <div className="w-full dark:bg-black bg-white flex items-center justify-center">
        <Navbar />
        <SellNftForm />
      </div>
      <Footer />
    </>
  );
}

export default SellNftPage;
