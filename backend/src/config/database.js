const mongoose = require('mongoose');
mongoose.Promise = global.Promise // Removing warnings 
module.exports = mongoose.connect('mongodb://localhost/mymoney')//database name