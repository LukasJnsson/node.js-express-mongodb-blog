
import newPost from "../src/services/newPost.service.js";
import getPostByTitle from "../src/services/postByTitle.service.js";
import deletePostById from "../src/services/deletePostById.service.js";
import { expect } from "chai";


describe('/posts/new', () => {
    it('should create a new post', async () => {
        const post = {
            userid: '648b0448562e683f2e211eeb',
            title: 'Audioslave',
            text: 'The eighth best band in the world!',
            buffer: 'audioslave-audioslave',
            contentType: 'image/png'
        };
        await newPost(post);

        const response = await getPostByTitle(post.title);
        expect(response.userid.toString()).to.equal('648b0448562e683f2e211eeb');
        expect(response.title).to.equal(post.title);
        expect(response.text).to.equal(post.text);
        
        await deletePostById(response._id);

    }).timeout(20000);

    it('should not create n new post (missing title)', async () => {
        const post = {
            userid: '648b0448562e683f2e211eeb',
            title: '',
            text: 'The ninth best band in the world!',
            buffer: 'audioslave-audioslave',
            contentType: 'image/png'
        };

        try {
            await newPost(post);
        } catch (err) {
            expect(err.errors.title.message).to.equal('Please enter title!');
        };

    }).timeout(20000);

    it('should not create n new post (missing text)', async () => {
        const post = {
            userid: '648b0448562e683f2e211eeb',
            title: 'Oasis',
            text: '',
            buffer: 'audioslave-audioslave',
            contentType: 'image/png'
        };

        try {
            await newPost(post);
        } catch (err) {
            expect(err.errors.text.message).to.equal('Please enter text!');
        };

    }).timeout(20000);

    it('should not create n new post (missing image)', async () => {
        const post = {
            userid: '648b0448562e683f2e211eeb',
            title: 'Oasis',
            text: 'The ninth best band in the world!',
            buffer: '',
            contentType: ''
        };

        try {
            await newPost(post);
        } catch (err) {
            expect(err.errors['image.data'].message).to.equal('Please enter image!');
        };

    }).timeout(20000);
});