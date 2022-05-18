const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('/', (_req, res) => {
        res.sendFile(path.join(__dirname, '../client/'));
    });
}

app.use(routes);

db.once('open', () => {
    console.log('Successfully connected to the database');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})