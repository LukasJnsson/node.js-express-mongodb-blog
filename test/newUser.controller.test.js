
import app from "../app.js";
import deleteUserByTitle from "../src/services/deleteUserByTitle.service.js";
import { expect } from "chai";
import supertest from "supertest";


describe('/register', () => {
    it('should register new user', async () => {
        const response = await supertest(app)
            .post('/users/register')
            .send({
                username: 'testar',
                password: 'testar'
            });

        expect(response.status).to.equal(302);
        expect(response.headers.location).to.equal('/');

        await deleteUserByTitle('testar');

    }).timeout(20000);

    it('should not register new user (user already exist)', async () => {
        const response = await supertest(app)
            .post('/users/register')
            .send({
                username: 'test',
                password: 'test'
            });

            expect(response.status).to.equal(302);
            expect(response.headers.location).to.equal('/users/register');
    }).timeout(20000);
});