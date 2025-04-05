import React, { useState } from 'react';
import './RegisterPageStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
            email: userData.email,
            password: userData.password, // Poslati lozinku
        };

        try {
            const response = await axios.post("https://mojcv-production-8561.up.railway.app/api/login", data);

            if (response.status === 200) {
                console.log("API odgovor:", response);

                // Sačuvaj token ako je prisutan
                window.sessionStorage.setItem('auth_token', response.data.access_token);
                window.sessionStorage.setItem('auth_name', response.data.user.name);

                // Preusmeri korisnika
                navigate("/admin");
            }
        } catch (error) {
            console.log("Greška:", error);
            alert("Desila se greška prilikom logovanja");
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="name"
                    name="name"
                    placeholder="Name"
                    value={userData.name}
                    onChange={handleInput}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleInput}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
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


export default LoginPage;

