import react,{ useState, useRef } from "react";

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

  //using ref 
  const audioRef = useRef(null);

  const [songs,setSongs]= useState(data());
  const [currentSong,setCurSong]= useState(songs[0]);
  const [isPlaying,setIsPlaying]= useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
        audioRef={audioRef}
        isPlaying={isPlaying} 
        setIsPlaying={ setIsPlaying } 
        currentSong={currentSong} />

      <Library 
        audioRef={audioRef}
        songs={ songs } 
        setCurSong={ setCurSong } 
        isPlaying={isPlaying}
        setSongs={setSongs} />
    </div>
  );
}

export default App;
