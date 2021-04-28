import React, { Fragment, useState } from "react";
import { auth } from '../../firebase'



export const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = (e) => {
        e.preventDefault();
        try {
            auth.createUserWithEmailAndPassword(email, password);
            alert('¡Ya eres un Mago')
        } catch (error) {
            console.log(error)

        }


    }



    return (
        <Fragment>
            <h2>¿ Quieres ser un mago ? ...Registrate </h2>
            <form onSubmit={registerUser} className="formSingUp">
                <div>

                    <input
                        className="controls"
                        type="text"
                        name="nombre"
                        placeholder="Nombre Completo" />
                    <input
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="controls"
                        type="text"
                        name="email"
                        placeholder="Correo" />
                    <input
                        className="controls"
                        type="date"
                        name="date of birth"
                        placeholder=" Fecha de nacimiento" />
                    <input
                        onChange={(e) => { setPassword(e.target.value) }}
                        className="controls"
                        type="password"
                        name="password"
                        placeholder="Contraseña" />
                    <button 
                        className=" buttonSignUp"
                        type="submit" >
                        Ingresar</button>

                </div>
            </form>
            



        </Fragment>

    );
}