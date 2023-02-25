const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost/IssueTracker')
.then(
() => {console.log("Database connected successfully")},
(err) => {console.log("error occuring while database connecting",err)}
);

module.exports = mongoose;