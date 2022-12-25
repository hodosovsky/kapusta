import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  return token ? <Navigate to="/home/expenses" /> : <Outlet />;
};
