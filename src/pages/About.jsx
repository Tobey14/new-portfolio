import React, { useState, useEffect } from 'react';
import tobe from '../assets/images/tobe.jpeg'


const About = () => {

    useEffect(()=>{
        document.querySelector('.sidebar-backdrop').classList.remove('showSidebar');
    });

    return (
        <div className="about">
            <div className="about-content flex">
                <div className="image">
                    <img src={tobe} alt="Tobechukwu's Image" />
                </div>

                <div className="content">
                    <p className="title">
                        I'm Tobechukwu,
                    </p>

                    <p className="desc">
                        A critical thinker and problem solver who found programming interesting during my time in the university, and has overtime
                        developed the habit of writing codes and creating software to solve critical problems since 2019. 

                        <br /> <br />

                        I graduated from Nnamdi Azikiwe University, Awka, Nigeria where I studied Mechanical Engineering, and worked as an intern software
                        developer during my compulsory National service year 2020. In this position, I worked more with Wordpress and started learning about the React Framework.
                        
                        <br /> <br />
                        In 2021, I worked with Core3dSolutions to create numerous business management solutions like ERP systems, school portals etc. using PHP and it's Laravel framework coupled with ReactJs where necessary.
                        <br /> <br />
                        Late 2021, I was employed at Zkyte technologies as a frontend focussed Full Stack developer. In this role, I learnt more about Nodejs and Vuejs and started using the technology to create solutions.
                        During the course of the year, I chose to be a full frontend developer in order to focus on an area and become great at it. This led me to 
                        focus on the Reactjs and Vuejs frameworks coupled with state management tool like Redux and Vuex, Typescript, SASS, Jest (tests) etc. while making little input in backend development.

                        <br /> <br />

                        Overtime, I have evolved to become a great frontend software developer who is always on the lookout for evolving technologies in order to stay relevant. I have built many solutions individually and in teams too.
                        <br /> <br />
                        My hobbies includes listening to and making music, chess, playing FIFA or PES, brainstorming etc.


                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;