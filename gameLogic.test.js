const express = require('express');
const supertest = require('supertest')
const app = require('./index.js');
const request = supertest(app);
const uuidGen = require('./uuidGen');

jest.mock('./uuidGen', () => ({
    v4: () => {
        return "testId"
    }
}))

describe("When a new game is started", () => {
    it(`Should start a game at /start route with difficulty`, async () => {
        const res = await request.post('/start/HARD')
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ id: "testId", score: 0, move: 0, difficulty: 'HARD' })
    });

    it("Should be able to make a move", async () => {
        const res = await request.post('/game/testId/ROCK')
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ ...res.body, move: 1 })
    })
    it("Should be able to return a score from the score endpoint", async () => {
        const res = await request.get('/score/testId')
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ ...res.body, id: "testId", move: 1, })
    })
    describe("After 5 moves", () => {
        it("Should let the player use the BOMB choice", async () => {
            await request.post('/start')
            for( let i = 0; i < 5; i++ ) {
                await request.post('/game/testId/ROCK')
            }
            const res = await request.post('/game/testId/BOMB')
            expect(res.status).toBe(200)
            expect(res.body.lastGame.result).toBe("WIN")
        })
        it("Should return an error when trying to use bomb before turn 5", async () => {
            await request.post('/start')
            const res = await request.post('/game/testId/BOMB')
            console.log(res.status)
            expect(res.status).toBe(400)
            expect(res.body.error).toEqual({message: "Cannot use bomb this early in the game!"})
        })
    })
})
