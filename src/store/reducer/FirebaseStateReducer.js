import {compose} from 'redux'
import {reactReduxFirebase} from 'react-redux-firebase'

const firebaseConfig = {
    
   apiKey: "AIzaSyASqlWCCzZMr0lnp3xgxSlPu0hC8pZN4lc",
    authDomain: "hackathon-f5938.firebaseapp.com",
    databaseURL: "https://hackathon-f5938.firebaseio.com",
    projectId: "hackathon-f5938",
    storageBucket: "",
    messagingSenderId: "977396199204"
}

const config = {
    userProfile : 'users',
    enableLogging : false
}

const createStoreWithFirebase = compose (
    reactReduxFirebase(firebaseConfig , config)
)
const store = createStoreWithFirebase()