import blogRouter from './blog.js';
import siteRouter from './site.js';

function route(app) {
    app.use('/blog', blogRouter);
    app.use('/', siteRouter);
}

export default route;
