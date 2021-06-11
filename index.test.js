const express = require('express');
const supertest = require('supertest')
const app = require('./index.js');
const request = supertest(app);
const uuid = require('uuid');

jest.mock("./game", () => ({
    startGame: () => {
        return {
            id: "testId",
            score: 0
        }
    }
}))

describe("When running the app", () => {
    it("Should display expected content on the root", async () => {
        const res = await request.get('/')
        expect(res.text).toBe("Hello world")
    });
    it("Should start a game at /start route", async () => {
        const res = await request.post('/start')
            expect(res.body).toEqual({ id: "testId", score: 0 })
    });
    it("Should return the score for a game", async () => {
        const res = await request.get('/score?id=testId')
        expect(res.body.score).toBe(5)
    });
});
