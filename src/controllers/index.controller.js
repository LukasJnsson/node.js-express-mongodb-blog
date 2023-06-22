
import getPosts from '../services/index.service.js';


/**
 * Function that fetch all posts and renders the index view
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const indexController = async (req, res) => {
    try {
        const blogPosts = await getPosts();
        const title = 'Home';
        const mainHeader = title, subHeader = title;
        
        /*
        The variable names in EJS and Node are equal 
        therefore the variables are passed direclty without specifying the key
        */
        res.render('index', {
            blogPosts,
            title,
            mainHeader,
            subHeader
        });

    } catch (err) {

    };
};


export default indexController;