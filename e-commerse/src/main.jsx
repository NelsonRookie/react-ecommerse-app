import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes.........
import Home from "./routes/Home.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import TopRated from "./routes/TopRated.jsx";
import KidsWear from "./routes/KidsWear.jsx";
import MensWear from "./routes/MensWear.jsx";
import Electronics from "./routes/Electronics.jsx";
import Hero from "./components/Hero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hero",
    element: <Hero />,
  },

  {
    path: "/top",
    element: <TopRated />,
  },
  {
    path: "/kids",
    element: <KidsWear />,
  },
  {
    path: "/mens",
    element: <MensWear />,
  },
  {
    path: "/electronics",
    element: <Electronics />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
