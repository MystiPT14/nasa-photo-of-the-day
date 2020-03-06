import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";




function App() {

  const [photo, setphoto] = useState('')
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
