# MemeTemplate

# Backend
 Backend built with nodejs and expressjs to run the program enter into the folder 
 ### `/Backend`
 ## Installation
  . Remove  `package-lock.json` as it will not be compatabile with all devices
  
  . To install required files to run the app open terminal and run  `npm install` will install all required packages from `package.json`
  
  ## Setup Environment backend
  Create a file
  
  `.env` in `/Backend`
  
  Enter these details in the file without curly brace with actual value
  
  `DATABASE = {database mongodblink} `
  
  `PORT = {port number}`
  
  `SECRET = {random string}`
  
  `CLOUDINARY_URL = {cloudinary api url}`
  
  ## Run backend
  
  `npm start` script will start app.js with nodemon 
  
# Frontend
Frontend built with react js and for design tailwindcss is installed locally and compiled to run/build enter into folder
### `/frontend`

## Installation
. Remove `package-lock.json` 

. To install required dependencies open terminal and run `npm install` that will install all dependencies and dev-dependencies for the react

## Setup Environment frontend

Create a file 
`.env` in `/frontend `

 Enter these details in the file without curly brace with actual value

`REACT_APP_BACKEND = {BACKEND ACCESSING URL} ex. {localhost://8080/api/}`
## Run frontend

`npm start` to start react-scripts 

## Build react app 

`npm build` will give a build for deployment

  
  
  
  
  
