
//! 1. Find all employees who are either managers or analysts.
     
//! 2. Find all employees who have a salary greater than 3000 or a commission greater than 1000.

//! 3. Find all employees who belong to department number 10 or were hired after 1985.
 
//! 4. Find all employees who have a salary less than 2000 or do not have a commission .
                                                                                                 
//! 5. Find all employees who are either managers or analysts and belong to department number 20.
          
//! 6. Find all employees whose job title is "clerk" or "salesman" and have a salary greater than 1500.
          
//! 7. Find all employees who were hired after 1981 or have a commission greater than 500 and belong to deptno 30.

//! 8. Find all employees who have a salary greater than 2500 or don't have commission and are either analysts or clerks.

//! 9. employees whose job is either "salesman" or "clerk" and were hired before 1982 or have a salary less than 1000.

//! 10. employees who are either managers or presidents and have a salary greater than 3000 or belong to deptno 10.




























// 1. db.emp.find({
//     $or: [
//       { job: "manager" },
//       { job: "analyst" }
//     ]
//   })   
  
// 2. db.emp.find({
//     $or: [
//       { sal: { $gt: 3000 } },
//       { comm: { $gt: 1000 } }
//     ]
//   })
  
// 3. db.emp.find({
//     $or: [
//       { deptno: 10 },
//       { hiredate: { $gt: new Date("1985-01-01") } }
//     ]
//   }) 
  
// 4. db.emp.find({
//        $or: [
//          { sal: { $lt: 2000 } },
//          { comm: { $eq: null } }
//        ]}) 

// 5.   db.emp.find({
//               $and: [
//                 {
//                   $or: [
//                     { job: "manager" },
//                     { job: "analyst" }
//                   ]
//                 },
//                 { deptno: 20 }
//               ]
//             }) 
// 6. db.emp.find({
//               $and: [
//                 {
//                   $or: [
//                     { job: "clerk" },
//                     { job: "salesman" }
//                   ]
//                 },
//                 { sal: { $gt: 1500 } }
//               ]
//             })



// 7. db.emp.find({
//               $and: [
//                 {
//                   $or: [
//                     { hiredate: { $gt: new Date("1981-01-01") } },
//                     { comm: { $gt: 500 } }
//                   ]
//                 },
//                 { deptno: 30 }
//               ] })                 
// 8. db.emp.find({
//               $and: [
//                 {
//                   $or: [
//                     { sal: { $gt: 2500 } },
//                     { comm: { $eq: null } }
//                   ]
//                 },
//                 {
//                   $or: [
//                     { job: "analyst" },
//                     { job: "clerk" }
//                   ]
//                 }
//               ] })
// 9. db.emp.find({
//               $and: [
//                 {
//                   $or: [
//                     { job: "salesman" },
//                     { job: "clerk" }
//                   ]
//                 },
//                 {
//                   $or: [
//                     { hiredate: { $lt: new Date("1982-01-01") } },
//                     { sal: { $lt: 1000 } }
//                   ]
//                 }
//               ]
//             })
           
// 10. db.emp.find({
//               $and: [
//                 {
//                   $or: [
//                     { job: "manager" },
//                     { job: "president" }
//                   ]
//                 },
//                 {
//                   $or: [
//                     { sal: { $gt: 3000 } },
//                     { deptno: 10 }
//                   ]
//                 }
//               ]
//             })
         

