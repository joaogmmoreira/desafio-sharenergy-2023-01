import './App.css';
// import { 
//   Routes, 
//   Route } from 'react-router-dom';
// import Login from './Pages/Login';
// import Users from './Pages/Users';
// import Cats from './Pages/Cats';
// import Dogs from './Pages/Dogs';
// import Customers from './Pages/Customers';
import AppRoutes from './AppRoutes';

export default function App() {
  return (
    <div>
      <AppRoutes />
    </div>
    // <Routes>
    //   <Route exact path="/" element={<Login />}/>
    //   <Route exact path="/users" element={<Users />}/>
    //   <Route exact path="/cats" element={<Cats />}/>
    //   <Route exact path="/dogs" element={<Dogs />}/>
    //   <Route exact path="/customers" element={<Customers />}/> 
    // </Routes>
  );
}
