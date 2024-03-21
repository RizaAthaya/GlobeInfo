import React from "react";
import { createBrowserRouter } from "react-router-dom";

//Layout
import MainLayout from "../layout/MainLayout";

// Pages
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:name",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
