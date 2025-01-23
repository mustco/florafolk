import "./App.css";
import About from "./components/About";
import BestSelling from "./components/BestSelling";
import Categories from "./components/Categories";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PlantLover from "./components/PlantLover";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <About />
      <BestSelling />
      <Categories />
      <PlantLover />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
