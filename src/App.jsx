import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AccordianT from "./Components/AccordianT";
import Button from "./Components/Button";

function App() {
  // single Select True
  const [SingleSelect, setSingleSelect] = useState(true);

  const [id, setId] = useState([]);
  return (
    <>
      <h1>FAQs of React Library</h1>
      <Button id={id} setId= {setId} SingleSelect={SingleSelect} setSingleSelect = {setSingleSelect}/>
      <AccordianT id={id} setId= {setId} SingleSelect={SingleSelect} setSingleSelect = {setSingleSelect}/>
    </>
  );
}

export default App;
