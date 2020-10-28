const mongoose = require ('mongoose');

const dbConfig = 'mongodb://localhost/CartDemo';
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
module.exports = mongoose;