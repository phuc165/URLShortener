class HappyBirthDayController {
    // GET /hpbd
    index(req, res) {
        res.render('hpbd', { layout: 'hpbd' });
    }
}

export default new HappyBirthDayController();
