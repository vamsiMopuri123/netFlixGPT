import React from 'react'
import { useDispatch } from 'react-redux'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
    
  return (
    <div>
        <div className='absolute -z-10'>
        <img 
        src={BG_URL}
        alt='logo'
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  )
}

export default GptSearch
