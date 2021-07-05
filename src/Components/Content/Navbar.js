
import React from 'react';
import remembrall from '../../assets/remembrall.png';
import { auth } from '../../firebase'
import { Redirect } from 'react-router-dom'

export const Navbar = ({ user }) => {

    function handleLogOut(e) {
        auth.signOut().then(() => console.log("sign Out"))

    }
     if (!user) {
        return <Redirect to="/" />

     }

    return (
        <div className="navbar">
            <div className="navbar-content">
                <img src={remembrall} alt="remembrall" />
                <p>  ¡Bienvenidx a Howarts!<br></br>{user.email} </p>
                <button className="SignOut" 
                onClick={handleLogOut}> 
                Cerrar Sesión </button>
            </div>
        </div>
    )
}