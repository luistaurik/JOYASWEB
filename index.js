const cors = require("cors");
const express = require("express");
const app = express();
const jRoutes = require("./routes/jRoutes.js");

app.use(express.json());
app.use(cors());
app.use("/joyas", jRoutes);

app.listen(3000, () => {
  console.log("Server On!");
});
