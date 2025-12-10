import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Actions/authActions';
import { useSelector } from 'react-redux';
export default function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const { auth, loading, error } = useSelector((state) => state.auth);
  function handleChange(e) {
    setCredentials((credentials) => {
      return { ...credentials, [e.target.name]: e.target.value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(credentials));
  }
  return (
    <div>
      <p>login form</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={credentials.username}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={credentials.password}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>error in login</p>}
      {loading && <p>loading in login</p>}
      {auth && <p>authenticated</p>}
    </div>
  );
}
