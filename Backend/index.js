const express = require("express");
const app = express();
const router = require("./Routes/route")
const dotenv = require("dotenv");
const cors = require("cors");
//const path = require("path");
const mongoose = require("mongoose");
dotenv.config({ path: "config.env" });
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());






//load our rest api routes
app.use(router);

//connect to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Database connected & app listening on port ${port}!`)
    })
  })
  .catch((error) => {
    console.log(error);
  })



