
const app = require('./app');
const dotenv = require('dotenv/config');

app.listen(process.env.PORT || 3001, () => console.log(`Server is Running on PORT [${process.env.PORT || 3001}]`))