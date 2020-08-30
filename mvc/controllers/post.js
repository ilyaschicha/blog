

const getPosts = (req, res) => {
    res.render("post_templates/posts", { title: "Get All Posts" });
}

const getPost = ({ params }, res) => {
    res.render("post_templates/post", { title: "Post", id: params.postid });
}


module.exports = {
    getPosts,
    getPost
}