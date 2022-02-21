import react,{ useState } from "react";

//import styles
import "./styles/App.scss";

//import components
import React from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";

//import util
import data from "./util"


function App() {

  const [songs,setSongs]= useState(data());
  const [currentSong,setCurSong]= useState(songs[5]);
  const [isPlaying,setIsPlaying]= useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={ setIsPlaying } currentSong={currentSong} />

      <Library songs={ songs } setCurSong={ setCurSong } setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
