import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MovieCard.css";
const MovieCard = (props) => {
  const cardStyle = {
    display: "flex", 
    width: "17rem",
    margin: "1px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom : "1px",
    
  
  };
  const imageStyle = {
    maxHeight: "300px", 
  };
  const cardBodyStyle = {
    maxWidht: "100px", 
    overflow: "hidden", 
  };
  const h1Style = {
    color: "white", 
  };
  
 
  
  
  return (
    <div className="movie_card" style={cardBodyStyle}>
    <div className="info_section">
      <div className="movie_header">
        <img className="locandina" src={props.film.posterURL} alt="Movie Poster" style={imageStyle} />
        <h1 style={h1Style}>{props.film.titre}</h1>
        
        
      </div>
      <div className="movie_desc">
        <p className="text">{props.film.description}</p>
      </div> 
        <p className="type" style={h1Style}><strong>Note : {props.film.note}</strong></p>
      
    </div>
    
  </div>
  );
};

export default MovieCard;
