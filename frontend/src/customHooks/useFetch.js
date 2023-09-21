import axios from 'axios';
import {useState, useEffect} from 'react'







const useFetch = () => {
    const [url, setUrl]= useState('');
    const [titre, setTitre] = useState('');
   

    
    const myFunction = async () => {
        const vid = {titre, url}
        console.log(titre);
        console.log(url);
        
        console.log(vid);
        const request = await fetch('https://mern-topvid.onrender.com/api/topVid',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vid)
        });

        const json = await request.json();
        if(request.ok){
            setTitre('');
            setUrl('');
            console.log('nouvelle video ajouté', json);
        }
    };
    

    useEffect (() => {
    
    
    const api_key="AIzaSyAvbx7hVYcSosSEoqY8vmHMIKjmgUcQQW0";
    var requetteYoutube = "https://www.googleapis.com/youtube/v3/videos?key=" + api_key + "&part=snippet&chart=mostPopular&regionCode=FR"

    axios.get(requetteYoutube).then(function (response) {
        console.log(response);
        //console.log(response.data.items[0].snippet.title)
        setTitre(response.data.items[0].snippet.title);
        setUrl(response.data.items[0].id);
        

    }).catch(function (error){
        console.log(error);
    });

    },[]);


    useEffect (() => {
        if (titre && url) {
            myFunction();
        }
    },[url]);
    

    
    
}


export default useFetch;