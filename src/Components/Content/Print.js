import React, { useState, useEffect } from "react";
import { fireStore } from "../../firebase";
import { Modal } from "./Modal";
import crearnota from "../../assets/crearnota.png";
import { Search } from '../Elements/Search';
import editar from "../../assets/editado.png"

export const Print = () => {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null)

  useEffect(() => {
    const getNotes = async () => {
      const { docs } = await fireStore.collection("remember").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setNotes(newArray);
    };

    getNotes();
  }, []);

  const hideModal = () => {
    console.log('closing modal')
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  const deleteNote = async (id) => {
    try {
      await fireStore.collection("remember").doc(id).delete();
      const { docs } = await fireStore.collection("remember").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setNotes(newArray);
    } catch (e) {
      console.log(e);
    }
  };



  return (
    <>
      <div className="padre">
        <div className="header">
          <button className="createNote">
            <a onClick={() => {
              showModal()
            }}>

              <img src={crearnota} alt="crearnota" />
            </a>
          </button>
          <Search />
        </div>

        <h2 className="titlePrint">Historial de tus notas </h2>


        
          <div className="print">
            {notes.length !== 0 ? (
              notes.map((note) => (
                <div className="printNotes" key={note.id}>
                  <div className="content">
                    <h3 className="title-print">Fecha</h3>
                    <h4>{note.date}</h4>
                    <h4>Titulo:{note.title}</h4>
                    <h4>Descripción:{note.description}</h4>
                    <button
                      className="buttomDelete"
                      onClick={(id) => {
                        deleteNote(note.id);
                      }}
                     
                    >
                      Borrar 
                      
                    </button>

                    <button
                    
                    
                      className="buttomPrint"
                      onClick={() => {
                        setSelectedNote(note)
                        showModal()
                      }}
                      
                    >
                      <img className="imgPrint" src={editar} alt="borrar" />
                      
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <span> lo siento no hay notas </span>
            )}
          </div>
        </div>
      
      <Modal onClose={hideModal} open={open} note={selectedNote} />
    </>
  );
};
