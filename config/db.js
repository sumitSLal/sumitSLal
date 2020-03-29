//?Create mongodbCnnection, if we wanted we could have done this in the server.js file but this keeps things organised.
const mongoose = require('mongoose');
//?Config is the node package that we required to help us connect to the db;
const config = require('config');
//?This actually gets the mongoURI value stored in defualt.json
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        //?mongoose.connect() returns a promise so we have to use await to wait for the function
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        console.log("MongoDB Connected...")
    } catch (err) {
        //?err has a message property we can access.
        console.error(err.message)
        //? Exit Process with failure.
        process.exit(1)
    }
}

//? Export the connectDB method.
module.exports = connectDB;

