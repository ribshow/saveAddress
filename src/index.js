import express from "express";
import routes from "./routes/userRoutes.js";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/users", routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
