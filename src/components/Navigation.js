import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../assets/foodle.svg"

const Navigation = () => {
    return ( 
        <div className="navigation">
            <Link to="/"><img src={Logo} alt="" className="navigation__logo"/></Link>
            <div className="center-vert--row">
                <Link to="/analyze" className="navigation__link">Analyze</Link>
                <Link to="/" className="navigation__link">Search</Link>
            </div>
            
        </div>
     );
}
 
export default Navigation;