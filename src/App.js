import "./styles.css";
import { useState } from "react";

export default function App() {
  const [suchbegriff, setSuchbegriff] = useState("");    
  const [textSichtbar, setTextSichtbar] = useState(true); // Button: Text ist zu Beginn sichtbar
  const [suchestarten, setSuchestarten] = useState("")

  const notiz = "Heute in der Vorlesung haben wir React State und Event Handler kennengelernt. Mit useState kann sich eine Komponente Werte merken, und mit onClick oder onChange reagiert sie auf Eingaben.";


  return (
    <div className="App">
      <header>
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Notepad_icon.svg/960px-Notepad_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail" 
        width={100}/>
        <h1>Meine Notizen</h1>
        <input type="text" 
        value={suchbegriff} 
        onChange={(e) => setSuchbegriff(e.target.value)}></input>
        <button className="knopf"
         onClick={() => setSuchestarten(suchbegriff)}>Suchen</button>
          <label className="checkbox-label">
        <input type="checkbox" 
        className ="knopf"
        checked={textSichtbar} 
        onChange={(e) => setTextSichtbar(e.target.checked)}></input>Notiz anzeigen</label>
      </header>
      <main>
        {suchestarten !== "" && (
        <p>Ist der Suchbegriff in der Notiz vorhanden? 
          {notiz.includes(suchestarten) === true ? "Ja, ist vorhanden" : "Nein, ist nicht vorhanden"}</p>)}
        {textSichtbar === true ? <p>{notiz}</p> : null}
      </main>

    </div>
  );
}
