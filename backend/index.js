const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json("home"));
app.use("/auth", authRoute);
app.use("/user", userRoute);

app.listen(port, () =>
  console.log(`Server started at http://localhost:${3000}`)
);
