import Url from '../models/url.js';
import Sqids from 'sqids';

const sqids = new Sqids();

class SiteController {
    // GET /
    create(req, res, next) {
        res.render('home');
    }

    // POST /result
    async result(req, res, next) {
        try {
            const longUrl = req.body.q;
            const shortUrlId = sqids.encode([Date.now()]); // Pass timestamp as an array
            const shortUrl = `${req.protocol}://${req.get('host')}/${shortUrlId}`;

            const url = new Url({ long_url: longUrl, short_url: shortUrl });
            await url.save();

            res.send(`Short URL is: <a href="${shortUrl}">${shortUrl}</a>`);
        } catch (error) {
            next(error);
        }
    }

    // GET /:shortUrlId
    async redirect(req, res, next) {
        try {
            const shortUrlId = req.params.shortUrlId;
            const url = await Url.findOne({
                short_url: `${req.protocol}://${req.get('host')}/${shortUrlId}`,
            });

            if (url) {
                res.redirect(url.long_url);
            } else {
                res.status(404).send('URL not found');
            }
        } catch (error) {
            next(error);
        }
    }

    // GET /shortener
    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
