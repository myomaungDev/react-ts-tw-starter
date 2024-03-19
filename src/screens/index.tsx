import { createBrowserRouter } from "react-router-dom";
import { AppHomeScreen } from "./Home";
import { AppAboutScreen } from "./About";
import { AppContactScreen } from "./Contact";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <AppHomeScreen /> },
  { path: "/about", element: <AppAboutScreen /> },
  { path: "/contact", element: <AppContactScreen /> },
]);
