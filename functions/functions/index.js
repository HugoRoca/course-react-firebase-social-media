const functions = require("firebase-functions");
const { getAllScreams, postOneScream } = require("./handlers/screams");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticateUser,
  getScream,
  commentOnScream
} = require("./handlers/users");
const FBAuth = require("./utils/fbAuth");
const app = require("express")();

// Screams
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.get("/scream/:screamId", getScream);
app.post('/scream/:screamId/comment', FBAuth, commentOnScream)

// Users
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticateUser);

exports.api = functions.https.onRequest(app);
