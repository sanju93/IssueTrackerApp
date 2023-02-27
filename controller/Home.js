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


  

    try{

       var issue =  await Issue.create({
            desc : req.body.desc,
            severity : req.body.severity,
            assign : req.body.assign,
            project : req.body.id
        });

       var project =  await Project.findById(req.body.id);
       project.issue.push(issue._id);
       project.save();

      return res.status(200).send({message : "done"});
    

    }catch(err) {

        console.log("error in adding the data in db",err);
        return res.status(500).send({message : "internal server error"});

    }
  
   

   
}

module.exports.getIssues = async (req,res) => {

    try{

        var project = await Project.findById(req.params.id);
        var issue = project.issue;
         
        var obj = {};

        for (var i of issue) {
             var issue_data = await Issue.findById(i);
             obj[i] = {};
             obj[i].desc = issue_data.desc;
             obj[i].severity = issue_data.severity;
             obj[i].assign = issue_data.assign;
        }
       

        // return res.status(200).json(obj);
        return res.render('issue_view',{Issues : obj});

    }catch(err) {

        console.log("error",err);
        return res.redirect('/');

    }

  


    

}
