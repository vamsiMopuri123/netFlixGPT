import React from 'react'
import { useDispatch } from 'react-redux'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
    
  return (
    <>
    <div className='fixed -z-10'>
        <img 
        className='h-screen object-cover md:w-screen'
        src={BG_URL}
        alt='logo'
        />
      </div>
      <div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
    </>
    
  )
}

export default GptSearch
