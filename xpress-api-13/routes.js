'use strict';

function routes(app) {
    console.log('Starting routes...');
    app.use('/api/exercises/', require('./api/exercises'));
}

module.exports = routes;