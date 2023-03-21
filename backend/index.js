require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const PORT = process.env.PORT;

const db = require('./config/db')

const payrollRouter = require('./router/payrollRouter')
const userRouter = require('./router/userRouter')
const authRouter = require('./router/authRouter')

app.use(cors());
// app.use(cookieParser)
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
// 
// app.use(
    // session({
        // key: "userId",
        // secret: "showMeList",
        // resave: false,
        // saveUninitialized: false,
        // cookie: {
            // expires: 60 * 60 * 24
        // },
    // })
// );

app.use('/api/auth', authRouter)
app.use('/api/payroll', payrollRouter)
app.use('/api/login', userRouter)

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