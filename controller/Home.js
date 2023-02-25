const Issue = require('../models/Issue');
const Project = require('../models/Project');
module.exports.home = (req,res) => {
    return res.render('home');
}

module.exports.getIssue = (req,res) => {
    return res.render('issue');
}


module.exports.createProject = async (req,res) => {
    
    try{

        await Project.create({
            title : req.body.title,
            author : req.body.author,
            desc : req.body.desc
          });

    }catch(err) {

        console.log("error occuring in creating the project",err);
        

    }

    return res.redirect('back');
}


module.exports.fetchProjects = async (req,res) => {

    try{
        let data = await Project.find({});

        return res.status(200).json(data);

    }catch(err) {

        console.log(err);
        return res.redirect('/');

    }
  


}




module.exports.createIssue = async (req,res) => {
  
    await Issue.create({
        desc : req.body.desc,
        severity : req.body.severity,
        assign : req.body.assign
    });


    return res.redirect('back');
}