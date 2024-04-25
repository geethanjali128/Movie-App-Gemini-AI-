import React from 'react'
import GeminiSearchBar from './GeminiSearchBar'

import { BACK_URL } from '../../utils/constants'
import GeminiMovieSuggestions from './GeminiMovieSuggestions'

const GeminiSearch = () => {
  return (
    <div>
       <div className='  absolute  -z-10 '>
        <img   className='  h-screen w-screen object-cover'  src={BACK_URL} alt='background' />
     </div>
    <GeminiSearchBar/>
    <GeminiMovieSuggestions/>
    </div>
  )
}

export default GeminiSearch
