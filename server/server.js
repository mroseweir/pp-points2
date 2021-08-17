const express = require("express");
const app = express();
const cors = require("cors");
const port = 4500;
const ctrl = require("./controller/controller");
//establish Middleware
app.use(express.json());
app.use(cors());

//commands for the controler file
app.get("/api/points", ctrl.getPoints);

app.listen(port, () => console.log(`Sever is up and running on ${port}...`));
