import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[80vh]">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
