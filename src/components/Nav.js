import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';


function Nav(props){

    return(
        <div className='list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About US</Link></li>
        </div>
    )
}

export default Nav;