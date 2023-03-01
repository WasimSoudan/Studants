const pool =require("../../db")
const query =require('./querses')
const getStudents =(req,res)=>{
    //res.send("using api route from getStudants method")
    pool.query(query.querySelectAllStudents,(error,results)=>{
        if(error) throw error
        res.status(200).json(results.rows)
    })

}
const getStudentsByID =(req,res)=>{
    const id= parseInt(req.params.id)
    pool.query(query.querySelectOnStudents,[id],(error,results)=>{
        if(error) throw error
        res.status(200).json(results.rows)
    })
}
const addStudents =(req,res)=>{
    const {name ,email ,age ,dob} =req.body
    // check if email exists 
    pool.query (query.queryCheckEmail ,[email],(error,results)=>{
        if (results.rows.length){
            res.send("emial found wriet anther one")
        }
    })
    pool.query(query.queryAddStudents,[name,email,age,dob],(error,results)=>{
        if (error) throw  error
        res.status(201).send("Added")
    })
    }
const deleteStudents =(req,res)=>{
        const id= parseInt(req.params.id)
        console.log(id);
        pool.query(query.querySelectOnStudents,[id],(error,results)=>{
            if (error) {throw error}
            if (results.rows.length===0){
                res.send("No student with this ID")
            }
            pool.query (query.queryDeleteStudenst,[id],(error,results)=>{
                    if (error) throw error
                    res.status(201).send("DELETED")
                })
        })
    }
const updateStudents=(req,res)=>{
        const {name ,email ,age ,dob} =req.body
        const id =req.params.id 
        pool.query(query.queryUpdateStudenst,[id ,name,email,age,dob],(error,results)=>{
            if(error) throw error
            res.status(201).send("Updated")    
        })
    }


module.exports ={
    getStudents,
    getStudentsByID,
    addStudents,
    deleteStudents,
    updateStudents
}