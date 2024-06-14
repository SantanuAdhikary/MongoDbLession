
//! $lte 

//?  {fieldname : {$lte : value}}




// ! 1. Find the employees whose salary is less than or equal to 1100.

db.emp.find(
      {
          sal : { $lte : 1100}  
      }
)


// ! 2.  Find the employees who were hired on or before "01-jan-1982".

db.emp.find(
      {
           hiredate : { $lte : new Date("01-jan-1982") } 
      }
)


// ! 3. Find the employees whose commission (`comm`) is less than or equal to 500.

db.emp.find(
      {
            comm: {$lte : 500}
      }
)


// ! 4. Find the employees whose employee number (`empno`) is less than or equal to 7600.

db.emp.find(
      {
          empno : {$lte : 7600}  
      }
)


// ! 5. Find the employees whose department number (`deptno`) is less than or equal to 20.

db.emp.find(
      {
            deptno:{$lte : 20}
      }
)


















db.emp.find({ sal: { $lte: 1000 } })
      db.emp.find({ hiredate: { $lte: new Date("1982-01-01") } })
     db.emp.find({ comm: { $lte: 500 } })
     db.emp.find({ empno: { $lte: 7600 } })
     db.emp.find({ deptno: { $lte: 20 } })
     