import "./App.css";
import { useState } from "react";
import ToDo from "./ToDo";

function App() {
  const [inputList, setInputList] = useState("");
  const [Item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItem = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList];
    });  
    setInputList("");
  };

  const deleteItem=(id)=>{
    
      setItem((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
          return index !== id;
        })
      })
  }

  return (
    <div className="todo">
      <div className="t-1">
        <div className="fixed-div">
        <br />
        <h1>TODO LIST</h1>
        <br />
        <div className="t">
        <input
          type="text"
          placeholder="Enter Item Name"
          onChange={itemEvent}
          value={inputList}
        />
        <div  onClick={listOfItem}>
        <svg
          id="button"
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
           
          />
        </svg>
        </div>
        </div>
        </div>
        
       

        <ol>
          {Item.map((itemVal,index) => {
          return (
          <ToDo
              key={index} 
              id={index}
              text={itemVal}
              onSelect={deleteItem} />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
