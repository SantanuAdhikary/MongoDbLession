
//! 1. Find all employees who are managers
   db.emp.aggregate([
     { $match: { job: "manager" } }
   ]);

//! 2. Find all employees who belong to department number 30
   db.emp.aggregate([
     { $match: { deptno: 30 } }
   ]);

//! 3. Find all employees who were hired before January 1, 1982
   db.emp.aggregate([
     { $match: { hiredate: { $lt: new Date("1982-01-01") } } }
   ]);
   
//! 4. Find all employees with a salary greater than 2000
   db.emp.aggregate([
     { $match: { sal: { $gt: 2000 } } }
   ]);
   
//! 5. Find all employees with a commission (comm) greater than 100
   db.emp.aggregate([
     { $match: { comm: { $gt: 100 } } }
   ]);
   

//! 6. Find all employees who are either analysts or clerks
   db.emp.aggregate([
     { $match: { job: { $in: ["analyst", "clerk"] } } }
   ]);
   
//! 7. Find all employees who report to manager with empno 7698
   db.emp.aggregate([
     { $match: { mgr: 7698 } }
   ]);
   
//! 8. Find all employees who have no commission
   db.emp.aggregate([
     { $match: { comm: null } }
   ]);
   
//! 9. Find all employees who belong to department number 20 and have a salary greater than 2500
   db.emp.aggregate([
     { $match: { deptno: 20, sal: { $gt: 2500 } } }
   ]);
   
//! 10. Find all employees who are not salesmen
   db.emp.aggregate([
     { $match: { job: { $ne: "salesman" } } }
   ]);
   
   