const blogModel = require('../models/blog');

const createBlog = async (req, res) => {
    try {
        const { title, content, author, image } = req.body;

        const blog = new blogModel({
            title,
            content,
            author,
            image
        });

        await blog.save();
        res.send("blog created successfully");

    } catch (err) {
        
        if(err.code == "11000"){
            res.status(400).send("Title already exists") 
        } else {
            res.status(400).send("Title is required")
        }
        
    }
}

const getBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find({});
        res.send(blogs)
    } catch (err) {
        res.status(500)
        res.send("Internal Server Error")
    }
}

const getOneBlog = async (req, res) => {
    try {
        const blog = await blogModel.findOne(req.params.title);
        console.log(req.params.title + " printed")
        res.send(blog)
    } catch (err){
        console.log(err)
    }
}


module.exports = {
    createBlog,
    getBlogs,
    getOneBlog
}
