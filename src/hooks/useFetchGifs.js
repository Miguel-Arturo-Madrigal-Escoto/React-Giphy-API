//use denota que es un hook
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//useEffect: https://dmitripavlutin.com/react-useeffect-explanation/

export const useFetchGifs = (category) => {
    const [images, setImages] = useState({
        data: [],
        loading: true,
    });

    //los efectos no pueden ser async
    useEffect(() => {
        getGifs(category).then(imgs => {
            setImages({
                data: imgs,
                loading: false
            });           
        });
    }, [category]); //arreglo vacio -> se ejecuta una vez

    return images;
}