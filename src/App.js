import { useState } from "react";
import "./App.css";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cow", "cat", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random()*animals.length)];
}

function App() {
  const [animals , setAnimals] = useState([]);

  const onClickHander = () => {
    setAnimals([...animals , getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal , index) => {
    return <AnimalShow type={animal} key={index}/>
  });

  return (
    <div>
      <button onClick={onClickHander}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
