import React from 'react';
import Button from './Button'

const Project = ({ data, index }) => {
    const { image, title, desc, url, categories, stacks } = data;

    return (
        <div className="project flex">
            <div className='image'>
                <img src={image} alt={`project-${index + 1}-image`} />

                <div className="categories flex">
                    {
                        stacks.map((stack, stackIndex) => {
                            return <div className="flex category" key={stackIndex}>
                                {stack}
                            </div>
                        })
                    }
                </div>
            </div>

            <div className="content">
                <p className="title">
                    {title}
                </p>

                <div className="categories flex">
                    {
                        categories.map((cat, catIndex) => {
                            return <div className="flex category" key={catIndex}>
                                {cat}
                            </div>
                        })
                    }

                </div>

                <p className="desc">
                    {desc}
                </p>
                

                <Button text={'View Project'} url={url} />
            </div>

        </div>

    )
}

export default Project;