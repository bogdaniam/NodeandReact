import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';



const Home = (props) => {

  const [message, setMessage] = useState("Bienvenido");
  const [user, setUser] = useState("");
  const [contrasena, setContrasena] = useState("")




  const sendData = () => {
    
    let respuesta = { usuarioLogin: user, passwordLogin: contrasena }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuesta }),
    };

    
    fetch("login", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setMessage(res.message);
      });
  }

  







  return (
    <div class="login">
      <h1 class="aviso">{message}</h1>
      <div class="recuperarcontrasena">
        <Form.Label for="usuarioLogin">Introduce tu email</Form.Label>
        <Form.Control if="usuarioLogin" type="text" onChange={(e) => setUser(e.target.value)} />
        <Form.Label for="contrasenaLogin">Introduce tu contraseña</Form.Label>
        <Form.Control id="contrasenaLogin" type="password" onChange={(e) => setContrasena(e.target.value)} />
        <br />
        <Button onClick={() => sendData()}>Log in</Button>
        
      </div>


    </div>
  );
};

export default Home;
