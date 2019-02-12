const mongoose = require('mongoose');

module.exports = () => {

    mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true});

    mongoose.connection.on('open', () => {

    });
    mongoose.connection.on('error', (err) => {

        console.log('MongoDB: Error:', err);

    });

    mongoose.Promise = global.Promise;
};
