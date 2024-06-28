import { ProtectedRoutePropsType } from './ProtectedRoute.type';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

const ProtectedRoute = ({ children }: ProtectedRoutePropsType) => {
  const { userEmail } = useAuth();
  if (userEmail === null) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
