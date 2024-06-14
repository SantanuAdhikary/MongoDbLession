
//! 1. Retrieve only the employee name and job title for all employees:
   
   db.emp.aggregate([
     { $project: { ename: 1, job: 1, _id: 0 } }
   ]);
   

//! 2. Show employee names and their salaries, but exclude the `_id` field:
   
   db.emp.aggregate([
     { $project: { ename: 1, sal: 1, _id: 0 } }
   ]);
   

//! 3. Calculate a new field  `annualSalary` , and show only the employee name and `annualSalary`:
   
   db.emp.aggregate([
     { $project: { ename: 1, annualSalary: { $multiply: ["$sal", 12] }, _id: 0 } }
   ]);
      

//! 4. Display employee names and  `totalCompensation` which is the sum of `sal` and `comm`:
   
   db.emp.aggregate([
     { $project: { ename: 1, totalCompensation: { $add: ["$sal", "$comm"] }, _id: 0 } }
   ]);

   

//! 5. Retrieve the names and job titles of employees who are managers:
      
      db.emp.aggregate([
        { $match: { job: "manager" } },
        { $project: { ename: 1, job: 1, _id: 0 } }
      ]);
     
   
//! 6. Find employees hired after Jan 1, 1981, and display their names and hire dates :
      
      db.emp.aggregate([
        { $match: { hiredate: { $gt: new Date("1981-01-01") } } },
        { $project: { ename: 1, hiredate: 1, _id: 0 } }
      ]);
     
   
//! 7. Retrieve the names and total compensation (sum of salary and commission) of salesmen:
      
      db.emp.aggregate([
        { $match: { job: "salesman" } },
        { $project: { ename: 1, totalCompensation: { $add: ["$sal", "$comm"] }, _id: 0 } }
      ]);
     
      
//! 8. Calculate the average salary of clerks and display the job title and average salary:
       
         db.emp.aggregate([
           { $match: { job: "clerk" } },
           { $group: { _id: "$job", averageSalary: { $avg: "$sal" } } },
           { $project: { _id: 0, job: "$_id", averageSalary: 1 } }
         ]);
         

//! 9.  Find the total commission earned by salesmen in each department and display
//!     the department number and total commission:
       
         db.emp.aggregate([
           { $match: { job: "salesman", comm: { $ne: null } } },
           { $group: { _id: "$deptno", totalCommission: { $sum: "$comm" } } },
           { $project: { _id: 0, deptno: "$_id", totalCommission: 1 } }
         ]);
         
         
      
      