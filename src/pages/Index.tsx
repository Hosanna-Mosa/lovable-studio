import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Heritage from "@/components/Heritage";
import Menu from "@/components/Menu";
import Locations from "@/components/Locations";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Heritage />
        <Menu />
        <Locations />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
