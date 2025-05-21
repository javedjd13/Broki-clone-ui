import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import MainLayout from "../Layouts/MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // contains Header/Footer + <Outlet />
    children: [
      { index: true, element: <MainLayout /> },
    ],
  },
]);

export default router;
