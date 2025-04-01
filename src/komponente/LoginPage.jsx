import React from 'react';
import './RegisterPageStyle.css';
import {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function LoginPage() {


    
    const [userData,setUserData]=useState({
        name:"",
        email:""
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
        .post("http://mojcv-production-d9c2.up.railway.app/api/login", userData )
       
        .then((res)=>{  
            console.log(res.data);
            if(res.data.status===200){
            
               
              
                // window.sessionStorage.setItem("auth_id",res.data.user.id);
              
                // window.sessionStorage.setItem("auth_token",res.data.access_token);
                // window.sessionStorage.setItem("auth_name",res.data.user.name);
              
                console.log(res.data);
                // if(res.data.role === 'admin')
                // {
                //     window.sessionStorage.setItem("auth_name","Admin");

                  navigate("/admin")
                // }
                // else{
                //     navigate("/");  
                // }



            }else{
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
                            <form onSubmit={handleLogin} >                          
                                                      
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="name" 
                                        placeholder="Name" 
                                        name="name"
                                        onInput={handleInput}
                                    />
                                </div>
                                
                                <div className="input-group">
                                    <input className="input--style-3" type="email" placeholder="Email" name="email"  onInput={handleInput}/>
                                </div>
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit" id="login" name="login">Submit</button>
                                </div>
                                <br/><br/>
                                <p><a href="/register"  className='tekstForme'>I am new here!</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            </div>
        
    );
}

export default LoginPage;
