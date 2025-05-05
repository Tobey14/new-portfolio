import React from 'react';
import Project from '../components/Project';
import { Projects } from '../store/projects';
import Button from '../components/Button';

const Home = () => {
    return (
        <section className="home">
            <div className="top-section">
                <p className="title">Tobechukwu Onuigbo</p>

                <p className="desc">
                    Software developer (ReactJs, Vuejs, PHP/Laravel, Nodejs) with a focus on frontend technologies like Reactjs/Nextjs, Vuejs/Nuxtjs, TailwindCSS, ReactQuery, SASS, Redux, Vuex etc.
                    I love to design elegant systems to specification and I love design thinking and processes.
                </p>
            </div>


            <div className="projects">
                <p className="title">Projects</p>


                {
                    Projects.map((project, index) => {
                        return index < 5 && <Project data={project} index={index} key={index} />
                    })
                }
                <div className="view-all">
                    <Button text={'View all'} url={'/projects'} tab={true} />
                </div>
            </div>


        </section>

    )
}

export default Home;