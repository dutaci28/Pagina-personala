import { useState } from "react";
import Sidebar from './components/Sidebar';
import SectiunePrincipala from './components/SectiunePrincipala';

function App() {

  const [butoaneSide, setButoaneSide] = useState([
    {
      id: 1,
      tinta: "#sectiune-1",
      text: "Despre"
    },
    {
      id:2,
      tinta: "#sectiune-2",
      text: "Experienta"
    },
    {
      id:3,
      tinta: "#sectiune-3",
      text: "Proiecte"
    },
    {
      id: 4,
      tinta: "#sectiune-4",
      text: "Educatie"
    },
    {
      id: 5,
      tinta: "#sectiune-5",
      text: "Contact"
    },
  ]) 

  return (
    <div className="row">

      <div className="col-2 bg-dark">
        <Sidebar butoane={ butoaneSide }/>
      </div>

      <div className="col-10">
        <SectiunePrincipala />
      </div>
      
    </div>
  );
}

export default App;
