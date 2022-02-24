import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav=({ libraryStatus, setLibraryStatus })=>{

    return(
        <nav className="nav-bar" >
            <h1>Waves</h1>
            <button onClick={()=> libraryStatus?setLibraryStatus(false):setLibraryStatus(true) }>
                Library
                <span></span>
                <FontAwesomeIcon icon={ faMusic } />
            </button>
        </nav>
    );
}

export default Nav;