import react,{ useState, useRef } from "react";

//import styles
import "./styles/App.scss";

//import components
import React from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

//import util
import data from "./data"


function App() {

  //using ref 
  const audioRef = useRef(null);

  const [songs,setSongs]= useState(data());
  const [currentSong,setCurSong]= useState(songs[0]);
  const [isPlaying,setIsPlaying]= useState(false);
  const [libraryStatus,setLibraryStatus]= useState(false);

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song libraryStatus={libraryStatus} currentSong={currentSong} />
      <Player 
        libraryStatus={libraryStatus}
        audioRef={audioRef}
        isPlaying={isPlaying} 
        setIsPlaying={ setIsPlaying } 
        currentSong={currentSong}
        songs={ songs }
        setCurSong={ setCurSong }
        setSongs={setSongs} />

      <Library 
        libraryStatus={libraryStatus}
        audioRef={audioRef}
        songs={ songs } 
        setCurSong={ setCurSong } 
        isPlaying={isPlaying}
        setSongs={setSongs} />
    </div>
  );
}

export default App;
