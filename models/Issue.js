const mongoose = require('mongoose');
const issueSchema = new mongoose.Schema({
    desc : {
        type : String,
        require : true
        
    },
    severity : {
        type : String,
        require : true
    },
    assign : {
        type : String,
        require : true
    }
},{
    timestamps : true
});

const Issue = mongoose.model('Issue',issueSchema);

module.exports = Issue;