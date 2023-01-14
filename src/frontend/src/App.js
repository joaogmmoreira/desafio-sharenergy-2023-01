import './App.css';
import { 
  Routes, 
  Route } from 'react-router-dom';
import Login from './Pages/Login';
import Users from './Pages/Users';


export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/users" element={<Users/>}/>  
    </Routes>
  );
}
