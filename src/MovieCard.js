import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MovieCard.css";
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const MovieCard = (props )  => {
  const cardStyle = {
    display: "flex", 
    width: "17rem",
    margin: "1px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom : "1px",
    
  
  };
  const imageStyle = {
    // maxHeight: "300px"
    maxHeight: "200px", 
    width: "100%" 
  };
  const cardBodyStyle = {
    maxWidht: "100px", 
    overflow: "hidden", 
  };
  const h1Style = {
    color: "white", 
  };
  const linkStyle = {
    textDecoration: "none", 
    color: "inherit", 
  };
  
  
  
  return (
    <div >
    <Link to={`/${props.film.id}` } style={linkStyle}>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src={props.film.posterURL} alt="Modern building architecture"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{props.film.titre}</div>
      <br />
      <br />
      {/* <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a> */}
      <p class="mt-2 text-slate-500"> <strong>{props.film.description}</strong> </p>
      <br />
      <br />
      <p class="mt-2 text-slate-500"> <strong> Note : {props.film.note}</strong> </p>
    </div>
  </div>
</div>
    </Link>
    </div>
  );
};

export default MovieCard;
