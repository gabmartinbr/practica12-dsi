import express from "express";
import { Videogame } from "../models/Videogame.js";
import { IVideogame } from "../interfaces/IVideogame.js";
import { createVideogame, deleteById, getById } from "../models/functions.js";

export const videogameRouter = express.Router();

videogameRouter.post("/videogames", createVideogame)
videogameRouter.get("/videogames", getById)
videogameRouter.delete("/videogames", deleteById)
