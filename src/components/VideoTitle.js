import React from 'react'

const VideoTitle = ({original_title,overview}) => {
  return (
    <div className='pt-[20%] pl-24 absolute text-white w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className='font-bold text-3xl'>{original_title}</h1>
      <p className='w-1/4 text-lg font-normal py-6'>{overview}</p>
      <div>
        <button className='bg-white rounded-lg py-4 px-12 text-black font-semibold'>▶️ PLAY</button>
        <button className='bg-gray-500 rounded-lg py-4 px-12 text-white font-semibold mx-2 bg-opacity-55'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
