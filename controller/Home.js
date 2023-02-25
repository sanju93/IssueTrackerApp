const Issue = require('../models/Issue');
module.exports.home = (req,res) => {
    return res.render('home');
}

module.exports.create = async (req,res) => {
  
    await Issue.create({
        desc : req.body.desc,
        severity : req.body.severity,
        assign : req.body.assign
    });


    return res.redirect('back');
}