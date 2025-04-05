import React, { useState } from 'react';
import './RegisterPageStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
    });

    function handleInput(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    }

    let navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();  

        // Kreiranje objekta sa podacima za registrovanje
        const data = {
            name: userData.name,
            email: userData.email,
        };

        // Axios post zahtev sa podacima
        axios.post("=https://mojcv-production-8561.up.railway.app/api/register", data)
            .then(function (response) {
                console.log(response.data);
                navigate("/"); // Preusmeri korisnika na početnu stranu nakon registracije
            })
            .catch(function (error) {
                if (error.response) {
                    // Ako server odgovori sa greškom
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // Ako zahtev nije dobio odgovor
                    console.log(error.request);
                } else {
                    // Ako je došlo do greške u postavljanju zahteva
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
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="Name" 
                                        name="name" 
                                        required 
                                        value={userData.name} 
                                        onChange={handleInput} 
                                    />
                                </div>

                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="email" 
                                        placeholder="Email" 
                                        name="email" 
                                        required 
                                        value={userData.email} 
                                        onChange={handleInput} 
                                    />
                                </div>

                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit" id="register" name="register">Submit</button>
                                </div>

                                <br /><br />
                                <p><a href="/" className='tekstForme'>I already have an account!</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;

