import { BrowserRouter, NavLink } from "react-router-dom";
import GalleryNavigationCSS from "./GalleryNavigation.css"

const GalleryNavigation = ({galleries}) => {
    return (
    <nav> 
        <h1>Galleries</h1>
        {console.log(galleries)}
            {galleries.map(ele => {
        return (
            <li>
            <NavLink key={ele.id} to={`/galleries/${ele.id}`}>
                {ele.name}
            </NavLink>
            </li>)})}
    </nav>
    );
}

export default GalleryNavigation;