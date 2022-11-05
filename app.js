const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

require('dotenv/config');

const api = process.env.API_URL;
const ProductRouter = require('./routers/products');

//middleware
app.use(express.json());
app.use(morgan('tiny'));

//routers
app.use(`${api}/products`, ProductRouter);

mongoose.connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'hellskitchen-database'
}).then(() =>{
    console.log('Database connection is ready')
}).catch((err) => {
        console.log(err);
})
    app.listen(3000, () => {
    console.log(api);
    console.log('server is running http://localhost:3000');
})