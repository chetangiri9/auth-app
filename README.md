# Basic Auth App

## Stack
### Frontend app
- react-native

### Backend server
- express
- mongodb - for store data
- bycryptjs - for encrypting passwords
- celebrate - for route level validations

## Steps for starting the applications

Open up two separate terminal sessions for the frontend app and backend server.

Also add your IPv4 address here to connect to the server, leave the port at 9000 itself
    - [Login](simpleApp/Containers/Login/index.js#L35)
    - [SignUp](simpleApp/Containers/SignUp/index.js#L47)

### Backend server
- cd server
- npm install
- npm run start

### Frontend app
- cd simpleApp
- npm install
- npx react-native start

- For iOS
    - cd ios && pod install && cd ..
    - npm run ios

- For android
    - npm run android