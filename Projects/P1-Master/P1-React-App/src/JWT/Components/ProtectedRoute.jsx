import { useSelector } from 'react-redux';
import { Route, redirect } from 'react-router-dom';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { auth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => (auth ? <Component {...props} /> : 'redirect')}
    />
  );
}
