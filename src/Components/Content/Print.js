import React, { useState, useEffect } from "react";
import { fireStore } from "../../firebase";
import { Modal } from "./Modal";
import crearnota from "../../assets/crearnota.png";

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

  const updateNote = async (id) => {
    try {
      const dt = await fireStore.collection("remember").doc(id).get();
      console.log(dt.data());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <button className="createNote">
          <a href="#" onClick={() => {
              showModal()
          }}>
            {" "}
            <img src={crearnota} alt="crearnota" />
          </a>
        </button>
        <h2>Historial de tus notas </h2>
        <div className="impNotes">
          <div className="Print">
            {notes.length !== 0 ? (
              notes.map((note) => (
                <div className="printNotes" key={note.id}>
                  <div className="content">
                    <h4>{note.date}</h4>
                    <h4>{note.title}</h4>
                    <h4>{note.description}</h4>
                    <button
                      onClick={(id) => {
                        deleteNote(note.id);
                      }}
                    >
                      Borrar
                    </button>
                    <button
                      onClick={() => {
                        setSelectedNote(note)
                        showModal()
                      }}
                    >
                      Actualizar
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <span> lo siento no hay notas </span>
            )}
          </div>
        </div>
      </div>
      <Modal onClose={hideModal} open={open} note={selectedNote}/>
    </>
  );
};
