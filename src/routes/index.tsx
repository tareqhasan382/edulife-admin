import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import NotFound from "../components/NotFound";
import Lesson from "../components/Lesson";
import Tutorial from "../components/Tutorial";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import ProtectedRoute from "../components/ProtectedRoute";
import Vocabulary from "../components/Vocabulary";
import AddVocabulary from "../components/AddVocabulary";
import AddLesson from "../components/AddLesson";
import AddTutorial from "../components/AddTutorial";

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
        path: "/lesson/add-lesson",
        element: (
          <ProtectedRoute>
            <AddLesson />
          </ProtectedRoute>
        ),
      },
      {
        path: "/vocabulary",
        element: (
          <ProtectedRoute>
            <Vocabulary />
          </ProtectedRoute>
        ),
      },
      {
        path: "/vocabulary/add-vocabulary",
        element: (
          <ProtectedRoute>
            <AddVocabulary />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tutorial",
        element: (
          <ProtectedRoute>
            <Tutorial />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tutorial/add-tutorial",
        element: (
          <ProtectedRoute>
            <AddTutorial />
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
