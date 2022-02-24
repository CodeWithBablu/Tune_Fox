import react,{ useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";  
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Player({ 
  libraryStatus, audioRef, currentSong, isPlaying, setIsPlaying, songs, setCurSong, setSongs}) {

    //use state
    const [songInfo,setSongInfo]= useState({currentTime:0,duration:0});

    //function to format time
    const getTime= (time)=>{
        return ( Math.floor(time/60)+ ":" +  ( "0"+Math.floor(time%60)).slice(-2) );
    }

    //To change Active Higlight 
    useEffect(()=> {

      const newSongs= songs.map((song)=>{

        if(song.id===currentSong.id)
        {
          return {...song,active:true};
        }
        else
        {
          return {...song,active:false};
        }

      });

      setSongs(newSongs);

    },[currentSong]);

    //Event Handler

    const playSongHandler= ()=>{
      if(isPlaying)
        {
          setIsPlaying(false);
          audioRef.current.pause();
        }
      else
        {
          setIsPlaying(true);
          audioRef.current.play();
        }
    };

    const skipTrackHandler= async(direction)=>{
      
      const currentIndex=songs.findIndex((song)=> song.id===currentSong.id );
      if(direction==='skip-forward')
      {
        await setCurSong( songs[ (currentIndex+1)%(songs.length) ] );
      }
      else
      {
        await setCurSong( songs[ currentIndex!==0? (currentIndex-1):(songs.length-1) ] );
      }

      if(isPlaying)
        audioRef.current.play();

    };


    //###########################
    const timeUpdateHandler= (e) =>{
        const current= e.target.currentTime;
        const duration= e.target.duration;

        const roundCurrent= Math.round(current);
        const roundDuration= Math.round(duration);
        //current input bar completed percentage
        const currentPercentage= Math.round((roundCurrent/roundDuration)*100);

        setSongInfo({...songInfo,currentTime:current,duration,currentPercentage});

    }

    const dragHandler= (e)=> {
        audioRef.current.currentTime=e.target.value;
        setSongInfo({...songInfo,currentTime:e.target.value});
        
    }

    const songEndHandler= async()=> {
      const currentIndex=songs.findIndex((song)=> song.id===currentSong.id );
      await setCurSong( songs[ (currentIndex+1)%(songs.length) ] );
      if(isPlaying)
        audioRef.current.play();
    }

    //add Styles
    const trackAnimate={
      transform:`translateX(${songInfo.currentPercentage}%)`
    }

    return (
      <div className={`player ${ libraryStatus?`toggle-player`:"" }`} >
        <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
              <div 
                className="track" 
                style={{background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`}}>
                  <input
                  onChange={ dragHandler } 
                  min={0} 
                  max={songInfo.duration || 0} 
                  value={songInfo.currentTime} 
                  type="range" />

                  <div style={trackAnimate} className="animate-track"></div>
              </div>
            <p>{ songInfo.duration?getTime(songInfo.duration):"0.00"}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon 
              className="skip-back" 
              onClick={ ()=> skipTrackHandler('skip-back') }
              size="2x" 
              icon={faAngleLeft} />
            
            <FontAwesomeIcon 
              className="play" 
              onClick={ playSongHandler } 
              size="2x" 
              icon={ isPlaying? faPause:faPlay } />

            <FontAwesomeIcon 
              className="skip-forward" 
              onClick={ ()=> skipTrackHandler('skip-forward') }
              size="2x" 
              icon={faAngleRight} />
        </div>
        <audio 
          onLoadedMetadata={timeUpdateHandler} 
          onTimeUpdate={ timeUpdateHandler } 
          onEnded={ songEndHandler }
          ref={ audioRef }  
          src={ currentSong.audio }></audio>
      </div>
    );
  }
  
  export default Player; 
  