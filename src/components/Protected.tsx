import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../stores/useAuth";

const Protected = ({ children }: { children: ReactElement }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/blogs" />;
  }
  return children;
};

export default Protected;
