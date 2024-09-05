import React, { useRef, useState } from 'react'
import { OPTIONS, SUPPORTED_LANGUAGE } from '../utils/constants'
import language from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { addGptMovieNames, addGptMovieResults } from '../utils/gptSlice'

const GPTSearchBar = () => {
    const dispatch=useDispatch();
    const lang = useSelector(store => store.config.lang);
    const gptText=useRef(null);
    const [messageText,setMessageText] = useState('');
    const tmdbResults = async(movie) => {
      const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',OPTIONS)
      const json = await data.json();
      return json.results;
    }
    const gptSearchClick= async()=>{
      console.log(gptText.current.value);
      const gptQuery= 
      "Act as a movie recommendation system and suggest some movies for the query: "
      +gptText.current.value+
      ". Only give me the 5 movies, comma seperated like the example result given head. Example results: Dharuvu, kitakithalu, kick, jathi rathanalu, MAD";
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content:gptQuery}],
        model: 'gpt-3.5-turbo',
      });

      if(!chatCompletion.choices){
         setMessageText("No Movies Found");
      }

      console.log(chatCompletion.choices?.[0]?.message?.content.split(","));
      const gptMovies=chatCompletion.choices?.[0]?.message?.content.split(",");

      const promiseArray=gptMovies.map(movie=>tmdbResults(movie))

      const tmdbMovies= await Promise.all(promiseArray);
      console.log(tmdbMovies);
      dispatch(addGptMovieResults(tmdbMovies));
      dispatch(addGptMovieNames(gptMovies));
    }
  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
        
        <form className='bg-black w-full md:w-1/2 grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
            <input 
            ref={gptText}
            type='search' 
            className='p-4 mx-4 my-2 border border-blue-500 col-span-9 rounded-lg' 
            placeholder={language[lang]?.gptPlaceholder} />
            <button className='px-1 py-1 md:px-2 md:py-2 bg-red-700 rounded-lg mx-4 my-4 col-span-3 text-white text-xl' onClick={gptSearchClick}>{language[lang]?.search}</button>
        </form>
      
    </div>
  )
}

export default GPTSearchBar
