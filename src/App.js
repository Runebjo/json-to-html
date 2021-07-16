import './App.css';
import { useState } from 'react';
import HtmlPreview from './HtmlPreview';

function App() {
  const [jsonInput, setJsonInput] = useState('[ {"name":"Ram", "email":"Ram@gmail.com"}, {"name":"Bob", "email":"bob32@gmail.com"} ]');
  const [htmlOutput, setHtmlOutput] = useState([]);

  const handleInput = (event) => {
    setJsonInput(event.target.value);
  }

  const convertJson = () => {
    //setHtmlOutput(jsonInput);

    const json = JSON.parse(jsonInput);
    const header = getHeader(json);
    console.log(htmlOutput);
  }

  

  const getHeader = (json) => {
    const jsonElement = json[0];
    // Object.keys(json).forEach((key) => {
    //   console.log("key", key);
    //   const value = json[key];
    //   console.log("value", value);
    // })

    // let htmlHeader = "";
    let keys = Object.keys(jsonElement);
    // console.log("keys", keys);

    // let jsx = ( keys.map(key => createHeaderElement(key)) );

    // console.log("html output", jsx);
    setHtmlOutput(keys);
  }

  return (
    <div className="App">
      <textarea name="json" id="" cols="30" rows="10" onChange={handleInput} value={jsonInput}></textarea>
      <button onClick={convertJson}>Convert</button>
      <p>{htmlOutput}</p>
      <HtmlPreview header={htmlOutput}></HtmlPreview>
    </div>
  );
}

export default App;
