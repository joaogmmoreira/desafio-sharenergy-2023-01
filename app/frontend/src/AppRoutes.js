import React, { useContext } from 'react';
import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { AuthProvider, AuthContext } from './Contexts/Auth';
import Login from './Pages/Login';
import Users from './Pages/Users';
import Cats from './Pages/Cats';
import Dogs from './Pages/Dogs';
import Customers from './Pages/Customers';
import Loading from './Components/Loading';

export default function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <Loading/>
    }

    if (!authenticated) {
      return <Navigate to="/login"/>
    }
    return children;
  };
  
  return (
    <Routers>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/users" element={<Private><Users /></Private>}/>
          <Route exact path="/cats" element={<Private><Cats /></Private>}/>
          <Route exact path="/dogs" element={<Private><Dogs /></Private>}/>
          <Route exact path="/customers" element={<Private><Customers /></Private>}/>
        </Routes>
      </AuthProvider>
    </Routers>
  )
}
