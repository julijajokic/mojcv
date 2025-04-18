import React, { useState } from 'react';
import './RegisterPageStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });
function LoginPage() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
    });

    let navigate = useNavigate();

    // Funkcija za unos podataka
    function handleInput(e) {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    }

    // Funkcija za login
    async function handleLogin(e) {
        e.preventDefault();

        const data = {
            name: userData.name,
            email: userData.email,
        };

        try {
            const response =await axios.post('https://mojcv-production.up.railway.app/api/login',data,{
            headers: {
                'Content-Type': 'application/json',  
                'Accept': 'application/json',        
            }
        });
        

            if (response.data.status === 200) {
                console.log("API odgovor:", response);

             
                // Preusmeri korisnika
                navigate("/admin");
            }
        } catch (error) {
            console.log("Greška:", error);
            alert("Desila se greška prilikom logovanja");
        }
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
                                        value={userData.name} // Povezivanje sa stanjem
                                        onChange={handleInput} // Koristi onChange umesto onInput
                                    />
                                </div>

                                <div className="input-group">
                                    <input
                                        className="input--style-3"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={userData.email} // Povezivanje sa stanjem
                                        onChange={handleInput} // Koristi onChange umesto onInput
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
