import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
// import { NavbarCss } from '../Reference-import';


const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src="https://www.freepik.com/blog/app/uploads/2018/02/raw-pasta-with-tomatoes-and-cheese-on-a-black-table-making-a-circle_1309-53.jpg" alt="" />
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/home">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;