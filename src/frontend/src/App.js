import './App.css';
import { 
  Routes, 
  Route } from 'react-router-dom';
import Login from './Pages/Login';


export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}/>  
    </Routes>
  );
}
