const data = require('../../data');


const postData = data.postData;
const uniqueTags = data.uniqueTags;
const categoryData = data.categoryData;
const recentPostsAmount = 3;

const defaultData = { categoryData: categoryData }
const rightSideBarData = {
    uniqueTags: uniqueTags,
    recentPosts: postData.slice(0, recentPostsAmount)
}

const getHomePage = (req, res) => {
    let data = {
        ...defaultData,
        title: "Just Me",
        posts: postData,
        active: 'index'
    }
    res.render("index", data);
}

const getBlogPost = ({ params }, res) => {
    let post = postData.find((val) => val.id == params.postid);
    if (!post) { res.redirect("/404"); }
    let data = {
        ...defaultData,
        ...rightSideBarData,
        title: post.title,
        post: post
    }
    res.render("post", data);
}

const getAbout = (req, res) => {
    let data = {
        ...defaultData,
        title: "About Me",
        active: 'about'
    }
    res.render("about", data);
}

const getFilter = ({ query }, res) => {
    let filteredPosts = postData.filter((val) => {
        return val.category == query.category || val.tags.includes(query.tag);
    });
    let data = {
        ...defaultData,
        title: "Filter",
        active: query.category,
        posts: filteredPosts
    }
    res.render("filter", data);
}

const getContact = (req, res) => {
    let data = {
        ...defaultData,
        title: "Contact",
        active: 'contact'
    }
    res.render("contact", data);
}

const get404 = (req, res) => {
    let data = {
        ...defaultData,
        ...rightSideBarData,
        title: "404 - Not Found"
    }
    res.render("404", data);
}
db.users.insert({ name: "ilyes chicha", inHuman: false, likes: ["food", "music"] });
const redirect404 = (req, res) => {
    res.redirect("/404");
}

module.exports = {
    getHomePage,
    getAbout,
    getContact,
    getFilter,
    getBlogPost,
    get404,
    redirect404
}