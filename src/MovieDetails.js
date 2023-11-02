import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { films } from './moviesObjet';

const MovieDetails = () => {
    const param = useParams()
    const movie = films.find(bo => bo.id === +param.id)
    // {/* <iframe title="movie-trailer" width="560" height="315" src={movie.linkBo} frameBorder="0" allowFullScreen /> */}
    const divStyle = {
        position : 'absolute',
        left : '25%',
    }
    return (
        <div style={divStyle}>
            
<iframe width="670" height="387" src={movie.linkBo} title="Le Seigneur des Anneaux: La Communauté de l&#39;Anneau. Bande-annonce (VF)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.titre}</h5>
        <p >{movie.description}</p>
        <Link to={`/`}>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Retour
    </button>
        </Link>
    </div>
</a>

        </div>
    );
};

export default MovieDetails;
