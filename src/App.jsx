import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Rankings from "./components/Rankings/Rankings";
import Profiles from "./components/Profiles/Profiles";
import AddSurfer from "./components/AddSurfer/AddSurfer";
import Main from "./components/Main/Main";
import worldSurf from "./assets/images/WorldSurf.png"

import "./App.css";

function App() {
  const apiUrl = "http://localhost:8080/wsl-surfers";

  const [surfers, setSurfers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        setSurfers(response);
      });
  }, []);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    
  };

  const filteredSurfers = surfers.filter((surfer) => {
    const searchToLower = surfer.firstName.toLowerCase();

    return searchToLower.includes(searchTerm);

  });


  const ranked = surfers.sort((a, b) => (a.surfingNumber > b.surfingNumber) ? 1 : -1)

  return (
    <Router>
      <Nav surfers={surfers} handleInput={handleInput} searchTerm={searchTerm} handleInput={handleInput}/>
      
      <Route exact path="/rankings">
        <Rankings surfers={filteredSurfers}/>
      </Route>
      <Route exact path="/profiles">
        <Profiles surfers={filteredSurfers} />
      </Route>
      <Route exact path="/addSurfer">
        <AddSurfer />
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
    </Router>
  );
}

export default App;
