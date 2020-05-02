import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SmurfTown from "./SmurfTown";
import NewSmurf from "./NewSmurf";
import context from "../contexts/context";
import styled from 'styled-components'

const SmurfHeader = styled.h1`
  color: yellow;
  font-size: 2.5rem;
  margin-top: 5%;
`

export default function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        setSmurfs(res.data);
      })
      .catch(err => {
        console.error("server error", err);
      });
  }, []);

  const addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  console.log("smurfs", smurfs);
  return (
    <div className="App">
      <context.Provider value={{ smurfs }}>
        <SmurfHeader>Check Out The Smurfs!</SmurfHeader>
        <SmurfTown />
        <NewSmurf addSmurf={addSmurf} />
      </context.Provider>
    </div>
  );
}