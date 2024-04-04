import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import CategoryPage from "./pages/categories";
import Root from "./Root";
import Home from "./pages/home";
import PatientRecord from "./pages/patient-record";
import PatientRecordDetail from "./pages/patient-record-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/patient-record",
        element: <PatientRecord />,
      },
      {
        path: "/patient-record-detail",
        element: <PatientRecordDetail />,
      },
      {
        path: "mammary",
        element: <CategoryPage type="Mamario" />,
      },
      {
        path: "obstetric",
        element: <CategoryPage type="Obstétrico" />,
      },
      {
        path: "transvaginal",
        element: <CategoryPage type="Transvaginal" />,
      },
      {
        path: "tendinous-muscle",
        element: <CategoryPage type="Músculo Tendinoso" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
