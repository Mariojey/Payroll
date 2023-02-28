require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT;

const payrollRouter = require('./router/payrollRouter')

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use('api/payroll', payrollRouter)

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Ups! Something went wrong 🥺"
    });
});

app.listen(PORT, () => {
    console.log(`====================================`);
    console.log(`||          P A Y R O L L         ||`);
    console.log(`||🦫 Server running on PORT ${PORT}   ||`);
    console.log(`===================================`);
})