import axios from "axios";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import './App.css';
import Admin from ".komponente/Admin";
import LoginPage from "./komponente/LoginPage";
import RegisterPage from "./komponente/RegisterPage";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
function App() {
 
  return (
    <BrowserRouter className="App">
      

     
       
      

        <Routes>   
          
          <Route   path="https://mojcv-production-d9c2.up.railway.app"  element={<LoginPage  />}/>
          <Route   path="https://mojcv-production-d9c2.up.railway.app/register" element={<RegisterPage />}/>

          <Route   path="https://mojcv-production-d9c2.up.railway.app/admin"  element={<Admin/>}/>
       
          
            
        </Routes>
        
      
    </BrowserRouter>
  );
}

export default App;
