
1. Skip the first 5 highest-paid employees and get the next 5.

   
    db.emp.aggregate([
      { $sort: { sal: -1 } },
      { $skip: 5 },
      { $limit: 5 }
    ]);
    

2. Retrieve employees who joined after the first 10 employees based on their hire date.

   
    db.emp.aggregate([
      { $sort: { hiredate: 1 } },
      { $skip: 10 }
    ]);
    

3. Get employees from department number 30, skipping the first 3 and returning the next 5.

   
    db.emp.aggregate([
      { $match: { deptno: 30 } },
      { $skip: 3 },
      { $limit: 5 }
    ]);
    
