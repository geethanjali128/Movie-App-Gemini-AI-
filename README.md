# Getting Started with Create React App

# MoviePack-GPT

-create-react-app
-configured TailwindCSS
-Header
-routing of app
-Login Form
-Signup Form
-Form Validation
-useRef Hook
-installed firebase
-firebase setup
-create signup user acount in firebase
-implement sign in user api
-created redux store with userSlice
-as soon as a user created and it is success then i need to push that user object in to my redux store
-instead of dispatching action again and again(at signup,signin and signout):i am using "onAuthStateChanged"
api given us by firebase,and it is called whenever user do these actions(signin,aignup and signout)
-implemented signout
-update profile
-fetch from TMDB movies
-BugFix-signup user displayname update
-BugFix-if the user is not loggedin Redirect to /browse to login page and vice verca
-unsubscribed to the onAuthStateChanged callback
-added hardcoded values(url's) to constant file
-register for tmdb api && create an app && get acces token
-get data from tmdb now playing moviesl ist api
-created a movieSlice in my redux store and updates state playing movielist movies by dispatching action
-created custom hook for making api call and updating the store to make clean my component
-customizing browse component
-planning for Maincontainer& secondarycontainer
-created custom hook to fetch data of trailer viedo and updated my store with that data
-emebedded the youtube video and make it autoplay and css w-screen and aspect video
-building secondary component with moviecard and movielist
-geminiai api search page
-gemini ai search bar
-fetch gemini ai api movie suggestions from tmdb api
-multiligual gemini ai serach bar
-reused movieList component to make gemini ai movie suggestions
-adding .env file
-adding .env file to .gitignore
-made app responsive

#Feauters

1.page1
-LOgin/Signup screen
-signin.signup Form
-Redirect to browse page
2.page 2  
-browse page(after authentication)
-Header
-Main Movie
-Trailor in background
-Title & discription
-Movie Suggestions
-Movie Lists \* N
3.page 3
-MoviePack-GPT
-Search Bar
-Movie Suggestions
