

 const checkValidData = (email,password,name) => {
 // if my email or password is not validate send me an error message

    // validating email using regex
    const isEmailValid=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    // validating passowrd using regex
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // validating username
    const isUsernameValid=/^[0-9A-Za-z]{6,16}$/.test(name)

    if(!isEmailValid) return 'Email ID is not Valid';
    if(!isPasswordValid) return  'Must contain minimum 1 number,1 uppercase letter,1 special character,2 numeric characters and length 8';
    if(!isUsernameValid) return  'Username is not Valid';

    // console.log(isEmailValid)

    // if email , password  and name is valid return null
    return null
 
}

export default checkValidData;
