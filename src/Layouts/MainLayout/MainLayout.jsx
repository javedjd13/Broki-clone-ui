import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] px-4 py-6">
        <Outlet />
      </main>
      <Footer />  
    </>
  );
};

export default MainLayout;