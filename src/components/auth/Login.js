import React, { useRef, useState } from 'react'
import Header from '../Header'
import { BACK_URL } from '../../utils/constants'
import checkValidData from '../../utils/validate'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import {useDispatch} from 'react-redux'
import { addUser } from '../../store/userSlice';


const Login = () => {
    const[isSignInForm,setIsSignInForm]=useState(true)
    const[errorMessage,setErrorMessage]=useState(null)

    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)

  

    const dispatch=useDispatch()

  const handleFormClick=()=>{
    // validate the form data
  //  console.log(email.current.value)
  //  console.log(password.current.value)
    const message=checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)
    // console.log(message)
// if my message is not null return this function 
    if(message!==null) return;
   

    // Signup and Login logic
    if(!isSignInForm){
      // signup form
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // console.log(user)
    // user is created then i need to update profile
    updateProfile(user, {
   displayName:name.current.value,
    }).then(() => {
  // Profile updated!
      const {uid,email,displayName }= auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      
  }).catch((error) => {
    // An error occurred
  setErrorMessage(error.message)
  });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
       setErrorMessage(errorCode+"-"+errorMessage)
    
    
  });

    }
    else{
      // signin form
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
    // Signed in 
       const user = userCredential.user;
         console.log(user)
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
    }
   

  }

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
     <Header/>
     {/* background image */}
     <div className='absolute'>
        <img  className='w-screen h-screen object-cover'   src={BACK_URL} alt='background' />
     </div>
    {/* form */}
     <form  onSubmit={ e => e.preventDefault() }     
         className='   w-full sm:w-full  md:w-3/12  absolute    -ml-10 md:mx-auto pt-20 pb-10   pl-10  md:pl-2  left-10 right-0 bg-black bg-opacity-80  mt-32  md:mt-24 text-white rounded-md' >

        <h2 className='text-2xl font-bold pl-10'>{isSignInForm?"Sign In":"Sign Up"}</h2>

        {
            !isSignInForm && 
             ( <input type='text'  ref={name}   name='Name' placeholder='Enter Your Name'  className='my-3 mx-10 bg-transparent   border rounded-sm py-3 px-5'  />
            )
        }

        <input type='email' name='email'  ref={email}    placeholder='Enter Your Email'  className='my-3 mx-10 bg-transparent   border rounded-sm py-3 px-5'  /><br/>

        <input type='password' name='password'  ref={password}   placeholder='Enter Your Password'  className='my-2 mx-10 bg-transparent border rounded-sm py-3 px-5 '   /><br/>

        <p className='text-red-700 font-semibold pl-5'>{errorMessage}</p>

        <button className='w-56 bg-red-600 ml-10 py-2 rounded-sm font-bold mt-2'
         onClick={handleFormClick}           >
          {isSignInForm?"Sign In":"Sign Up"}</button>

        <p className='ml-10 mt-5 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New To streamflix?Sign Up Now":'Already Registered?Sign In Now'}
            
           </p>
     </form>
    </div>
  )
}

export default Login
