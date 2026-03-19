const Blog = require('../models/Blog');

// Get all blog
exports.getBlog = async (req, res) => {
    const blogs = await Blog.find();
    res.render('home', { blogs });
}


// Add new blog
exports.addBlog = async (req, res) => {
    const blog = req.body;
    await Blog.create(blog);
    res.redirect("/");
}


// Delete blog
exports.deleteBlog = async (req, res) => {
    const id = req.params.id;
    await Blog.findByIdAndDelete(id);
    res.redirect("/");
}