import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@mui/material/Fab";

function InputArea(props) {
  const [info, setinfo] = useState({
    title: "",
    note: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setinfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <input
        className="field"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={info.title}
      ></input>
      <textarea
        rows="4"
        cols="50"
        className="field"
        name="note"
        placeholder="Take a note..."
        onChange={handleChange}
        value={info.note}
      ></textarea>
      <div className="button-container">
        <Fab
          onClick={() => {
            props.handlesubmit(info);
            setinfo({ title: "", note: "" });
          }}
        >
          <AddIcon></AddIcon>
        </Fab>
      </div>
    </div>
  );
}

export default InputArea;
