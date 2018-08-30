# Weight-trackr

## Building and Running the App
### Installs
Make sure you have all the installs by installing both the backend and front end requirements.
```
/$ npm install
/frontend$ npm install
```
### Building
From the root directory, start the backend server. It uses nodemon, so it will restart the app whenever changes are made.
```
/$ npm run start
```
From the frontend directory, the `bundle.js` is built using webpack. In test mode, the watch flag is set, so the bundle will recompile when changes are made.
```
/frontend$ npm run watch
```
### Using
Once the frontend has been made and the backend is running, navigate to `localhost:3000` to access the app.
