import React, {useEffect} from 'react';
import Project from '../components/Project';
import { Projects } from '../store/projects';

const App = () => {
    useEffect(()=>{
        document.querySelector('.sidebar-backdrop').classList.remove('showSidebar');
    });
    return (
        <section className="home">
            <div className="projects">
                <p className="title">All Projects</p>


                {
                    Projects.map((project, index) => {
                        return <Project data={project} index={index} key={index} />
                    })
                }
                
            </div>


        </section>

    )
}

export default App;