const articles = require('../data/articles.json');

exports.home = (req, res) => {
    res.render('index', { articles });

};

exports.article = (req, res) => {
    const article = articles.find(article => article.id === parseInt(req.params.id));
    if (!article) {
        return res.status(404).send('Article not found');
    }

    res.render('article', { article });

};