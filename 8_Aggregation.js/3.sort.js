
//! 1. Find the total salary of employees in each department with total salary sorted in descending order:
   
   db.emp.aggregate([
     { $group: { _id: "$deptno", totalSalary: { $sum: "$sal" } } },
     { $sort: { totalSalary: -1 } }
   ]);
   

//! 2. Count the number of managers hired before January 1, 1982, and sort the count in ascending order:
   
   db.emp.aggregate([
     { $match: { job: "manager", hiredate: { $lt: new Date("1982-01-01") } } },
     { $group: { _id: "$job", count: { $sum: 1 } } },
     { $sort: { count: 1 } }
   ]);
   

//! 3. Calculate the average salary of clerks and sort the results by average salary in ascending order:
   
   db.emp.aggregate([
     { $match: { job: "clerk" } },
     { $group: { _id: "$job", averageSalary: { $avg: "$sal" } } },
     { $sort: { averageSalary: 1 } }
   ]);
   

//! 4. Find the total commission earned by salesmen and sort the total commission in descending order:
   
   db.emp.aggregate([
     { $match: { job: "salesman" } },
     { $group: { _id: "$job", totalCommission: { $sum: "$comm" } } },
     { $sort: { totalCommission: -1 } }
   ]);
   

//! 5. Count the number of employees hired after 1981 in each department and sort the count in descending order:
   
   db.emp.aggregate([
     { $match: { hiredate: { $gt: new Date("1981-12-31") } } },
     { $group: { _id: "$deptno", count: { $sum: 1 } } },
     { $sort: { count: -1 } }
   ]);
   
