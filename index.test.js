const express = require('express');
const supertest = require('supertest')
const app = require('./index.js');
const request = supertest(app);
const uuid = require('uuid');

jest.mock("./game", () => ({
    startGame: () => {
        return {
            id: "testId",
            score: 0,
            move: 0,
        }
    },
    moveGame: () => {
        const gameInstance = {
            id: "testId",
            score: 1,
            move: 1,
        }
        return gameInstance
    },
    getScore: () => {
        const gameInstance = {
            id: "testId",
            score: 5,
            move: 5,
        }
        return gameInstance
    }
}))

describe("When running the app", () => {
    it("Should start a game at /start route", async () => {
        const res = await request.post('/start')
            expect(res.body).toEqual({ id: "testId", score: 0, move: 0, })
    });
    it("Should return the score for a game", async () => {
        const res = await request.get('/score/testId')
        console.log(res.body)
        expect(res.body.score).toBe(5)
    });
    it("should save the id and score to the game cache", async () => {
        const res = await request.post('/game/testId/ROCK')
        expect(res.body).toEqual({id: "testId", score: 1, move: 1,});
    })
});
