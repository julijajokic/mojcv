import React, { useState } from 'react';
import './RegisterPageStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",  // Dodano polje za lozinku
    });

    function handleInput(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    }

    let navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        const data = {
            name: userData.name,
            email: userData.email, // Poslati lozinku
        };

        axios.post(`${import.meta.env.VITE_API_URL}/login`, data)
            .then(function (response) {
                console.log("API odgovor:", response);
                if (response.data.token) { // Proveri da li je token prisutan
                    // Sačuvaj token
                    // localStorage.setItem('auth_token', response.data.token);

                    // Preusmeri korisnika
                    navigate("/admin");
                } else {
                    alert("Login neuspešan");
                }
            })
            .catch(function (error) {
                console.log("Greška:", error);
                alert("Desila se greška prilikom logovanja");
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
                                        type="name"  // Ispravljeno: koristi "email" umesto "text"
                                        placeholder="Name" 
                                        name="name"
                                        value={userData.name}
                                        onChange={handleInput} 
                                    />
                                </div>
                                
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="email"  // Dodano polje za lozinku
                                        placeholder="Email" 
                                        name="email"
                                        value={userData.email}
                                        onChange={handleInput} 
                                    />
                                </div>

                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit" id="login" name="login">Submit</button>
                                </div>
                                <br /><br />
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

