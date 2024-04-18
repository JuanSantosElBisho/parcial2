import React, {useState} from 'react';


import Imageprofile from '../assents/profile.jpg'

import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth (appFirebase);

const Login = () => {
    const[registrando , setRegistrando] = useState(false)

    const functAutenticacion = async (e) =>{
        e.preventDefault ();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        

        if (registrando) {
            try {
                await createUserWithEmailAndPassword (auth , correo, contraseña)
            } catch (error) {
                alert ("LA CONTRASEÑA DEBE CONTENER ALMENOS 6 CARACTERES")
            }
        }
        else {
            try {
             await signInWithEmailAndPassword (auth, correo, contraseña)   
            } catch (error) {
                alert("EL CORREO O CONTRASEÑA QUE PROPORCIONASTE SON INCORRECTOS")
            }
            
        }
    }



    return (
        
            <div className= 'container'> 
            
                <div className='texto-arriba'>Bienvenido a <br/> 
                <span className="destacado">Rickoso club </span> 
                <br/> Donde encontraras los mejores personajes. 
                <br/>  Inicia sesion y ponte Rickoso.</div>
                    <div className='cuadro'>
                        <div className="card card-body shadow-lg">
                            <img src={Imageprofile} alt=""className='estilo-profile' />
                            <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder='Ingresar Email' className='cajatexto'id='email'/>
                                <input type="password" placeholder="Ingresa tu contraseña" className='cajatexto'id='password'/>
                                <button className= "btnform">{registrando ? "Registrate" : "Inicia Sesion" }</button>
                            </form>
                            <h4 className="texto">{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"} <button className='btnSwitch' onClick = {() => setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate"}</button></h4>
                        </div>
                    </div>
                </div>
    )
}

export default Login;