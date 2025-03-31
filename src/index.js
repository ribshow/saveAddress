import express from "express";
import routes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/users", routes);

app.listen(5000, console.log("Server is running on PORT 5000"));