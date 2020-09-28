import React from 'react';

const Imagen = ({imagen}) => {

    // Aplicando Destructuring a Imagen
    const {largeImageURL, likes, previewURL, downloads, tags,
        views} = imagen;

    return (
        <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top img-fluid"/>
                <div className="card-body">
                    <p className="card-text">{likes} <b>Likes</b></p>
                    <p className="card-text">{views} <b>Vistas</b></p>
                    <p className="card-text">{downloads} <b>Descargas</b></p>
                </div>
                <div className="card-footer">
                    <a 
                        href={largeImageURL} 
                        target="_blank"
                        className="btn btn-primary btn-block"
                        rel="noopener noreferrer"
                    >Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}
 
export default Imagen;