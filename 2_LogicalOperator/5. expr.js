

//! 1. Find all employees whose salary is greater than their commission .


//! 2. Find all employees whose salary is at least twice their commission .



































// db.emp.find({
//   $expr: { $gt: ["$sal", "$comm"] }
// })

// db.emp.find({
//        $expr: { $gte: ["$sal", { $multiply: ["$comm", 2] }] }
// })
    


     
    