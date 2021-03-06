import express, { Router } from "express";
import { createUser } from "../Controllers/users";

const routes: Router = express.Router();

routes.get("/create", createUser);

export default routes;
