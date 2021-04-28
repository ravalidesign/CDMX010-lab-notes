import React from "react";
import { Note } from "./Note";

export const Modal = (props) => {
   console.log(props)
  return (
    props.open && (
      <div  className="modal">
        <div className="modal-contenido">
          <Note note={props.note}/>
          <button onClick={props.onClose}>Cerrar</button>
        </div>
      </div>
    )
  );
};
