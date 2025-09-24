require("dotenv").config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoute = require("./routes/user.router");
const blogRoute = require("./routes/blog.router");
const { checkForAuthCookie } = require('./middlewares/auth');
const blog = require('./models/blog.model');

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL)
    .then((e) => console.log('Mongo DB connected'));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve('./public')));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(checkForAuthCookie("token"));

app.get('/', async(req, res) => {
    const allblogs = await blog.find({});
    console.log(req.user)
    res.render('home',{
        user: req.user,
        blogs: allblogs
        
    })
})
app.use('/user', userRoute)
app.use('/blog', blogRoute)


app.listen(PORT, () => console.log(`app is running on ${PORT}`));