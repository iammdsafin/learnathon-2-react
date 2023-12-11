import { createBrowserRouter } from "react-router-dom";
import AnotherGalaxy from "./pages/AnotherGalaxy";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/another-galaxy",
    element: <AnotherGalaxy />,
  },
]);
