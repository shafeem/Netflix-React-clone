import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl,api_key } from "../../constants/constants";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [Urlid,setUrlId] = useState('')

  useEffect(() => {
    axios
      .get(
        props.url
      )
      .then((res) => {
        console.log(res.data); 
        setMovies(res.data.results);
      })

      .catch((err) => {
        console.log("net work error");
      });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },}

    const handleMovie=(id)=>{

        axios.get(`movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
            if(response.data.results.length !==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('trailer not available');
            }
        })
        
    }

  return (
    <div className="row">
      <h2> {props.title} </h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={()=>handleMovie(obj.id)}
            className= {props.isSmall ? 'smallPoster' : "poster"} 
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>

      {Urlid  &&  <YouTube videoId={Urlid.key} opts={opts}/>}

    </div>
  );
}

export default RowPost;
