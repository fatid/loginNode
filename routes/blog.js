const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// mModel
const Blog = require('../models/blogs.js');

router.post('/send', (req, res, next) => {
    //const { title, category, author } = req.body;
    const blog = new Blog(req.body);
    const promise = blog.save();

    promise.then((data)=>{
        res.json({ status: 1 });
    }).catch((err)=>{
        res.json(err);
    });
});

router.get('/:blogId', (req, res) => {
  res.send(req.params);
});



module.exports = router;
