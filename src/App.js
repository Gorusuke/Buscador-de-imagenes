import React, { Fragment, useState, useEffect } from 'react';
import Formulario  from './components/Formulario';
import ListadoImagen  from './components/ListadoImagen';


function App() {

  // State de la APP
  const [busqueda, setBusqueda] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [paginas, setPaginas] = useState(1);

  useEffect(() => {
    if (busqueda === '') return; 
    const consultarAPI = async () => {
      
      const apiKEY = `17784868-8e76c51213b0fa1491be9e950`;
      const url = `https://pixabay.com/api/?key=${apiKEY}&q=${busqueda}&per_page=30&page=${pagina}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setImagenes(resultado.hits);

      // Calcular el total de paginas
      const calcularPaginas = Math.ceil(resultado.totalHits / 30);
      setPaginas(calcularPaginas);

      // Mover la pantalla hasta arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'});
    }
    consultarAPI();
  }, [busqueda, pagina]);

  // Definir pagina anterior y siguiente
  const paginaAnterior = () => {
    const beforePage = pagina - 1;
    if(beforePage === 0) return;
    setPagina(beforePage);
  }

  const paginaSiguiente = () => {
    const nextPage = pagina + 1;
    if(nextPage > paginas) return;
    setPagina(nextPage);
  }


  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Formulario
            setBusqueda={setBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <ListadoImagen 
            imagenes={imagenes}
          />
          {pagina === 1 
          ? null 
          : <button
              type="button"
              className="btn btn-info mr-1"
              onClick={paginaAnterior}
            >&laquo; Anterior</button>
          }

          {pagina === paginas
          ? null
          : <button
              type="button"
              className="btn btn-info"
              onClick={paginaSiguiente}
            >Siguiente &raquo;</button>
          }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
