import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, userDetails }) => {
  return userDetails && userDetails.slug ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoutes;
