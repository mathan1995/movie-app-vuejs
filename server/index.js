const admin = require("firebase-admin");

const serviceAccount = require("./movie-app.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://movie-app-6c348-default-rtdb.firebaseio.com",
});

const firestore = admin.firestore();
const movies = require("./movie-list.json");

const db = firestore.collection("movies");
movies.map(async (movie) => {
  try {
    await db.add(movie);
  } catch (error) {
    console.log(error);
  }
});
