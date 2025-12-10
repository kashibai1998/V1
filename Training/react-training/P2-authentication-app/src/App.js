import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-content';

function App() {
  const useCtx = useContext(AuthContext);
  return (
    <Router>
      <Layout >
        <Routes>
          {
            !useCtx.isLoggedIn &&
            <Route exact path='/' element={<HomePage />} />
          }
          {
            !useCtx.isLoggedIn &&
            <Route path='/auth' element={<AuthPage />} />
          }
          {
            useCtx.isLoggedIn && 
            <Route path='/profile' element={<UserProfile />} />
          }
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
