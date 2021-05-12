
import React from 'react';
import remembrall from '../../assets/remembrall.png';
import { auth } from '../../firebase'
import { Redirect } from 'react-router-dom'

export const Navbar = ({ user }) => {

    function handleLogOut(e) {
        auth.signOut().then(() => console.log("sign Out"))

    }
    //  if (user === null) {
    //     return <Redirect to="/" />

    //  }

    return (
        <div className="navbar">
            <p> User {user.email} is Logged in</p>
            <img src={remembrall} alt="remembrall" />
            <button onClick={handleLogOut}>Cerrar Sesion </button>



        </div>
    )
}