const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost/bev-wiz', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;