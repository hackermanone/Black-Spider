const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database : process.env.DB
});


/*
    users( ID, FirstName varchar, Lastname varchar, PhoneNumber varchar, Email varchar )
*/
module.exports.addUser = (userInfo) => {
    let sql = "insert into users(FirstName, LastName, PhoneNumber, Email) values(?, ? ,?, ?)";
        inserts = [userInfo.fname, userInfo.lname, userInfo.phone, userInfo.email]
                    .map((input) => {
                        let regex = /[\(\)\-\s]/g;
                        let result = input.replace(regex, '');
                        return escape(result);
                    });
    connect();
    connection.query(sql, inserts, (err, results) => {
        if (err) throw err;
        return results;
    });
}

module.exports.getUserByEmail = (userInfo) => {
    let sql = "select * from user where email= ?";
    inserts = [userInfo.email];

    return new Promise((resolve, reject) => {
        connection.query(sql, inserts, (err, results) => {
            if (err) reject(err);
            resolve(results.length);
        });
    })

}

module.exports.query = (query) => {
    connect();
    connection.query(query, (err, result) => {
        if (err) throw err;
        return result;
    });
    connection.end();
}

/* HELPER FUNCTIONS */
connect = () => {
    connection.connect((err)=> {
        if (err) throw err;
    });
}