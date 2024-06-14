
//! 1. Skip the first 5 employees and retrieve the next 5 employees.


//! 2. Skip the first 10 employees and retrieve the next 5 employees who belong to deptno 30.


//! 3. Skip the first 3 employees and retrieve next 5 employees who have a commission greater than 0.


























//    1.  db.emp.find().skip(5).limit(5)
//    2.  db.emp.find({ deptno: 30 }).skip(10).limit(5)
//    3.  db.emp.find({ comm: { $gt: 0 } }).skip(3).limit(5)