import Navbar from "../Layout/Navbar";
import Hero from "../Layout/Hero";
import Services from "../Layout/Services";
import Footer from "../Layout/Footer";

function HomePage() {
  return (
    <>
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative flex items-center justify-center overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Footer />
    </>
  );
}

export default HomePage;
