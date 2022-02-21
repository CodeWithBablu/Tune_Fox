import LibrarySong from "./LibrarySong";


function Library({ songs, setCurSong, setIsPlaying }){

    return (

        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                { songs.map( (song)=> (
                    <LibrarySong song={song} setCurSong={ setCurSong } setIsPlaying={setIsPlaying} />
                 ) ) }
            </div>
        </div>
    );

}


export default Library;