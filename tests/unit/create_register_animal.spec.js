const express = require("express");
const serverRoutes = require("../../routes/animal.routes.js");
const request = require("supertest");

const app = express();

app.use("/api/animales", serverRoutes); //routes

describe("testing-server-routes", () => {

it("GET /api/animales - success", async () => {
    const { body } = await request(app).get("/api/animales");
    expect(body).toEqual([
        {
            "id":1,
            "nombre":"Caballo Holandes",
            "tipo":"Mamífero o",
            "edad":"5 o mas",
            "createdAt":"2020-11-19T23:10:57.000Z",
            "updatedAt":"2020-11-21T07:30:10.000Z"
        },
        {
            "id":57,
            "nombre":"hgtfr",
            "tipo":"ffufu u",
            "edad":"0 a 1",
            "createdAt":"2020-11-21T07:12:02.000Z",
            "updatedAt":"2020-11-21T07:29:55.000Z"
        }
    ]);
});
});