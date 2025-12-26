import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

function App() {
  return (
      <div>
        <Header />
        <MainContent />
        <ProductSection />
        <MainContent/>
        <Footer />
        <FAQ />
      </div>

  );
}

export default App;
