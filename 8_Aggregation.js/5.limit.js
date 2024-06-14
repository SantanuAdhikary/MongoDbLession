
//! 1. Get the top 5 highest-paid employees.
   
    db.emp.aggregate([
      { $sort: { sal: -1 } },
      { $limit: 5 }
    ]);
    
//! 2. Retrieve the first 5 employees who joined the company.
   
    db.emp.aggregate([
      { $sort: { hiredate: 1 } },
      { $limit: 5 }
    ]);
    
//! 3. Get the first 5 managers in the company.
   
    db.emp.aggregate([
      { $match: { job: "manager" } },
      { $limit: 5 }
    ]);
    
//! 4. Fetch 5 employees from department number 30.
    
    db.emp.aggregate([
      { $match: { deptno: 30 } },
      { $limit: 5 }
    ]);
    
//! 5. Get the first 5 employees with a non-null commission.
    
    db.emp.aggregate([
      { $match: { comm: { $ne: null } } },
     
      
      { $limit: 1 },
      {
        $project: {
            ename:1,
            _id:0,
            comm:1
        }
      },
    ]);
    
    
