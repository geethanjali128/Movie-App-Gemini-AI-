import React ,{useEffect}from 'react'
import { LOGO_URL,USER_ICON } from '../utils/constants'
 import {  signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { addUser,removeUser } from '../store/userSlice';
import { toggleGeminiSearch } from '../store/genAiSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../store/configSlice';
import Logo from '../utils/logo.png'



const Header = () => {

const navigate=useNavigate()



// subscribing to the store
const user=useSelector(store=> store.user)

const showGeminiSearch=useSelector( store=> store.geminiai.showGeminiSearch)

const dispatch=useDispatch()

  const handleSignOut=()=>{
   signOut(auth).then(() => {
    // Sign-out successful.
   
    }).catch((error) => {
    // An error happened.
    navigate('/error')

    });
  }

      // instead of dispatcing action again and again i am using  onAuthStateChanged api(like a eventhandler)
    // and i want to make  this api call once,so i am making it inside useEffect
    useEffect(()=>{
   const unSunscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
  //  whwnever user signup or signin this part will be exexuted
    const {uid,email,displayName }= user;
    // updating my store
    // dispatching action
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    // once user created successfully then naviagte to browse page
    navigate('/browse')
    
  } else {
    // User is signed out,then this wiil action will be excuted
    // dispatching action
    dispatch(removeUser())
    // when user signed out navigate to signin page
    navigate('/')
  }

  // unsubscribe when component unmount
    return ()=> unSunscribe()
  });
    },[])

    const handleGeminiSearchClick=()=>{
      // toggle GPT search
      dispatch(toggleGeminiSearch())
    }

    const handleChangeLanguage=(e)=>{
      dispatch(changeLanguage(e.target.value))
    }


  return (
    <div className='bg-black md:flex md:justify-between'>
      <div className='absolute z-10 px-5 md:-mt-1 -mt-6 w-screen  bg-black sm:bg-black  md:bg-gradient-to-b md:from-black'>
        <img    className=' w-28 mx-auto md:mx-0  md:w-48  md:h-24  object-cover '  src={Logo}   alt='logo' />
      </div>
      {/* if  user exist then only display signout */}
      {
      user &&(<div className=' flex justify-between sm:justify-between ml-5 sm:ml-5 gap-16 sm:gap-48 md:gap-5 absolute md:right-10   mt-20  md:mt-6 z-10'>
        {
           showGeminiSearch &&  (<select 
           className='font-bold px-2 bg-gray-500 text-white cursor-pointer' 
            onChange={handleChangeLanguage}>
          { SUPPORTED_LANGUAGES.map( lang => 
         ( <option   key={lang.identifier}  value={lang.identifier} >{lang.name}</option>)
          )}
        </select>)
        }
        <button  
        onClick={handleGeminiSearchClick}     
        className='text-white bg-purple-800 px-2 rounded-sm'>
          {showGeminiSearch ? "homepage":"Gemini AI Search"}</button>
        <img    className=' hidden md:inline-block w-8 object-cover rounded-sm'  src={USER_ICON}   alt='user' />
        <button className='text-white font-bold'  onClick={handleSignOut} >Sign Out</button>
      </div>
      )
      }
       
    </div>
  )
}

export default Header
