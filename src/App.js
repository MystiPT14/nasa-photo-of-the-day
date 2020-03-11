import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import DailyPhoto from "./components/nasaData";
import {getPhoto}  from "./components/nasaData";

const prod_api = "https://api.nasa.gov/planetary/apod?api_key=Pyzu5wzYNu3v05jyADCkMiOUldNYcxeDQ8myhFfs"


export default function App() {
  const [imageDate, updateAPODImages] = useState([]);

  useEffect(() => {

    getPhoto(imageDate, updateAPODImages, prod_api)
    
    console.log(imageDate)
  }
  ,[imageDate])

  return (
    <div className="App">
    
      <Header siteTitle="NASA Photo Of The Day"/>

      <DailyPhoto 
      date={imageDate.date} 
      attribution={imageDate.copyright} 
      url={imageDate.url}
      description={imageDate.explanation}
      />
    </div>
  );
}

