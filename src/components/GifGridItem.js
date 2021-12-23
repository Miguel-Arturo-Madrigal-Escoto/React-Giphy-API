import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    /* console.log('gifgriditem')
    console.table({id, title, url}) */

    return (
        <div className="card animate__animated animate__slideInDown">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
