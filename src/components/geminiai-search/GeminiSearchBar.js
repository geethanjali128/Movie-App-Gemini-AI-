import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSearchBar,addGeminiAiMovieResults } from '../../store/genAiSlice'
import lang from '../../utils/languageConstants'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINIAIAPI_KEY } from '../../utils/constants';


const GeminiSearchBar = () => {

  console.log("geminiapi",GEMINIAIAPI_KEY)
 const dispatch=useDispatch()

  const searchText=useRef(null)

// searhc movie in tmdb
const searchMovieTMDB=async (movie) =>{
  const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US`,API_OPTIONS)
  const json=await data.json()
  console.log("movieResults",json)
  return json.results //returns a promise
}


 const handleSearchBar=(e)=>{
    dispatch(updateSearchBar(e.target.value))
 }

 const langKey=useSelector( store=> store.config.lang)


const handleGeminiSearchClick = async () => {
  // Capture user search text
  const userQuery = searchText.current.value;

  try {
    // Create GeminiAI client
    const genAI = new GoogleGenerativeAI(GEMINIAIAPI_KEY);

    async function run() {
      // Specify GeminiAI model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      // Construct query with user input
      const genAIQuery = `Act as a movie recommendation system and suggest some movies for the query "${userQuery}". Only give me names of 5 movies, comma-separated like the example result given ahead. Example result: salar,hanuman,kungfu panda,junglebook,snowdrop.`;

      // Generate content and process response
      const result = await model.generateContent(genAIQuery);
      const response = await result.response;
      const text = response.text();

      // Log user query and response
      console.log(`User query: ${userQuery}`);
      console.log(`GeminiAI response: ${text}`);

      // Parse response to extract movie titles (replace with your parsing logic)
      const movieTitles = text.split(','); 
      // Use the movieTitles array for further processing (e.g., display recommendations)
      console.log("Recommended Movies:", movieTitles);

      // for each movie i will search tmdb api
      const movieTitlesPromiseArray=movieTitles.map( movie => searchMovieTMDB(movie)) //gives[promise,promise,promise,promise,promise]

      console.log(movieTitlesPromiseArray)
      //Promise.all() waits untill each promise to be resolved
      const tmdbResults= await Promise.all(movieTitlesPromiseArray)  

      console.log(tmdbResults)

      dispatch(addGeminiAiMovieResults({movieNames:movieTitles,movieResults:tmdbResults}))
    }

    run();
  } catch (error) {
    console.error("Error:", error);
  }
};



  return (
    <div className=' w-10/12 md:w-1/2  mx-auto'>
      <form className='pt-36 sm:pt-40  md:pt-32  py-1  grid grid-cols-12' onSubmit={ e => e.preventDefault()}  >
        <input 
          type='text'
          name='search' 
          ref={searchText}
          placeholder={lang[langKey].getSearchPlaceholder}
          className=' col-span-10 pl-2  md:pl-5 pr-5 md:pr-10  py-3 sm:py-3  md:py-5 text-sm md:text-lg font-bold border-none rounded-l-full rounded-t-full rounded-b-full rounded-r-md md:rounded-r-none focus:outline-none'
          onChange={handleSearchBar}/>
        <button 
        className='  col-span-2  bg-red-600 -ml-9  md:-ml-20 md:py-3 rounded-full text-sm md:text-lg text-white font-bold'
        onClick={handleGeminiSearchClick}>
          {lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GeminiSearchBar;
