import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSearchBar } from '../utils/gptSlice'
import lang from '../utils/languageConstants'


const GptSearchBar = () => {

 const dispatch=useDispatch()

  const searchText=useSelector( store=> store.gpt.showSearchBar)

 const handleSearchBar=(e)=>{
    dispatch(updateSearchBar(e.target.value))
 }

 const langKey=useSelector( store => store.config.lang)

  return (
    <div className=' w-1/2  mx-auto'>
      <form className='pt-40  py-1  grid grid-cols-12 '>
        <input 
          type='text'
          name='search' 
          value={searchText}
          placeholder={lang[langKey].getSearchPlaceholder}
          className=' col-span-10 pl-5 pr-10 py-5 text-lg font-bold border-none rounded-l-full rounded-t-full rounded-b-full rounded-r-none '
          onChange={handleSearchBar}/>
        <button className=' col-span-2  bg-purple-500 -ml-20 py-1 rounded-full text-lg  text-white font-bold'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
