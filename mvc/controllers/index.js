const getIndex = (req, res) => {
    res.render('index', { title: 'Express' });
}
const getShop = (req, res) => {
    res.render('shop', { title: 'Shop' });
}
const getStats = (req, res) => {
    res.render('stats', { title: 'Stats' });
}
const getTicketes = (req, res) => {
    res.render('ticketes', { title: 'Ticketes' });
}
const getRegister = (req, res) => {
    res.render('register_form', { title: 'register' });
}
const getExample = (req, res) => {
    let data = {
        title: "EJS Exemple",
        backend: ["Express", "MVC", "RESTful API", "MongoDB"],
        frontend: {
            markeup: "HTML",
            styles: "Sass",
            scripts: "JavaScript",
            frameworks: {
                css: "Bootstrap",
                spa: "Angular"
            }
        }
    }
    res.render('example', data);
}
const registerJSON = (req, res) => {
    res.json({
        message: "Register account", home: { test: "good" }
    });
}

const render404 = function (req, res) {
    res.render("404");
}

module.exports = {
    getIndex,
    getShop,
    getStats,
    getTicketes,
    getRegister,
    registerJSON,
    getExample,
    render404
}