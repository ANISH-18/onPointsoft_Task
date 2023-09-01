const express = require("express");
const cors = require("cors");
const app = express();
const connectToDatabase = require("./config/database");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
const port = process.env.PORT || 8081;

//Database Connection
connectToDatabase;

//routes
app.use("/register", require("./routes/register"));

app.use("/login", require("./routes/login"));

app.listen(port, () => {
  console.log("Server Runnig at http://localhost:8081");
});
