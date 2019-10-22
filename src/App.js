import React, { useState, useEffect } from "react";
import "./App.css";
import apiCall from "./apiCall";

function App() {
  const [search, setSearch] = useState();
  const [goods, setGoods] = useState([]);
  const [selectedGood, setSelectedGood] = useState();

  useEffect(() => {
    console.log(search);
    if (!search)  return setGoods([]);
    apiCall(search).then(goodsFromApi => {
      setGoods(goodsFromApi);
    });
  }, [search]);
  function showModal(good){
    return (event)=>{
    setSelectedGood(good);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder={search}
          onChange={evt => setSearch(evt.target.value)}
        ></input>
        {goods.map(e => (
          <li key={e.name} onClick={showModal(e)}>
            {e.name} {e.price}
          </li>
        ))}
      </header>
      {selectedGood && (
        <div className="modal">
          <h4>
            {" "}
            {selectedGood.name} {selectedGood.price}
          </h4>
          <h5> {selectedGood.description}</h5>
          <div onClick={()=> setSelectedGood(null)} className="close-btn">
            Close
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
