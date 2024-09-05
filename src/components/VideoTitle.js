import React from 'react'

const VideoTitle = ({original_title,overview}) => {
  return (
    <div className='pt-[20%] pl-6 md:pl-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className='font-bold 
     text-2xl md:text-4xl'>{original_title}</h1>
      <p className='hidden w-2/4 md:inline-block text-lg font-normal py-6'>{overview}</p>
      <div className='my-3 md:my-0'>
        <button className='bg-white rounded-lg py-1 md:py-4 
       px-3 md:px-12 text-black font-semibold hover:opacity-80'>▶️ PLAY</button>
        <button className='hidden md:inline-block bg-gray-500 rounded-lg py-4 px-12 text-white font-semibold mx-2 bg-opacity-55 hover:opacity-80'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
