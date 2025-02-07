class ValentineController {
    // GET /valentine
    index(req, res) {
        res.render('valentine', { layout: 'valentine' });
    }
}

export default new ValentineController();
