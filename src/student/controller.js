const queries = require("./queries");
const pool = require('../../db');

exports.getStudent = (async( req,res)=>{
    // res.send("hello ajay");
    pool.query(queries.getStudent,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
});


exports.getStudentById = (async( req,res)=>{
    pool.query(queries.getStudentById,[parseInt(req.params.id)],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
});

exports.AddStudent = ((req,res)=>{
    try {
        const {name,email,age,dob} = req.body;
        //check the email is exits.checkIsEmailExits

            pool.query(queries.checkIsEmailExits,[email],(error,result)=>{
                if(error) throw error;
                if(result.rows.length)
                {
                    res.status(200).json("emailId already Exists");
                }else{
                    pool.query(queries.addStudentData,[name,email,age,dob],(error,result)=>{
                        if(error) throw error;
                        res.status(201).json("Student Created Successfully!");
                    });
                }
            });
    } catch (error) {
        
        console.log(error.message);
    }
})

// deleteStudents

exports.deleteStudent = (req,res)=>{
    pool.query(queries.deleteStudents,[parseInt(req.params.id)],(error,result)=>{
        if(error) throw error;
        const noStudentFound = !result.rows.length;
         if(noStudentFound) res.send("Student does not exists in the Database"); 

        // res.status(200).json(`Delete successfully ${result}`)
    })
};


exports.updateStudents = ((req,res)=>{

            const { name } = req.body;

            pool.query(queries.getStudentById,[parseInt(req.params.id)],(error,result)=>{
                    if(error) throw error;
                    if(!result.rows.length)
                    {
                        res.json("This userRecord does not exits");
                    }

                    pool.query(queries.updateStudents,[name,parseInt(req.params.id)],(error,result)=>{
                            if(error) throw error;
                            res.status(200).json("Update the data Successfully");
                    })


                    
            })
});

