import React, { useEffect } from 'react'
import Logo from '../assets/images/logo.png';
import Bars from '../assets/images/bars.svg';
import Cross from '../assets/images/cross.svg';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const toggleSidebar = () => {
        document.querySelector('.sidebar-backdrop').classList.toggle('showSidebar');
        if (document.querySelector('.sidebar-backdrop').classList.contains('showSidebar')) {
            document.querySelector('.navbar').style.zIndex = '2';
            return;
        } else {
            document.querySelector('.navbar').style.zIndex = '0';
            return;
        }
    }

    useEffect(() => {
        document.querySelector('.sidebar-backdrop').classList.remove('showSidebar');
    })

    return (
        <div className="navbar">
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>
                {/* <img src={Logo} alt="logo" /> */}
                🔮
            </NavLink>

            <div className="bars" onClick={toggleSidebar}>
                <img src={Bars} alt="logo" />
            </div>

            <div className="sidebar-backdrop">

                <div className='sidebar'>
                    <div className="bars" onClick={toggleSidebar}>
                        <img src={Cross} alt="logo" />
                    </div>
                    <ul>
                        <NavLink to="/projects" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>

                            <li>
                                Projects
                            </li>
                        </NavLink>

                        <NavLink to="/about" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>

                            <li>
                                About
                            </li>
                        </NavLink>


                        <a rel="noreferrer" href="https://drive.google.com/file/d/1eZhivygqRrtV8wsJb7lRI_zkrLSY7hGt/view?usp=sharing" target='_blank'>

                            <li>
                                Resume
                            </li>
                        </a>



                    </ul>

                </div>
            </div>

            <nav>

                <ul>
                    <NavLink to="/projects" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>

                        <li>
                            Projects
                        </li>
                    </NavLink>

                    <NavLink to="/about" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>

                        <li>
                            About
                        </li>
                    </NavLink>


                    <a rel="noreferrer" href="https://drive.google.com/file/d/1eZhivygqRrtV8wsJb7lRI_zkrLSY7hGt/view?usp=sharing" target='_blank'>

                        <li>
                            Resume
                        </li>
                    </a>



                </ul>

            </nav>

        </div>
    )
}

export default Navbar;