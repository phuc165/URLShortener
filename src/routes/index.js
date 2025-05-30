import blogRouter from './blog.js';
import siteRouter from './site.js';
import valentineRouter from './valentine.js';
import hpbdRouter from './hpbd.js';

function route(app) {
    app.use('/blog', blogRouter);
    app.use('/valentine', valentineRouter);
    app.use('/hpbd', hpbdRouter);
    app.use('/', siteRouter);
}

export default route;
