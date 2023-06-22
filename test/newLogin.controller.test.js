
import app from "../app.js";
import { expect } from "chai";
import supertest from "supertest";


describe('/login', () => {
    it('should login the user', async () => {
        const response = await supertest(app)
            .post('/users/login')
            .send({
                username: 'test',
                password: 'test'
            });

        expect(response.status).to.equal(302);
        expect(response.headers.location).to.equal('/'); // select the headers object and the location prop from the response object
    }).timeout(20000);

    it('should not login the user (wrong password)', async () => {
        const response = await supertest(app)
            .post('/users/login')
            .send({
                username: 'test',
                password: 'testar'
            });

        expect(response.status).to.equal(302);
        expect(response.headers.location).to.equal('/users/login');
    }).timeout(20000);
});