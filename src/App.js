import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import './App.css';
import Admin from "../src/komponente/Admin";
import LoginPage from "../src/komponente/LoginPage";
import RegisterPage from "../src/komponente/RegisterPage";
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
