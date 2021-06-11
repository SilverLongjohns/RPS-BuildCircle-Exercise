const express = require('express');
const supertest = require('supertest')
const app = require('./index.js');
const request = supertest(app);

describe("When running the app", () => {
    it("Should display expected content on the root", async () => {
        const res = await request.get('/')

        console.log(res.body)

        expect(res.body).toEqual("Hello world")
    })
})
