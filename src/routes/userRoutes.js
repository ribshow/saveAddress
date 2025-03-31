import { Router } from "express";
import { searchCep } from "../Controllers/UserController.js";

const routes = Router();

routes.get("/find/:cep/:name", searchCep);

export default routes;
