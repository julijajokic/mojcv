import React from 'react';
import axios from "axios";
import './Admin.css';
import {useNavigate } from "react-router-dom";



function Admin() {
    const navigate = useNavigate();
    const ArrowButton = ({ text ,customStyle}) =>{
        return<div className="arrow-button" style={{...customStyle}}>{text}</div>
    }
  
    function handleLogout(){ 
   
        axios.post('/api/logout', data)
        
      
      
        .then(function (response) {
         
          console.log(response);
         
        alert("Uspesno ste se izlogovali");
          navigate('/');
       
    
        })
        .catch(function (error) {
         
          
          console.log(error);
          
    
        }); 
      }
    
    

                 
                   
              
               

   
return (
    <div style={{ backgroundColor: "#064996", height: "300vh", color: "white", textAlign: "center", paddingTop: "30px"}}>
        <h2 style={{ position:"relative", marginLeft:"-400px"}}>CURRICULUM VITAE</h2>
        {/* display: "flex", flexDirection: "column", alignItems: "flex-start"  */}
        {/* Dugme "Lice" */}
        <ArrowButton   
            text="LIČNE INFORMACIJE
                  PERSONAL INFORMATION"
           
            customStyle={{
                position:"relative",
                fontSize: "18px", 
                fontWeight: "bold",
                backgroundColor: "white", 
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              
                left:"30px",
                marginTop: "50px", // Razmak između h2 i dugmeta "Lice"
            }} 
        />

        {/* Paragrafi */}
        <p style={{
            position:"relative",
            fontSize: "18px", 
            fontWeight: "bold",
             marginLeft:"30px",
             marginTop: "10px",  // Povećava razmak između dugmeta "Lice" i paragrafa
            textAlign: "left",
            width: "100%",
        }}>
            Ime i prezime:
        </p>

        <p style={{
            poistion:"relative",
            fontSize: "18px", 
            fontWeight: "bold",
            marginLeft:"30px",
            marginTop: "10px", 
            textAlign: "left",
            width: "100%",
        }}>
            adresa:
        </p>

        <p style={{
            position:"relative",
            fontSize: "18px", 
            fontWeight: "bold",
            marginLeft:"30px",
            marginTop: "10px", 
            textAlign: "left",
            width: "100%",
        }}>
            telefon:
        </p>

        <p style={{
             position:"relative",
            fontSize: "18px", 
            fontWeight: "bold",
            marginLeft:"30px",
            marginTop: "10px", 
            textAlign: "left",
            width: "100%",
        }}>
            e-mail:
        </p>

        <p style={{
             position:"relative",
            fontSize: "18px", 
            fontWeight: "bold",
            marginLeft:"30px",
            marginTop: "10px", 
            textAlign: "left",
            width: "100%",
        }}>
            državljanstvo:
        </p>

        {/* Dugme "LI" */}
        <ArrowButton   
            text="OBRAZOVANJE I OSPOSOBLJENOST" 
            customStyle={{
                position:"relative",
                fontSize: "18px", 
                fontWeight: "bold",
                backgroundColor: "white", 
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "15px",
                marginLeft:"30px", // Povećava razmak između "Državljanstvo" i dugmeta "LI"
            }} 
        />
      
           
            <p style={{
                 position:"relative",
            fontSize: "18px", 
            fontWeight: "bold",
            marginLeft:"30px",
            marginTop: "10px",  // Povećava razmak između dugmeta "Lice" i paragrafa
            textAlign: "left",
            width: "100%",
        }}> naziv organizacije:
            </p>
            
            <p style={{
                 position:"relative",
            fontSize: "18px", 
            fontWeight: "bold",
            marginLeft:"30px",
            marginTop: "130px",  // Povećava razmak između dugmeta "Lice" i paragrafa
            textAlign: "left",
            width: "100%",
        }}>pravac obrazovanja:
            </p>
            
            
             <p style={{ 
            position:"relative",
            
            fontSize: "18px", 
            fontWeight: "bold",
            marginLeft:"30px",
            marginTop: "10px",  // Povećava razmak između dugmeta "Lice" i paragrafa
            textAlign: "left",
            width: "100%",
        }}> datum:
            </p>
            <ArrowButton   
            text={<span>JEZICI<br/>LANGUAGES
            </span> }
                  

            customStyle={{
                position:"relative",
                fontSize: "18px", 
                fontWeight: "bold",
                backgroundColor: "white", 
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                left:"30px", // Povećava razmak između "Državljanstvo" i dugmeta "LI"
              
                justifyContent: "center",
            }} 
        />
               <p style={{
                 position:"relative",
            fontSize: "18px", 
            fontWeight: "bold",
            marginLeft:"30px",
            marginTop: "10px",  // Povećava razmak između dugmeta "Lice" i paragrafa
            textAlign: "left",
            width: "100%",
        }}>
            maternji jezik:
        </p>
        <p style={{ position:"relative",
            fontSize: "18px", 
            fontWeight: "bold",
            marginLeft:"30px",
            marginTop: "10px",  // Povećava razmak između dugmeta "Lice" i paragrafa
            textAlign: "left",
            width: "100%",
        }}>
            drugi jezik:
        </p>
        <ArrowButton   
            text="TEHNIČKE SPOSOBNOSTI
                  TECHNICAL SKILLS"
           
            customStyle={{
                position:"relative",
                fontSize: "18px", 
                fontWeight: "bold",
                backgroundColor: "white", 
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                left:"30px",
                marginTop: "350px", // Razmak između h2 i dugmeta "Lice"
            }} 
        />
            <ArrowButton   
            text="POSLOVNE VEŠTINE
                  BUSINESS SKILLS"
           
            customStyle={{
                position:"relative",
                fontSize: "18px", 
                fontWeight: "bold",
                backgroundColor: "white", 
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                left:"30px",
                marginTop: "100px", // Razmak između h2 i dugmeta "Lice"
            }} 
        />
            <ArrowButton   
            text="INTERSEOVANJA
            INTERESTS"
           
            customStyle={{
                position:"absolute",
                fontSize: "18px", 
                fontWeight: "bold",
                backgroundColor: "white", 
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                left:"30px",
                marginTop: "40px", // Razmak između h2 i dugmeta "Lice"
            }} 
        />
      <div style={{ backgroundColor:"#bbe1fa", height: "180vh", width:"850px" ,position:"absolute", textAlign:"left",top:"100px",
    left:"350px"}}>
         <img src="/images/slika4.png" alt="Ikonica" style={{position:"absolute",borderRadius: "40px 0px 40px 0px", border: "10px solid white", boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)", marginTop:"20px", marginLeft:"650px" }}/>
        <p  style={{ position:"relative", top:"75px",marginLeft:"45px", color:"black",  fontSize: "18px", fontWeight:"bold"}}> Julija Jokić</p>
        <img src="/images/slika1.png" alt="Ikonica" style={{position:"relative",marginTop:"80px", marginLeft:"10px" }}/>
         <p  style={{ position:"relative", marginTop:"-25px",marginLeft:"45px", color:"black",  fontSize: "18px", fontWeight:"bold"}}> Milana Ajvaza 33, Beograd</p>
         <img src="/images/slika2.png" alt="Ikonica" style={{ position:"relative",marginTop:"8px", marginLeft:"10px" }} />
        <p  style={{ position:"relative", marginTop:"-25px",marginLeft:"45px", color:"black",  fontSize: "18px", fontWeight:"bold"}}> +381 64 339-8055</p>
         <img src="/images/slika3.png" alt="Ikonica" style={{ position:"relative",marginTop:"8px", marginLeft:"10px" }} />
        <p  style={{ position:"relative", marginTop:"-25px",marginLeft:"45px", color:"black",  fontSize: "18px", fontWeight:"bold"}}>jokicjulija.dzuli@gmail.com</p>
        <p  style={{ position:"relative", marginTop:"8px",marginLeft:"45px", color:"black",  fontSize: "18px", fontWeight:"bold"}}>Srpsko</p>
        <p  style={{ position:"relative", marginTop:"60px",marginLeft:"45px", color:"black",  fontSize: "18px", fontWeight:"bold",lineHeight:"1.5"}}>Gimnazija "Petar Koćič"u Zvorniku(nosilac Vukove diplome,učenik generacije)<br/>
                                                                                                               Elektrotehnički fakultet Univerziteta u Beogradu(završila dve godine,smer fizička elektronika)<br/>
                                                                                                               Fakultet Organizacionh nauka u Beogradu<br/>
                                                                                                               Student diplomac(dozavršetka fakulteta preostao diplomksi )<br/>
                                                                                                               Informacioni sisitemi i tehnologije<br/>
                                                                                                               2024.god
                                                                                                              
        </p>  
        <p  style={{ position:"relative", marginTop:"100px",marginLeft:"45px", color:"black",  fontSize: "18px", fontWeight:"bold"}}>Srpski</p> 

          <p  style={{ position:"relative", marginTop:"20px",marginLeft:"45px", color:"black",  fontSize: "18px", fontWeight:"bold", textAlign: "left", lineHeight: "2"}}> 
           <p>Engleski: </p> 
          <p style={{ marginLeft: "20px" }}>čitanje / srednji</p>
           <p style={{position:"relative", marginLeft: "20px" }}>izgovor / srednji</p>

           <p style={{marginTop:"20px"}}>Ruski: </p>
           <p style={{ marginLeft: "20px" }}>čitanje / osnovni</p>
           <p style={{position:"relative", marginLeft: "20px" }}>izgovor / osnovni</p>

         <p style={{marginTop:"20px"}}>Nemački: </p>
         <p style={{ marginLeft: "20px" }}>čitanje / osnovni</p>
         <p style={{ marginLeft: "20px" }}>izgovor / osnovni</p>                               
         <p style={{marginTop:"40px"}}>Programski jezici:Java, JavaScript, PHP, SQL,Programski jezik R, Microsoft Office</p> 
         <img src="/images/slika5.png" alt="Ikonica" style={{}} /> <img src="/images/slika6.png" alt="Ikonica" style={{}} />  <img src="/images/slika7.png" alt="Ikonica" style={{}} />                                                                                                                                                                                     
         <img src="/images/slika8.png" alt="Ikonica" style={{marginLeft:'10px'}} />  <img src="/images/slika9.png" alt="Ikonica" style={{}} />  <img src="/images/slika10.png" alt="Ikonica" style={{}} />                                                                                                                                                                                                      
         <img src="/images/slika11.png" alt="Ikonica" style={{marginLeft:'10px'}} /> 
         <p style={{marginTop:"60px"}}>Odgovornost, istrajnost, odlučnost,spremnost za timski rad,komunikativnost</p>
         <img src="/images/slika12.png" alt="Ikonica" style={{height:'54px',marginTop:'90px'}} /> <img src="/images/slika13.png" alt="Ikonica" style={{}} />  <img src="/images/slika14.png" alt="Ikonica" style={{}} />                                                                                                                                                                                           
                                                                                                                                                                                                            
          </p> 
   </div>
  
   <button className="btn" style={{position: "fixed", top: "20px", right: "20px", padding: "10px 20px",backgroundColor: "#007bff",  color: "white",  border: "none",  bordeRadius: "0px",  fontWeight: "bold",cursor:"pointer"}} onClick={handleLogout}>Odjavi se </button>
  
    </div> 



);
}
export default Admin;