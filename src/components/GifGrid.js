import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({ category }) => {

    /* 

    //hook useEffect (funcion, lista de dependencias)
    //se dispara una unica vez (cuando se renderiza por primera vez), asi ya no renderiza todo el componente de nuevo
    //useEffect -> debe de hacer algo despues de renderizarse
    useEffect( () => {
        //getGifs(category).then( imgs => setImages(imgs)) 
        getGifs(category).then( setImages ) 
    }, [category]); */

    const { loading, data:images } = useFetchGifs(category);

    return <>
                <h3 className="animate__animated animate__slideInDown">{ category }</h3>

                { loading && <p className="animate__animated animate__flash">Cargando...</p>}

                {
                <div className="card-grid">
                {
                    images.map(img => 
                        <GifGridItem
                            key={ img.id } 
                            { ...img }
                        />)
                }
                </div>}
           </>
}