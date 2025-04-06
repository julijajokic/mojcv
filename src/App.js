import axios from "axios";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import './App.css';
import Admin from "./komponente/Admin";
import LoginPage from "./komponente/LoginPage";
import RegisterPage from "./komponente/RegisterPage";
const axiosInstance = axios.create({
  baseURL: 'http://localhost:$PORT'
});
function App() {
 
  return (
    <BrowserRouter className="App">
      

     
       
      

        <Routes>   
          
          <Route   path="/"  element={<LoginPage  />}/>
          <Route   path="/register" element={<RegisterPage />}/>

          <Route   path="/admin"  element={<Admin/>}/>
       
          
            
        </Routes>
        
      
    </BrowserRouter>
  );
}

export default App;
