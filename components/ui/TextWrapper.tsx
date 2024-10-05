import React from 'react'
import BlinkingStars from '~/assets/Icons/BlinkingStars'

const TextWrapper = ({text}:{text:string}) => {
  return (
    <div className='rounded-full px-4 py-2 border shadow-blue-100 flex items-center gap-2  shadow-md'>
          <span><BlinkingStars /></span>
      <h4 className='font-medium text-base text-sass-brown_black  leading-6'>{ text}</h4>
    </div>
  )
}

export default TextWrapper
