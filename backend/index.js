const express = require("express");
const userRoute = require("./routes/user");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/user", userRoute);
app.listen(port, () =>
  console.log(`Server started at http://localhost:${3000}`)
);
