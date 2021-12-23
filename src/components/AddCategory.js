import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('Introduce una categoria'); //undefined

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            //se accede con un callback porque no tengo acceso a las categorias
            setCategories(cat => [inputValue, ...cat]);    
            setInputValue('');   
        }
        
    }

    return  <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    placeholder={ inputValue }
                    onChange={ handleInputChange }
                />
            </form>

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}