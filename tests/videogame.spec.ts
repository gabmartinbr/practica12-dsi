import { describe, test, beforeEach, expect } from "vitest";
import request from "supertest";
import mongoose from "mongoose";
import { app } from "../src/app.js";
import { Videogame } from "../src/models/Videogame.js"
import { IVideogame } from "../src/interfaces/IVideogame.js";

const nfs = {
    title: "nfs",
    developer: "ea",
    publisher: "ea",
    genre: ["action", "adventure"],
    platform: ["ps5", "pc"],
    releaseDate: new Date(2021, 5, 1),
    price: 70,
    score: 90,
    multiplayer: true,
    dlcs: ["",]
}

const nfs2 = new Videogame({
    title: "nfs",
    developer: "ea",
    publisher: "ea",
    genre: ["action", "adventure"],
    platform: ["ps5", "pc"],
    releaseDate: new Date(2021, 5, 1),
    price: 70,
    score: 90,
    multiplayer: true,
    dlcs: ["",]
})

const brawl = {
    title: "brawl stars",
    developer: "supercel",
    publisher: "supercel",
    genre: ["action"],
    platform: ["mobile"],
    releaseDate: new Date(2019, 5, 1),
    price: 0,
    score: 70,
    multiplayer: true,
    dlcs: ["",]
}

describe("Pruebas del API de Videogames", () => {
    let vidId: string;

    beforeEach(async () => {
        await Videogame.deleteMany({});
        const v = await Videogame.create(nfs);
        vidId = v._id.toString();
    });
    describe("Post /videogames", () => {
        test("Deberia añadir un videojuego nuevo", async () => {
            const response = await request(app).post("/videogames").send(brawl).expect(201)
            expect(response.body.title).toBe(brawl.title)

        })
    })

    describe("Get /videogames", () => {

        test("Deberia obtener un juego por su id de mongo", async () => {
            const response = await request(app).get("/videogames").send(vidId).expect(200)
        })
    })

    describe("Delete /videogames", () => {
        test("Deberia borrar un videojuego por su id", async () => {
            const response = await request(app).get("/videogames").send(vidId).expect(200)
        })
    })

})