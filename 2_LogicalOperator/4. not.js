
//! 1. Find all employees who do not have a salary greater than 2500.


//! 2. Find all employees who do not belong to department number 30.


//! 3. Find all employees whose hire date is not after January 1, 1985.





























// 1. db.emp.find({
//   sal: { $not: { $gt: 2500 } }
// })

// 2. db.emp.find({
//   deptno: { $not: { $eq: 30 } }
// })


//3. db.emp.find({
//        hiredate: { $not: { $gt: new Date("1985-01-01") } }
//      })
    

