import React, { Fragment, useState } from "react";
import { auth } from '../../firebase'
import remembrall from "../../assets/remembrallLog.png";
import { Redirect } from "react-router";

const initialInputs = {
    email: '',
    password: ''
}

export const LogIn = (props) => {
    const [inputs, setInputs] = useState(initialInputs)
    

    function handleOnChange(e) {
        const { id, value } = e.target
        const newObject = { ...inputs, [id]: value }
        setInputs(newObject)
    }

    function handleSubmit(e) {
        e.preventDefault();
        auth.signInWithEmailAndPassword(inputs.email, inputs.password)
            .then((user) => console.log("logged in"))
    }
    
    if (props.user){
    return <Redirect to="/wall" />
 }

    return (
        <Fragment>
            <div className="Description-remembrall">
                <img className="imgLog" src={remembrall} alt="borrar" />
                <p>
                    ¡ Es una Recordadora!!! Evita que se llene de humo rojo, aqui puedes escribir todo lo que debes de recordar
            </p>

            </div>


            <form onSubmit={handleSubmit} className="form">
                <div className="formLogin">
                    <div className="formLogin-content">
                        <h2>¿ Ya eres un mago ? </h2>
                        <input
                            onChange={handleOnChange}
                            className="controlsLogin"
                            id="email"
                            type="email"
                            name="email"
                            value={inputs.email}
                            placeholder="Correo" />
                        <input
                            onChange={handleOnChange}
                            className="controlsLogin"
                            id="password"
                            type="password"
                            name="password"
                            value={inputs.password}
                            placeholder="Contraseña" />
                        <button
                            className=" buttonSignUp"
                            type="submit"
                            value="LogIn" >
                            !Alohomora! </button>
                    </div>


                </div>
            </form>
        </Fragment>
    )
}