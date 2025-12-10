import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './multiToolkit';

export default function Auth() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <h2>Auth</h2>
      {auth && <p>success</p>}
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}
