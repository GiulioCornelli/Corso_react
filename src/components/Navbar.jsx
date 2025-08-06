import { Link } from "react-router-dom";

function Navbar(){
    return(
        <ul className="flex gap-10 mb-10 text-gray-600">
            <li>
                {/* non sono link come href, ma servono per indicare in che elemnto spostarsi */}
                <Link to={`/`}>home</Link>
            </li>
            <li>
                <Link to={`/contatti`}>contatti</Link>
            </li>
            <li>
                <Link to={`/about`}>about</Link>
            </li>
            <li>
                <Link to={`/cards`}>cards</Link>
            </li>
            <li>
                <Link to={`/cards-children`}>cards-children</Link>
            </li>
        </ul>
    );
}

export default Navbar;