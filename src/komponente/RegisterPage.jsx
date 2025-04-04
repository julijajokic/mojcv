import React from 'react';
import './RegisterPageStyle.css';
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function RegisterPage() {
    const [userData,setUserData]=useState({
       name:"",
        email:"",
        // phone:"",
        // birthdate:"",
        // password:""
    });
    function handleInput(e){  
        let newUserData = userData;  
        newUserData[e.target.name]=e.target.value;
        console.log(newUserData);
     
        setUserData(newUserData); 
 
    }
    let navigate = useNavigate();
    function handleRegister(e){
             
        e.preventDefault();  
             
          var config = {
                method: 'post',
                url: 'https://mojcv-production-8561.up.railway.app/api/register',
               
              };  
          
              axios(config)
              .then(function (response) {  
                    console.log(response.data);
                  
                     navigate("/");
                })
                .catch(function (error) {
                    if (error.response) {
                      // Request made and server responded
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                    } else if (error.request) {
                      // The request was made but no response was received
                      console.log(error.request);
                    } else {
                      // Something happened in setting up the request that triggered an Error
                      console.log('Error', error.message);
                    }
                
                  });
    }
    return (
        <div className='register'>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Register</h2>
                                <form onSubmit={handleRegister}>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Name" name="name" required onInput={handleInput}/>
                                    </div>
                            
                                    
                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="email" id="emailR"  required onInput={handleInput}/>
                                    </div>
                        
                                    {/* <div className="input-group">
                                        <input className="input--style-3" type="password" placeholder="Password" name="password"required onInput={handleInput}/>
                                    </div> */}
                                    <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" type="submit" id="register" name="register" >Submit</button>
                                    </div>
                                    <br/><br/>
                                    <p><a href="/"  className='tekstForme'>I already have an account!</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default RegisterPage;
