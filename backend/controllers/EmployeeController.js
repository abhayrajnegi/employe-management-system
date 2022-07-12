
const Employee = require('../models/Employee');
const User = require('../models/User');
const  auth = require('../routes/auth');

const index = async (req, res) => {
try {
    const employees = await Employee.find({ user:req.user.user.id});
    res.json(employees);
    
} catch (error) {
    console.log(error);
    
}


}


const store = async (req, res) => {
    try {
        let newEmployee = new Employee({
            name: req.body.name,
            designation: req.body.designation,
            user:req.user.user.id,
            email: req.body.email,
            phone: req.body.phone,
            salary: req.body.salary, 
            
        })
            
        const employee = await newEmployee.save();
        res.json(employee);
    }

    catch(err){
        console.log(err);

    }

}

const show = async (req, res) => {
   
   await Employee.findById(req.params.id).then(response => {
        res.json({response})
    }).catch(err => {
        res.json({error:'An error Occurred'})
    })
}


const update = async (req, res) => {
    let updatedData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    salary: req.body.salary,

    }
    await Employee.findByIdAndUpdate(req.params.id, updatedData).then(response => {
        res.json({message:'Employee Updated Successfully'})
    }).catch(err => {
        res.json({error:'An error Occured'})
    })
}

const destroy = async (req, res,next) => {
 let employee = await Employee.findById(req.params.id);
 if(!employee) {
     res.json({error:'Employee does not exist'})
 }
 else {
     await Employee.findByIdAndDelete(req.params.id).then(response => {
         res.json({message:'Employee Deleted Successfully'})
     }).catch(err => {
         res.json({error:'An error Occured'})
     })
 }
}

module.exports = {
    index,show,store,update,destroy
}