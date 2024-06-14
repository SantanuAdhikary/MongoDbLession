
          //!   $eq 

          //? syntax => { fieldname : { $eq : <value>>} }

         

//! 1.  Find the employee with empno 7839.

   db.emp.findOne(
    {
        empno:7839
    }
   )

   db.emp.findOne(
    {
        empno : { $eq :7839 }
    }
   )

//! 2.  Find the employee whose job title is manager.

  db.emp.find(
    {
        job :"manager"
    }
  )

  db.emp.find(
    {
        job: { $eq: "manager"}
    }
  )

//! 3.  Find the employee with the name allen.

 db.emp.findOne(
  {
    ename : { $eq : "allen"}
  }
 )

//! 4.  Find the employees who belong to department number 30.

 db.emp.find(
  {
    deptno : { $eq :30}
  }
 )

//! 5.  Find the employee with a salary of 1100.

  db.emp.find(
    {
      sal : {$eq:1100}
    }
  )
//! 6.  Find the employee whose commission is 500. 

 db.emp.find(
  {
    comm : {$eq : 500}
  }
 )
//! 7.  Find the employee who reports to manager with empno 7839.

db.emp.find(
  {
    mgr : {$eq : 7839}
  }
)
//! 8.  Find the employees hired on 03-dec-1981.
//! 9.  Find the employee with empno 7654.
//! 10. Find the employee whose name is jones.

























// 1.  db.emp.find({ empno: { $eq: 7839 } })
// 2.  db.emp.find({ job: { $eq: "manager" } })
// 3.  db.emp.find({ ename: { $eq: "allen" } })     
// 4.  db.emp.find({ deptno: { $eq: 30 } })     
// 5.   db.emp.find({ sal: { $eq: 1100 } })    
// 6.  db.emp.find({ comm: { $eq: 500 } })
// 7.  db.emp.find({ mgr: { $eq: 7839 } })    
// 8.  db.emp.find({ hiredate: { $eq: new Date("1981-12-03") } })   
// 9.  db.emp.find({ empno: { $eq: 7654 } })  
// 10.  db.emp.find({ ename: { $eq: "jones" } })

      