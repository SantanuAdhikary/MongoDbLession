

                       //! $gt 



//? syntax : 

  { fieldname : {$gt : value } }



//! 1. Find the employees whose salary is greater than 3000.

db.emp.find(
     {
          sal : { $gt : 3000}
     }
)
 
//! 2. Find the employees who were hired after "01-jan-1982".

db.emp.find(
     {
          hiredate : {$gt : new Date("01-jan-1982")}
     }
)
//! 3. Find the employees whose commission (`comm`) is greater than 500.

 db.emp.find(
     {
         comm: {$gt:500 } 
     }
 )
//! 4. Find the employees whose employee number (`empno`) is greater than 7800.

 db.emp.find(
     {
          empno : { $gt : 7800}
     }
 )
//! 5.  Find the employees who have worked for more than 20 years (assuming the current year is 2024).





























     db.emp.find({ sal: { $gt: 3000 } })
     db.emp.find({ hiredate: { $gt: new Date("1982-01-01") } })
     db.emp.find({ comm: { $gt: 500 } })
     db.emp.find({ empno: { $gt: 7800 } })
     db.emp.find({ hiredate: { $gt: new Date("2004-01-01") } })
   