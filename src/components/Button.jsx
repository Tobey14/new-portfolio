import React from 'react'

const Button = ({text, url, tab}) => {


    return (
        <a href={url} className='btn' target={tab? '' : '_blank'} rel="noreferrer">
            {text}
        </a>
    )
}

export default Button;