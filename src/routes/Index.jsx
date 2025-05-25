import Home from "../pages/Home";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Blogs from "../pages/Blogs";
import Listings from "../pages/Listings";
import OurTeam from "../pages/OurTeam";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";
import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/listings",
        element: <Listings />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/productdetail",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
