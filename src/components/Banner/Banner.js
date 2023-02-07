import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {api_key,imageUrl} from '../../constants/constants'

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${api_key}&language=en-US`).then((res)=>{
        console.log(res.data.results[0]);
        console.log(movie)
        setMovie(res.data.results[Math.floor(Math.random() * (20 - 0 + 1)) + 0])
      })
    }, [])
    return (
        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ''})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : ''}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
