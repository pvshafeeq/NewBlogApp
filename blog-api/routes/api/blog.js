const express = require('express');
const router = express.Router();

//Load Blog model
const Blog = require('../../models/Blog');

// tests blog route
router.get('/test', (req, res) => res.send('blog route testing'));

//View All Blog
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.send(blogs);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//View Blog by Id
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.send(blog);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Add Blog
router.post('/', async (req, res) => {
    const data = new Blog({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        category: req.body.category,
        description: req.body.description
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Edit Blog
router.put('/', async (req, res) => {
    try {
        const id = req.body._id;
        const data = req.body;
        const result = await Blog.updateOne({ "_id": id }, data);
        res.send(result);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Delete Blog
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await Blog.findOneAndDelete({ "_id": id }, data);
        res.send(result);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;