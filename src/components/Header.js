import React ,{useEffect}from 'react'
import { LOGO_URL,USER_ICON } from '../utils/constants'
 import {  signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice';

const Header = () => {

const navigate=useNavigate()

// subscribing to the store
const user=useSelector(store=> store.user)

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


  return (
    <div className='flex justify-between'>
      <div className='absolute z-10 pl-30 w-screen  bg-gradient-to-b from-black'>
        <img    className='w-60 object-cover'  src={LOGO_URL}   alt='logo' />
      </div>
      {/* if my user exist then only display signout */}
      {
      user &&(<div className=' flex gap-5 absolute right-10 mt-6 z-10'>
        <img    className='w-14 object-cover rounded-sm'  src={USER_ICON}   alt='user' />
        <button className='text-white font-bold'  onClick={handleSignOut} >Sign Out</button>
      </div>)
      }
       
    </div>
  )
}

export default Header
