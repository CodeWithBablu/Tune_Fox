

function LibrarySong({ audioRef, songs, song, setCurSong, isPlaying, setSongs }) {
  

  const songSelectHandler= async ()=> {

    await setCurSong(song);

    if(isPlaying)
        audioRef.current.play();

    //To mAKE song that click active Highlighted

    const newSongs= ()=>{

       return songs.map((singleSong)=>{

        if(singleSong.id===song.id)
        {
          return {...singleSong,active:true}
        }
        else
        {
          return {...singleSong,active:false}
        }

      });
    }

    setSongs(newSongs());

  }
  
  return (
      <div onClick={ songSelectHandler } className={`library-song ${ song.active?`selected`:""}`}>
        <img alt={song.name} src={ song.cover } ></img>
        <div className="song-description">
          <h3>{ song.name }</h3>
          <h4>{ song.artist }</h4>
        </div>
      </div>
    );
  }
  
  export default LibrarySong; 
  