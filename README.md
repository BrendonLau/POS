# POS System (Take Home Assignment)

## Purpose 
For an online assessment, create a POS system to record transactions 

## Tech Stack 
* NodeJS
* ExpressJS
* ReactJS
* MongoDB Atlas
* Typescript

## Set up guide with Docker
### Prerequisites 
* Please ensure Docker is installed and running else follow this [guide](https://docs.docker.com/engine/install/)

### Set up the connection to MongoDB
1. download and copy the `nodemon.json` file in this ~folder~ or attached in the email containing the username and password
2. Paste the file in the `backend` root directory

### Running the application
1. Build the backend image by running `docker build -t backend .` in the `backend` root directory
2. Run `docker run -p 4000:4000 backend` to start the backend
3. Build the frontend image by running `docker build -t frontend .` in the `frontend` root directory
4. Run `docker run -p 3000:3000 frontend` to start the frontend
5. Go to http://localhost:3000/ 
