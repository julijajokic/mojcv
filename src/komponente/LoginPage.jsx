import React, { useState } from 'react';
import './RegisterPageStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
    });

    // Funkcija za ažuriranje stanja na osnovu unosa
    function handleInput(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    }

    let navigate = useNavigate();

    // Funkcija za slanje login podataka
    function handleLogin(e) {
        e.preventDefault();  

        const data = {
            name: userData.name,
            email: userData.email,
        };

        // Axios POST zahtev za login
        axios.post('/api/login', data)
            .then(function (response) {
                console.log("API odgovor:", response);
                if (response.data.status === 200) {
                    // Možeš da sačuvaš podatke o korisniku, ako je potrebno (npr. auth_token)
                    console.log(response.data);

                    
                        navigate("/"); // Preusmeri na početnu stranu
                    
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
                                        type="text" // Ispravljeno: koristi "text" umesto "name"
                                        placeholder="Name" 
                                        name="name"
                                        value={userData.name} // Kontrolisano polje
                                        onChange={handleInput} 
                                    />
                                </div>
                                
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="email" 
                                        placeholder="Email" 
                                        name="email" 
                                        value={userData.email} // Kontrolisano polje
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
