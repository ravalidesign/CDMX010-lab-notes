import React, { useState, useEffect } from "react";
import { fireStore } from "../../firebase";


export const Print = () => {
    const [notes, setNotes] = useState([])
    

    useEffect(() => {

        const getNotes = async () => {
            const { docs } = await fireStore.collection("remember").get()
            const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setNotes(newArray)
        }

        getNotes()
    }, []);


    const deleteNote = async (id) => {
        try {
            await fireStore.collection("remember").doc(id).delete()
            const { docs } = await fireStore.collection("remember").get()
            const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setNotes(newArray)
        } catch (e) {
            console.log(e)
        }
    }


    const updateNote = async (id) => {
        try {
            const dt = await fireStore.collection("remember").doc(id).get();
            console.log(dt.data())
        } catch (e) {
            console.log(e)
        }


    }

    return (
        <>
            <div >

                <div className="Print">
                    {
                        notes.length !== 0 ? (
                            notes.map(item => (
                                <div className="printNotes" key={item.id}>
                                    <div className='content'>
                                    <h4>{item.date}</h4>
                                    <h4>{item.title}</h4>
                                    <h4>{item.description}</h4>
                                    <button onClick={(id) => { deleteNote(item.id) }}>Borrar</button>
                                    <button onClick={(id) => { updateNote(item.id) }}><a href="#miModal"></a>Actualizar</button>
                                   </div>
                                </div>
                            ))


                        ) : (<span> lo siento no hay notas </span>)
                    }






                </div>
               
            </div>

        </>
    )

}