
//! 1. Group employees by job title and count the number of employees in each job title

   db.emp.aggregate([
     { $group: { _id: "$job", count: { $sum: 1 } } }
   ]);
   

//! 2. Group employees by department number and calculate the average salary in each department:
   
   db.emp.aggregate([
     { $group: { _id: "$deptno", averageSalary: { $avg: "$sal" } } }
   ]);
   

//! 3. Group employees by manager and calculate the total salary managed by each manager:
   
   db.emp.aggregate([
     { $group: { _id: "$mgr", totalSalary: { $sum: "$sal" } } }
   ]);
   

//! 4. Group employees by department number and find the maximum salary in each department:
   
   db.emp.aggregate([
     { $group: { _id: "$deptno", maxSalary: { $max: "$sal" } } }
   ]);
   

//! 5. Group employees by department number and find the minimum salary in each department:
   
   db.emp.aggregate([
     { $group: { _id: "$deptno", minSalary: { $min: "$sal" } } }
   ]);
   

//! 6. Group employees by job title and calculate the total commission for each job title:
   
   db.emp.aggregate([
     { $group: { _id: "$job", totalCommission: { $sum: "$comm" } } }
   ]);
   

//! 7. Group employees by job title and calculate the average commission for each job title:
   
   db.emp.aggregate([
     { $group: { _id: "$job", averageCommission: { $avg: "$comm" } } }
   ]);
   

//! 8. Group employees by hire year and count the number of employees hired each year:
   
   db.emp.aggregate([
     { $group: { _id: { $year: "$hiredate" }, count: { $count: {} } } }
   ]);
   

//! 9. Group employees by department number and calculate the total number of employees in each department:
   
   db.emp.aggregate([
     { $group: { _id: "$deptno", employeeCount: { $sum: 1 } } }
   ]);
   

//! 10. Group employees by job title and find the maximum commission in each job title:
   
   db.emp.aggregate([
     { $group: { _id: "$job", maxCommission: { $max: "$comm" } } }
   ]);
   

//!  11. Find the total salary of employees in department number 30:
      
      db.emp.aggregate([
        { $match: { deptno: 30 } },
        { $group: { _id: "$deptno", totalSalary: { $sum: "$sal" } } }
      ]);
         
//!  12. Count the number of managers who were hired before January 1, 1982:
      
      db.emp.aggregate([
        { $match: { job: "manager", hiredate: { $lt: new Date("1982-01-01") } } },
        { $group: { _id: "$job", count: { $sum: 1 } } }
      ]);
         
//!  13. Calculate the average salary of clerks:
      
      db.emp.aggregate([
        { $match: { job: "clerk" } },
        { $group: { _id: "$job", averageSalary: { $avg: "$sal" } } }
      ]);
        
//!  14. Find the total commission earned by salesmen:
      
      db.emp.aggregate([
        { $match: { job: "salesman" } },
        { $group: { _id: "$job", totalCommission: { $sum: "$comm" } } }
      ]);
      
   
//!  15. Count the number of employees hired after 1981 in each department:
      
      db.emp.aggregate([
        { $match: { hiredate: { $gt: new Date("1981-12-31") } } },
        { $group: { _id: "$deptno", count: { $count: {} } } }
      ]);
      
   