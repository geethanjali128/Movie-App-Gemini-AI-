


export const LOGO_URL='https://www.canva.com/design/DAGDDtVFAnc/xNBrtBvy-v7UQ6KMXsiOKg/view'
export const BACK_URL='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg'
export const USER_ICON='https://occ-0-6127-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRhunw1-HwxU3HlvmFM9UycO_VOxatA9nWQ4aaCKTCxOVOv5OchUTFO6RJznhN4G2scAmgXUpHzkkVdq9_8f9ui0RksluPFA3w.png?r=229'
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+process.env.REACT_APP_TMDB_API_KEY
  }
};

export const IMG_URL='https://image.tmdb.org/t/p/w500'

export const SUPPORTED_LANGUAGES=[
  {
    identifier:"en",
    name:"English"
  },
   {
    identifier:"hindi",
    name:"Hindi"
  },
   {
    identifier:"telugu",
    name:"Telugu"
  },
   {
    identifier:"spanish",
    name:"Spanish"
  }
]

export const GEMINIAIAPI_KEY=process.env.REACT_APP_GEMINIAI_API_KEY


