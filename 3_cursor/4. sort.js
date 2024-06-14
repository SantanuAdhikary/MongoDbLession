
//! 1. Retrieve all employees sorted by their salary (`sal`) in descending order.


//! 2. Retrieve all employees sorted by their hire date (`hiredate`) in ascending order.


//! 3. Retrieve all employees sorted by their job title (`job`) in alphabetical order.


//! 4. Retrieve employees sorted by their deptno in asc order and then by their salary in desc order.


//! 5. Retrieve all employees sorted by their manager's employee number (`mgr`) in ascending order.































//  1.    db.emp.find().sort({ sal: -1 })
//  2.    db.emp.find().sort({ hiredate: 1 })
//  3.    db.emp.find().sort({ job: 1 })
//  4.    db.emp.find().sort({ deptno: 1, sal: -1 })
//  5.    db.emp.find().sort({ mgr: 1 })
    


