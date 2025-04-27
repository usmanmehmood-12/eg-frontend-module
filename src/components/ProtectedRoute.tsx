import React, { JSX, useContext } from 'react'; // Import React to fix JSX.Element issue
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * A route that redirects to the login page if the user is not authenticated.
 *
 * This route should be used to protect content that requires the user to be
 * authenticated.
 *
 * The route takes a single prop, `children`, which is the content to be rendered
 * if the user is authenticated. If the user is not authenticated, the route
 * redirects to the login page.
 */
const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const { user } = useContext(AuthContext)!;

  if (user) {
    return <>{children}</>; // Render the children (protected content)
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
