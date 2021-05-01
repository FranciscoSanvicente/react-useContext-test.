import React, { useContext } from "react";
import "./App.css";
//import PostView from './components/PostView';
import PostView from "./Hooks/Hooks";
import parse from "html-react-parser";

import ViewContext from "./Hooks/Hooks";

function App() {
  
  const viewContext  = useContext(ViewContext);
  console.log('el viewcontewxt',useContext(ViewContext));

 //const { varia } = useContext(ViewContext);
  return (
    <h1>222</h1>
  )
}

export default App;
