
import app from '../app.js';
import { expect } from 'chai';
import supertest from 'supertest';


describe('/', () => {
    it('should render the index page', async () => {
        const response = await supertest(app).get('/');
        expect(response.status).to.equal(200);
    }).timeout(20000);

    it('should render the 404 page (invalid route)', async () => {
        const response = await supertest(app).get('/test');
        expect(response.status).to.equal(404);
    }).timeout(20000);

    it('should render the Metallica post', async () => {
        const response = await supertest(app).get('/');
        const metallicaPost = {title: 'Metallica', text: 'The second best band in the world!'};

        expect(response.status).to.equal(200);
        expect(response.text).to.include(metallicaPost.title);
    }).timeout(20000);

    it('should not render the Oasis post (post does not exist)', async () => {
        const response = await supertest(app).get('/');
        const oasisPost = {title: 'Oasis', text: 'The ninth best band in the world!'};

        expect(response.text).to.not.include(oasisPost.title);
    }).timeout(20000);
});