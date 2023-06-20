import React, { useState, useEffect } from 'react'
import linkedin from '../assets/images/linkedin.svg';
import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
import github from '../assets/images/github.svg';
import spotify from '../assets/images/spotify.svg';
import { NavLink } from "react-router-dom";


const Footer = () => {

    const d = new Date();
    const year = d.getFullYear();


    return (
        <footer>

            <div className="content">
                <p className="title">
                    Let's Discuss!!!
                </p>

                <p className="desc">
                    Say hello at <a href="mailto:tobechukwuonuigbo@gmail.com">tobechukwuonuigbo@gmail.com</a>
                </p>

                <div className="socials">
                    <ul>
                        <a href="http://" target='_blank'>
                            <li>
                                <img src={linkedin} alt="linkedin" />
                            </li>
                        </a>

                        <a href="http://twitter.com/tobey_onuigbo" target='_blank'>
                            <li>
                                <img src={twitter} alt="twitter" />
                            </li>
                        </a>

                        <a href="http://instagram.com/tobey_onuigbo" target='_blank'>
                            <li>
                                <img src={instagram} alt="instagram" />
                            </li>
                        </a>

                        <a href="http://github.com/tobey14" target='_blank'>
                            <li>
                                <img src={github} alt="github" />
                            </li>
                        </a>

                        <a href="http://" target='_blank'>
                            <li>
                                <img src={spotify} alt="spotify" />
                            </li>
                        </a>

                    </ul>



                </div>

                <p className="copyright">
                    { year } © Tobechukwu Onuigbo
                </p>
            </div>
           
        </footer>
    )
}

export default Footer;