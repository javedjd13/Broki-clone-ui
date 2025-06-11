import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ScrollToTop from "../../hooks/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] ">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
