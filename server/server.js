import app from './app.js'
import mongoose from 'mongoose'
/* Loading the environment variables from the .env file. */

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/5000";

/* Connecting to the database and then starting the server. */
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, console.log("Server stated on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });