import express from "express";
import "./db/mongoose.js";
import { videogameRouter } from "./routers/videogame.js";

export const app = express();
app.use(express.json());
app.use(videogameRouter);

