# Good Old T9  :green_heart:

## Getting Started
Live demo: https://salty-mesa-29142.herokuapp.com/

### Prerequisites
Npm should be installed globally to run this app in your local environment. The most basic installation is installing node on your system.
If you haven't installed yet:
You can download nodejs specific to your platform from [nodejs.org](https://nodejs.org/en/download/) or MacOS users who have **HomeBrew** installed can run:
```
brew install node
```

## Installing
#### React
Install dependencies using npm:
```
npm install
```

### React-Native
Navigate to mobile folder and install dependencies using npm:
```
cd mobile && npm install
```

## Usage
### React
Run
```
npm start
```
on root of the project. It should start a server on [port 3000 by default]('http://localhost:3000').

### React Native
Navigate to react native path of the project and start the server:
```
cd mobile && npm start
```
Server should be started on port 8081 by default.
Then open a new terminal window/tab while server running on previous one.

To run project on your **IOS** device:
Switch to newly created terminal window and type
```
npm run ios
```
To run project on your **Android** device:
Switch to newly created terminal window and type
```
npm run android
```

### Server
Navigate to server folder in the root path and run:
```
node index.js
```
A node server should be started on port 8080 by default.
If you would like server to restart automatically after changing source code [Nodemon]('https://nodemon.io/') is a utility to provide you this facility.

## Running Tests
To run all tests:
```
npm run test
```

If you would like to run a specific test:
```
npm run test ${path}
```
Which ${path} is the test file's location. (e.g: src/App.test.js)
