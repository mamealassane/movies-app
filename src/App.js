import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';

function App() {
 
  const h1Style = {
    color: "white", 
  };
  return ( 

    <div className="App" >
      <h1 style={h1Style}>Movies App</h1>
      <div >

      <MovieList/>

      </div>
    </div>
  );
}

export default App;
