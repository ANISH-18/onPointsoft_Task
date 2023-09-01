const mongoose = require("mongoose");
require("dotenv").config();

connectDb = () => {
  const databaseUrl = process.env.DATABASE_URL;
  mongoose.connect(databaseUrl);
  let db = mongoose.connection;

  db.on("error", (error) => {
    console.log("Error Connecting Database", error.message);
  });

  db.on("open", () => {
    console.log("Database Connected");
  });
};

module.exports = connectDb();
