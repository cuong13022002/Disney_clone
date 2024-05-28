import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
const screenWidth = window.innerWidth;
function MovieList({genreId}) {
    const [movieList,setMovieList] = useState([])
    const elementRef = useRef(null)
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            setMovieList(resp.data.results)
            // console.log(resp.data.results)
        })
    }

    const sliderLeft = (element) =>{
        element.scrollLeft-=550;
    }
    const sliderRight = (element) =>{
        element.scrollLeft +=550;
    }
  return (
    
       <div className='relative'>
            <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} className='hidden md:block text-white text-[50px] absolute z-10 mx-8 mt-[150px] cursor-pointer' />
            <div className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth 'ref={elementRef}>
                {movieList.map((item,index) =>  (
                    <MovieCard movie={item}/>
                ))}
            </div>
            <HiChevronRight onClick={()=>sliderRight(elementRef.current)}  className='hidden md:block text-white text-[50px] absolute mx-8 Z-10 top-0 mt-[150px] cursor-pointer right-0' />
       </div>
  )
}

export default MovieList
