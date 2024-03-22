import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user from the server
  const { isLoading, isAuthenticated } = useUser();

  //3. If user is not authenticated, redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, navigate, isLoading]);
  //2. While loading, show spinner
  if (isLoading)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );

  //4. If user is authenticated, render children

  if (isAuthenticated) return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
export default ProtectedRoute;
