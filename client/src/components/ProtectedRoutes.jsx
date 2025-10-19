import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.userSlice);
  const { isAuthenticated, screenLoading } = data;
  // console.log(data);
  // console.log(isAuthenticated);

  useEffect(() => {
    console.log(!isAuthenticated && !screenLoading);
    if (!screenLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, screenLoading]);
  return children;
};

export default ProtectedRoutes;
