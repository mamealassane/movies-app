import React, { useRef, useState } from 'react';
import MovieCard from './MovieCard';
import {films} from './moviesObjet';

const MovieList = () => {
    const [movieDB, setMovieDB] = useState(films)
    const flexContainerStyle = { 
        display: "flex",
        flexDirection: "row", 
        justifyContent: "space-between", 
        flexWrap: "wrap", 
    };
    const h1Style = {
        color: "white", 
        position : "absolute",
        left : "40%",
    };
    const inputStyle = {
        fontSize: '14px', 
    };
    
    const labelStyle = {
        fontSize: '14px', 
    };
    
    //recuperer les donnees du formulaire
    const titreInputRef = useRef() ;
    const descriptionInputRef = useRef() ;
    const posterURLInputRef = useRef() ;
    const noteInputRef = useRef() ;
    
    const sendHandler =(e)=>{
        e.preventDefault() ;
        
        const titre = titreInputRef.current.value
        const description = descriptionInputRef.current.value
        const posterURL = posterURLInputRef.current.value
        const note = +noteInputRef.current.value

        const filmsupdatedMovieList= [...films,{titre, description , posterURL , note}]
        setMovieDB( filmsupdatedMovieList )
        // titreInputRef.current.value = null;
        // descriptionInputRef.current.value = null;
        // posterURLInputRef.current.value = null;
        // noteInputRef.current.value = null;
        
    };
    // barre de recherche 
    const [search, setSearch] = useState('')
    const [note , setNote] = useState(0)
    const onSearchChange = (e)=>{
         const searchText = e.target.value.toLowerCase();
        setSearch(searchText);
        console.log("🚀 ~ file: MovieList.js:53 ~ onSearchChange ~ search:", search)
        const filteredMovies = searchText === ''? films : movieDB.filter(m => m.titre.toLowerCase().includes(search));
        console.log("🚀 ~ file: MovieList.js:53 ~ onSearchChange ~ filteredMovies:", filteredMovies)
        setMovieDB(filteredMovies)
    };

    const onNoteChange =(e)=>{
        const toto = e.target.value;
        setNote(+toto);
        console.log("🚀 ~ file: MovieList.js:61 ~ onNoteChange ~ e.target.value:", e.target.value)
        const filteredNotes = toto === ''? films : movieDB.filter(m=>m.note === +e.target.value)
        console.log("🚀 ~ file: MovieList.js:64 ~ onNoteChange ~ filteredNotes:", filteredNotes)
        setMovieDB(filteredNotes) 

    }

    

    return (
        <div>
            <div className="bar">
            <form action="">
            <input type="text" 
                placeholder='Rechercher'
                value={search}
                onChange={onSearchChange}

            />
            <input type="number"  
                placeholder='Note'
                // value={note}
                onChange={onNoteChange}
                // defaultValue={note}
            />
        
            </form>
            </div>

        <div style={flexContainerStyle}>
            
            {movieDB.map((film,index) => ( 
                <MovieCard key={index} film={film} /> 
                ))}
        
        </div>

        
        <div className="formulaire" style={h1Style}>

    <form onSubmit={(e)=>sendHandler(e)}>
    <div className="form-outline mb-4">
            <label className="form-label" htmlFor="description" >Titre</label>
            <input type="text" id="titre" className="form-control" style={inputStyle} ref={titreInputRef} />
        </div>
        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="description" >Description</label>
            <input type="text" id="description" className="form-control" style={inputStyle} ref={descriptionInputRef} />
        </div>

        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="posterURL">Poster URL</label>
            <input type="text" id="posterURL" className="form-control" style={inputStyle}  ref={posterURLInputRef}/>
        </div>

        
        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="note">Note</label>
            <input type="number" id="note" className="form-control"  style={inputStyle} ref={noteInputRef}/>
        </div>

    

        
        <button type="submit" className="btn btn-primary btn-block mb-4" >Send</button>
    </form>
        </div>
    </div>
    );
};

export default MovieList;