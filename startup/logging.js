const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
    //new winston.transports.Console({ colorize: true, prettyPrint: true });
    //winston.handleExceptions(new winston.transports.File({ filename: 'uncoughtExceptions.log' }));
    new winston.transports.Console({ colorize: true, prettyPrint: true });
    new winston.transports.File({ filename: 'uncoughtExceptions.log' });

    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    winston.add(winston.transports.File, { 'filename': 'logfile.log' });
    winston.add(winston.transports.MongoDB, { db: 'mongodb://localhost/vidly', level: 'info' });
}

//catch uncought exceptions
// process.on('uncoughtExceptions', (ex) => {
//   winston.error(ex.message, ex);
//   process.exit(1);
// })