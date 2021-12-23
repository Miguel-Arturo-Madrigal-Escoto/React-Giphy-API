import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    /* const handleAdd = () => {
        setCategories([...categories, 'Nueva categoria']);
        setCategories(cats => [...cats, 'Nueva cat'])
    } */

    return  <>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={ setCategories } />
                <hr/>

                <ol>
                    {
                        categories.map(category => (
                            <GifGrid 
                                category={ category } 
                                key={ category }
                            />
                        ))

                        /* categories.forEach(cat => {
                            return <li key={ cat }>{ cat }</li>
                        }) */
                    }
                </ol>
            </>
}

GifExpertApp.propTypes = {

}

GifExpertApp.defaultProps = {

}