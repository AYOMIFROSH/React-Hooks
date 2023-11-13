import React from "react";

const MovieCard = ({ movie }) => (
    <div style={{border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', maxWidth: '200px',}}>
        <img src={movie.posterURL} alt={movie.title} style={{ width: '100%' }} />
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
    </div>
);

export default MovieCard;