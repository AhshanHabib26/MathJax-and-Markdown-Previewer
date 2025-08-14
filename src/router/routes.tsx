import MainLayout from "@/layout/MainLayout";
import HomePage from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
