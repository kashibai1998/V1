import './App.css';
import { Provider } from "react-redux";
import store from "./Store/store";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from "./Components/User";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    path: '/', element: <Home />, children: [
      { path: '/login', element: <Login /> },
      { path: '/profile', element: <User /> }
    ]
  },
  // { path: '/login', element: <Login /> },
  // { path: '/profile', element: <User /> }
])
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route>
    //       <Route path="/login" element={<Login />}></Route>
    //       <Route path="/profile" element={<User />}></Route>
    //       {/* <ProtectedRoute path="/profile" component={User}></ProtectedRoute> */}
    //     </Route>
    //   </Routes>
    // </Router>
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
