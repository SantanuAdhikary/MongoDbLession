
//! 1. Find the count of all employees who have a commission .

//! 2. Find the count of all employees who do not have a manager .

//! 3. Find the count of all employees who have a department Number.

//! 4. Find all employees who have a commission and their salary is greater than 1500.

//! 5. Find all employees who do not have a manager and belong to department number 10.

//! 6. Find all employees who have a hire date and their job title is "analyst".






































// 1. db.emp.find({
//   comm: { $exists: true }
// }).count()
     
// 2. db.emp.find({
//        mgr: { $exists: false }
//      }).count()
     
// 3. db.emp.find({
//        deptno: { $exists: true }
//      }).count()
          
// 4. db.emp.find({
//             comm: { $exists: true },
//             sal: { $gt: 1500 }
//           }).count()
          
// 5. db.emp.find({
//             mgr: { $exists: false },
//             deptno: 10
//           })
        
// 6. db.emp.find({
//             hiredate: { $exists: true },
//             job: "analyst"
//           })

