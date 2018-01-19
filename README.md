# My Application

You need MongoDB installed as we are using the Mongo connector for Loopback

Usage
From the root folder (items), install the dependencies

$ npm install
To run the server

$ npm start
App: http://localhost:3000 Loopback explorer: http://localhost:3000/explorer

React client_src Usage
This is the react source code. This is the code you edit

Open a new terminal in the "client_src" folder

$ npm install -g create-react-app
From the "client_src folder" install client dependencies

$ npm install
To Serve client

$ npm start
This should start on port 3001

Compile React client_src
From the "client_src" folder run

$ npm run build
This will put all static assets in the Loopback "client" folder and update the main app