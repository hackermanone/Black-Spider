const databaseService = require("../services/databaseService")

var express = require('express'),
    router = express.Router();


    router.get('/:tagid' , (req, res) => {
        res.send(`tagid is set to ${req.params.tagid}`);
        res.status(200).end();
    })

    router.get('/', (req, res) => {
        let boot = 'asd';
        let x = {[boot]:'boot', leg:'leg', lmao:'lmao'};
        res.setHeader('Content-Type', 'application/json');
        res.send(x);
        res.status(200).end();
    })

    router.post('/adduser', (req, res) => {
        // user email found in database
        databaseService.getUserByEmail(req.body)
        .then((result) => {
            if(result == 0) {
                databaseService.addUser(req.body);
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).end("Failure");
        })

        res.status(200).end("User added");
    })

    router.post('/sendmail', (req, res) => {
        try {
            let mailOptions = {
                // from: '"Team" <rickychen9898@gmail.com>',
                from: "rickychen9898@gmail.com",
                to: req.body.email,
                subject: 'Hello',
                text: 'Hello friend ',
                html: '<b>Hello friend </b><br> This is a test email'
            }
            emailService.sendMail(mailOptions, (err, info) => {
                if (err) throw err;
                console.log(info.message);
            });
        } catch (err) {
            console.log(err);
        }
    })

module.exports = router;