

//! 1. Find all employees whose job title is "manager" and belong to department number 20.


//! 2. Find all employees whose salary is greater than 2500 and have a commission (`comm`).


//! 3. Find all employees whose job title is "analyst" and have a salary less than or equal to 3000.


//! 4. Find all employees who were hired in 1981 and belong to department number 30.

//! 5. Find all employees who have a salary greater than 2000 and belong to either department number 10 or 20.


//! 6. Find all employees who have a commission (`comm`) and were hired after 1985.


//! 7. Find all employees who are not clerks and do not have a commission (`comm`).


//! 8. Find all employees who have a salary between 1500 and 3000 (inclusive).


//! 9. Find all employees who are not managers and were hired before 1985.
































// 1. db.emp.find({
//   $and: [
//     { job: "manager" },
//     { deptno: 20 }
//   ]
// })

// 2. db.emp.find({
//        $and: [
//          { sal: { $gt: 2500 } },
//          { comm: { $ne: null } }
//        ]
//      })

3.   db.emp.find({
       $and: [
         { job: "analyst" },
         { sal: { $lte: 3000 } }
       ]
     })

// 4.  db.emp.find({
//        $and: [
//          { hiredate: { $gte: new Date("1981-01-01"), $lt: new Date("1982-01-01") } },
//          { deptno: 30 }
//        ]
//      })

// 5.    db.emp.find({
//        $and: [
//          { sal: { $gt: 2000 } },
//          { deptno: { $in: [10, 20] } }
//        ]
//      })

6.     db.emp.find({
       $and: [
         { comm: { $ne: null } },
         { hiredate: { $gte: new Date("1986-01-01") } }
       ]
     })

// 7.    db.emp.find({
//        $and: [
//          { job: { $ne: "clerk" } },
//          { comm: { $eq: null } }
//        ]
//      })

// 8.     db.emp.find({
//        $and: [
//          { sal: { $gte: 1500 } },
//          { sal: { $lte: 3000 } }
//        ]
//      })

// 9.     db.emp.find({
//         $and: [
//           { job: { $ne: "manager" } },
//           { hiredate: { $lt: new Date("1985-01-01") } }
//         ]
//       })
