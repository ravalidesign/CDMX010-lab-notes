import React, { Fragment, useState } from "react";
import { auth } from '../../firebase'

export const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
        try {
            auth.signInWithEmailAndPassword(email, password);
            alert('¡Ya eres un Mago')
        } catch (error) {
            alert('Eres Lord Voldemort no puedes entrar ')

        }
        
    }


    return (
        <Fragment>

            <h2>¿ Ya eres un mago ? ...Inicia Sesiòn </h2>
            <form onSubmit={loginUser} className="formLogin">
                <div>

                    <input
                      onChange={(e) => { setEmail(e.target.value) }}
                        className="controlsLogin"
                        type="text"
                        name="email"
                        placeholder="Correo" />
                    <input
                       onChange={(e) => { setPassword(e.target.value) }}
                        className="controlsLogin"
                        type="password"
                        name="password"
                        placeholder="Contraseña" />
                    <button 
                        className=" buttonSignUp"
                        type="submit" >
                        Iniciar Sesion </button>
                </div>
            </form>
        </Fragment>
    )
}