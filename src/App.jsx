import "./App.css";
import { Footer } from "./components/content.jsx";
import { MainContent } from "./components/content.jsx";
import { FAQ } from "./components/content.jsx";
import { Header } from "./components/content.jsx";
import { ProductSection } from "./components/content.jsx";
import { Provider } from "./components/ui/provider.jsx"

function App() {
  return (
    <Provider>
      <div>
        <Header />
        <MainContent />
        <ProductSection />
        <FAQ />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
