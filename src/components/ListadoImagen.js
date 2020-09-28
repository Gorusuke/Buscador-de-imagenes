import React from 'react';
import Imagen from './Imagen';


const ListadoImagen = ({imagenes}) => {
    return (
        <div className="col-12 mt-5 row">
            {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    );
}
 
export default ListadoImagen;