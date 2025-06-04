import React, { useState } from 'react';
import './RegisterPageStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });
function LoginPage() {
      
    const [userData,setUserData]=useState({
        name:"",
        password:""
    });
    function handleInput(e){  
    
        let newUserData = userData;  
        newUserData[e.target.name]=e.target.value;
        console.log(newUserData)
        setUserData(newUserData); 
    }
    let navigate = useNavigate();
    function handleLogin(e){
      
        e.preventDefault();   

            axios
           .post('https://mojcv-production.up.railway.app/api/login',data)
         
              .then((res)=>{  
            console.log(res.data);
            if(res.data.status===200){

             
                // Preusmeri korisnika
                navigate("/admin");
  }
    
else{
    alert("NEUSPESNO");
}
});
    }

    return (
        <div className='login'>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Log in</h2>
                            <form onSubmit={handleLogin}>
                                <div className="input-group">
                                    <input
                                        className="input--style-3"
                                        type="text" // Promenjeno na "text" jer je to polje za ime
                                        placeholder="Name"
                                        name="name"
                                        onInput={handleInput} // Koristi onChange umesto onInput
                                    />
                                </div>

                                <div className="input-group">
                                    <input
                                        className="input--style-3"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onInput={handleInput}// Koristi onChange umesto onInput
                                    />
                                </div>
                                
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit" id="login" name="login">Submit</button>
                                </div>
                                <br/><br/>
                                <p><a href="/register" className='tekstForme'>I am new here!</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LoginPage;
