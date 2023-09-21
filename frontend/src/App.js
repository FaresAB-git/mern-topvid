import './App.css';
//import {useState, useEffect} from 'react
import useFetch from './customHooks/useFetch';
import Galerie from './components/Galerie';


function App() {
  
 useFetch('');
  
  return (
    <div className="App">
      <h1 className='titreApp'> 10 dernières videos n°1 tendance France</h1>
      <Galerie></Galerie>
    </div>
  );
}

export default App;
