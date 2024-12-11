import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../Redux/store";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth?.accessToken) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;
