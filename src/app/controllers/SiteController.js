class SiteController  {

    // GET /
    index(req, res) {
        res.render('home');
    }

    // GET /shortener
    search(req, res) {
        res.render('search');
    }

}

export default new SiteController();