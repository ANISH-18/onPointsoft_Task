const mongoose = require("mongoose");
connectDb = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/onPointsoft");
  let db = mongoose.connection;
  db.on("error", (error) => {
    console.log("Error Connecting Database");
  });

  db.on("open", () => {
    console.log("Database Connected");
  });
};

module.exports = connectDb();
