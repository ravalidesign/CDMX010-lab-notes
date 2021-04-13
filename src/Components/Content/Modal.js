import React from "react";
import {Note} from "./Note"


export const Modal =()=>{
    return(
        
  <div id="miModal" class="modal">
     <div class="modal-contenido">
        <Note />
      <button><a href="#">Cerrar</a></button>
     </div>  
 </div>


    )
     
 }