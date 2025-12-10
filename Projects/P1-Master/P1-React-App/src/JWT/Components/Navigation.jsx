import { Link, Outlet } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <p>home</p>
      <Link to="/login" style={{ margin: '10px' }}>
        Login
      </Link>
      <Link to="/profile">Profile</Link>
      <Outlet />
    </div>
  );
}
