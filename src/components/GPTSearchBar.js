import React from 'react'
import { SUPPORTED_LANGUAGE } from '../utils/constants'
import language from '../utils/language'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
    const lang = useSelector(store => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        
        <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg'>
            <input 
            type='search' 
            className='p-4 mx-4 my-2 border border-blue-500 col-span-9 rounded-lg' 
            placeholder={language[lang]?.gptPlaceholder} />
            <button className='px-2 py-2 bg-red-700 rounded-lg mx-4 my-4 col-span-3 text-white text-xl'>{language[lang]?.search}</button>
        </form>
      
    </div>
  )
}

export default GPTSearchBar
