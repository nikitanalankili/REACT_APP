import "../css/NavBar.css"
import { Link } from "react-router-dom";
const NavBar = () =>{
    return(
            <ol id="navbar">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to = "/About">About</Link></li>
                <li><Link to = "/Projects">Projects</Link></li>
                <li><Link to = "/Login">Login</Link></li>
            </ol>
    )
}

export default NavBar;