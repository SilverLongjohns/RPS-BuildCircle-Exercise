const express = require('express');
const supertest = require('supertest')
const app = require('./index.js');
const request = supertest(app);
const uuid = require('uuid');

jest.mock("./game", () => {
    return {
        id: "testId"
    }
})

describe("When running the app", () => {
    it("Should display expected content on the root", async () => {
        const res = await request.get('/')
        expect(res.text).toBe("Hello world")
    });
    it("Should start a game at /start route", async () => {
        const res = await request.post('/start')
            expect(res.body).toEqual({ id: "testId" })
    });
});
