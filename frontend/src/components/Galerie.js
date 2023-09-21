import React from 'react'
import {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import './Galerie.css';


function Galerie() {

    const [videos, setVideos] = useState(null);


    useEffect(() => {
        const fetchTopVid = async () => {
        const response = await fetch("http://localhost:3000/api/topVid");
        const json = await response.json();
        
        if(response.ok){
            setVideos(json.slice(0,5));
            console.log();
            
        }
        
        }

        fetchTopVid();
        

    },[])

    useEffect(() => {
       console.log("ok");
       console.log(videos);
    },[videos])

   

  return (
    <div className='galerieContainer'>
       {videos && videos.map((video) => (
           <div key={video._id} className='Videos'> 
           <YouTube videoId={video.url} className='Video'/>
           </div> 
        ))}

    </div>
    
  )
}

export default Galerie