

//!  $gte 

//? syntax :  { fieldname : { $gte : value}}

//! 1.  Find the employees whose salary is greater than or equal to 3000.

db.emp.find(
    {
        sal : { $gte : 3000}
    }
)

//! 2.  Find the employees who were hired on or after "01-jan-1981".

db.emp.find(
    {
        hiredate : { $gte : new Date("01-jan-1981")}
    }
)


//! 3.  Find the employees whose commission (`comm`) is greater than or equal to 300.

db.emp.find(
    {
        comm : { $gte : 300}
    }
)




























db.emp.find({ sal: { $gte: 2500 } })
 db.emp.find({ hiredate: { $gte: new Date("1981-01-01") } })
 db.emp.find({ comm: { $gte: 300 } })