import React, { useState } from "react";
import InputArea from "./inputArea";
import Header from "./header";
import Footer from "./footer";
import DeleteIcon from "@material-ui/icons/Delete";

function App() {
  const [temp, setTemp] = useState([]);

  function handlesubmit(info) {
    setTemp((prevValue) => [...prevValue, info]);
  }

  function deleteitem(id) {
    setTemp((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header></Header>
      <div className="parent">
        <div>
          <InputArea handlesubmit={handlesubmit}></InputArea>
        </div>
      </div>
      <div className="card-container">
        {temp.map((item, index) => {
          return (
            <div key={index} className="card">
              <h3>{item.title}</h3>
              <p>{item.note}</p>
              <button
                onClick={() => {
                  deleteitem(index);
                }}
              >
                <DeleteIcon></DeleteIcon>
              </button>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
