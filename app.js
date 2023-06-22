
import dotenv from 'dotenv';
import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import session from 'express-session';
import flash from 'connect-flash';
import authorizeUser from './src/middlewares/authorize.middleware.js';
import { getViews, getPublic } from './src/configs/path.config.js';
import userRoutes from './src/routes/user.routes.js';
import postRoutes from './src/routes/post.routes.js';
import indexRoutes from './src/routes/index.routes.js';


// Settings
dotenv.config({ path: process.env.NODE_ENV === "production" ? ".env.production" : ".env.development" });
const PORT = process.env.PORT;


// App
const app = express();
app.use(express.static(getPublic));
app.set('view engine', 'ejs');
app.set('views', getViews); // specifies where the views are located
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 60 * 24,
      },
}));
app.use(flash());
app.use(authorizeUser);


// Routes (set indexRoutes last)
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/', indexRoutes);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});


export default app;