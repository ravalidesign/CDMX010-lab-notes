import React, {useState}from "react";
import {Button} from "../Elements/Button"
import { fireStore } from "../../firebase";

export const Note=()=>{
  
  const  [date,setDate]=useState("")
  const  [title,setTitle]=useState("")
  const  [text,setText]=useState("")
  //const  [note,setNote]=useState([])

  const setNotes= async (e)=>{
    e.preventDefault();
    const writeNotes={
      date:date,
      title:title,
      description:text,
    }
   try{
   const data= await fireStore.collection("remember").add(writeNotes)
   }catch(error){
     console.log(error)
   }

    fireStore.collection("remember")

  }

    return( 
    <div className="note">
      <form onSubmit={setNotes}>
       <div id="noteContent">
         <input onChange={(e)=>{setDate(e.target.value)}} type="date"  className="Date"></input>
         <input onChange={(e)=>{setTitle(e.target.value)}} type="text"  className="Title"placeholder="Titulo"></input> 
         <textarea  onChange={(e)=>{setText(e.target.value)}}rowS="20" cols="20" className="descriptionNote"
         placeholder="Escribe tu notita"></textarea>
         <Button />
       </div>
     </form>
    </div>
    )
        
}