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
app.get("/api/login", ctrl.getLogin);
app.post("/api/points", ctrl.addStudent);
app.put("/api/points/:id", ctrl.updatePoints);
app.delete("/api/points/:id", ctrl.deletePoints);
app.put("/api/login:id", ctrl.updateLogin);

app.listen(port, () => console.log(`Sever is up and running on ${port}...`));
