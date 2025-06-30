import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductShowcase from "./components/ProductShowcase";
import TrustedBy from "./components/TrustedBy";

export default function Home() {
  return (
    <main className=" overflow-hidden ">
      <Banner />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <ProductShowcase />
      <FAQ />
      <Footer />
    </main>
  );
}
