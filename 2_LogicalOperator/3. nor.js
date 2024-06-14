


//! 1. Find all employees who are neither managers nor analysts.


//! 2. Find all employees who do not have a salary greater than 3000 and do not have a commission greater than 1000.


//! 3. Find all employees who neither belong to department number 10 nor were hired after 1985.



//! 4. Find all employees who are neither clerks nor salesmen and do not have a commission (`comm`) greater than 500.



//! 5. Find all employees who do not have a salary less than 2000 and do not belong to department number 20.































    // 1. db.emp.find({
    // $nor: [
    //     { job: "manager" },
    //     { job: "analyst" }
    // ]
    // })
    
    // 2. db.emp.find({
    //    $nor: [
    //      { sal: { $gt: 3000 } },
    //      { comm: { $gt: 1000 } }
    //    ]
    //  })

    //  3. db.emp.find({
    //    $nor: [
    //      { deptno: 10 },
    //      { hiredate: { $gt: new Date("1985-01-01") } }
    //    ]
    //  })

    // 4. db.emp.find({
    //    $nor: [
    //      { job: "clerk" },
    //      { job: "salesman" },
    //      { comm: { $gt: 500 } }
    //    ]
    //  })

    // 5. db.emp.find({
    //    $nor: [
    //      { sal: { $lt: 2000 } },
    //      { deptno: 20 }
    //    ]
    //  })
     