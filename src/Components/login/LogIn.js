import React, { Fragment, useState } from "react";
import { auth } from '../../firebase'
import remembrall from "../../assets/remembrallLog.png";


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
            <div className="Description-remembrall">
            <img className="imgLog" src={remembrall} alt="borrar" />

            </div>

           
            <form onSubmit={loginUser} className="form">
                <div className="formLogin">
                    <div className="formLogin-content">
                    <h2>¿ Ya eres un mago ? </h2>
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
                        !Alohomora! </button>
                    </div>

                    
                </div>
            </form>
        </Fragment>
    )
}