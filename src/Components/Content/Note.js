import React, { useState } from "react";
import { Button } from "../Elements/Button";
import { fireStore } from "../../firebase";

export const Note = (props) => {
  const [date, setDate] = useState(props.note.date || "");
  const [title, setTitle] = useState(props.note.title || "");
  const [description, setDescription] = useState(props.note.description || "");

  const setNotes = async (e) => {
    if (props.note) {
      const updates = {
        date: date,
        title: title,
        description: description,
      };
      try {
        await fireStore.doc(`remember/${props.note.id}`).update(updates);
      } catch (error) {
        console.log(error);
      }

      fireStore.collection("remember");
    } else {
      const writeNotes = {
        date: date,
        title: title,
        description: description,
      };
      try {
        await fireStore.collection("remember").add(writeNotes);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="note">
      <form onSubmit={setNotes}>
        <div id="noteContent">
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="date"
            className="Date"
            value={date}
          ></input>
          <br></br>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="Title"
            placeholder="Titulo"
            value={title}
          ></input>{" "}
          <br></br>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="descriptionNote"
            placeholder="Escribe tu notita"
            value={description}
          ></textarea>
          <br></br>
          <Button />
        </div>
      </form>
    </div>
  );
};
