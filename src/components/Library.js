import LibrarySong from "./LibrarySong";


function Library({ audioRef, songs, setCurSong, isPlaying, setSongs }){

    return (

        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                { songs.map( (song)=> (
                    <LibrarySong 
                        audioRef={audioRef}
                        songs={songs} 
                        song={song} 
                        setCurSong={setCurSong} 
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                        key={song.id} />
                 ) ) }
            </div>
        </div>
    );

}


export default Library;