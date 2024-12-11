import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import NotFound from "../components/NotFound";
import Lesson from "../components/Lesson";
import Tutorial from "../components/Tutorial";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import ProtectedRoute from "../components/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        ),
      },
      {
        path: "/lesson",
        element: (
          <ProtectedRoute>
            <Lesson />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tutorila",
        element: (
          <ProtectedRoute>
            <Tutorial />
          </ProtectedRoute>
        ),
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default routes;
