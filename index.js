const express = require("express");
const cors = require("cors");
const app = express();
const Routes = require("./routes/route");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8000;

app.use("/", Routes);

app.listen(PORT, () => {
  console.log(`Your server is running successfully on PORT: ${PORT}`);
});
