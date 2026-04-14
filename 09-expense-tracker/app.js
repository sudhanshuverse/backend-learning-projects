// External module
const express = require('express');
const { default: mongoose } = require('mongoose');

// Local host
const expenseRouter = require('./routers/expenseRouter');

// Mongo URL
const DB_PATH = "mongodb://localhost:27017//expense";

const app = express();

// set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));  // Access static files
app.use(express.urlencoded({ urlencoded: true }));

app.use('/', expenseRouter);

const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        console.log(`Database is successfully connected`);
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log('Error while connecting to database', err);
    })
