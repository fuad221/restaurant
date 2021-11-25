import React from 'react';
import {Link } from 'react-router-dom';


 const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftSide">
                 <img src="https://www.freepik.com/blog/app/uploads/2018/02/raw-pasta-with-tomatoes-and-cheese-on-a-black-table-making-a-circle_1309-53.jpg" alt="" />
            </div>

            <div className="rightSide">
                right side
                <Link to="/home">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

            </div>
        </div>
    )
}

export default Navbar;