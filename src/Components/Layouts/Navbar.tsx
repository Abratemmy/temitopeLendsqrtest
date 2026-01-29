import  {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Layout.scss";

import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline, IoMdPerson, IoMdArrowDropdown} from "react-icons/io"


const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    console.log("open", open);

    const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    };


    return (
        <header className="navbar">
            <div className="navbar_left">
                <div className="navbarInput">
                    <input type='text' placeholder="Search for anything" />
                    <button className="navbar__search-button"><IoSearch className="icon"/></button>
                </div>
            </div>
            <div className="navbar_right">
                <Link to="" className="doc">Docs</Link>
                <div className='Notifications'>
                    <span className="dot"></span>
                    <IoIosNotificationsOutline className="icon"/>
                </div>
                <div className="navbar_user-info">
                    <div className="navbar_user-image">
                        <IoMdPerson className="icon"/>
                    </div>
                    <div className="navbar_user-name">Temmy23
                        <span onClick={() => setOpen(!open)}><IoMdArrowDropdown className="icon"/></span>
                    </div>
                    {open && (
                        <div className="profiledropdown-menu">
                            <button className="profiledropdown-item">Profile</button>
                            <button className="profiledropdown-item">Settings</button>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
                {/* <button onClick={handleLogout}>Logout</button> */}
            </div>
        </header>
    );
};
export default Navbar;