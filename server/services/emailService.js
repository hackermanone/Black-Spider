const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: "smtp.gmail.com",
    // secure: true,
    // port: 465,
    auth: {
        user: process.env.emailUser,
        pass: process.env.emailPass
    },
    tls: {
        rejectUnauthorized: false
    }
});


module.exports = transporter;