
                 //! $lt 

//? syntax:  { fieldname : {$lt : value }}


// ! 1.  Find the employees whose salary is less than 1500.

db.emp.find(
     {
          sal : { $lt : 1500}
     }
)


// ! 2.  Find the employees who were hired before "01-jan-1981".

db.emp.find(
     {
         hiredate : { $lt : new Date("01-jan-1981")} 
     }
)

// ! 3.  Find the employees whose commission (`comm`) is less than 500.

db.emp.find(
     {
          comm : { $lt :500}
     }
)


// ! 4.  Find the employees whose employee number (`empno`) is less than 7500.

db.emp.find(
     {
          empno : { $lt : 7500}
     }
)

// ! 5.  Find the employees whose department number (`deptno`) is less than 20.

db.emp.find(
     {
          deptno : { $lt : 20}
     }
)




















db.emp.find({ sal: { $lt: 1500 } })
     db.emp.find({ hiredate: { $lt: new Date("1981-01-01") } })
     db.emp.find({ comm: { $lt: 500 } })
     db.emp.find({ empno: { $lt: 7500 } })
     db.emp.find({ deptno: { $lt: 20 } })