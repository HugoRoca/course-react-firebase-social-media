const functions = require("firebase-functions");
const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login, uploadImage, addUserDetails, getAuthenticateUser } = require("./handlers/users");
const FBAuth = require('./utils/fbAuth')
const app = require("express")();

// Screams
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.post('/user/image', FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticateUser)

// Users
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.https.onRequest(app);
