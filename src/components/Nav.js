import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faMusic, faSpin,  faCompactDisc } from "@fortawesome/free-solid-svg-icons";

//import animation
import { rotateOut as animate } from "react-animations"

//import styled components
import styled, { keyframes } from 'styled-components'

const Nav=({ libraryStatus, setLibraryStatus })=>{

    return(
        <nav className="nav-bar" >
            <FontAwesomeIcon className="fa-spin" icon={faCompactDisc} color="rgb(9, 255, 124)" size="4x" />
            <button onClick={()=> libraryStatus?setLibraryStatus(false):setLibraryStatus(true) }>
                Library
                <span></span>
                <FontAwesomeIcon icon={ faMusic } />
            </button>
        </nav>
    );
}


const Animate= styled.div`
    
    animation: 10s ${ keyframes `${ animate }` } infinite;

`

export default Nav;