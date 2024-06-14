
 //! $ne

 //? it selects the documents where the value of the specified field is not equals to the specified value


  //? syntax 
    { field-name : {
         $ne : value
    } }


//! 1. Find the employees who do not have the job title "manager".

  db.emp.find(
    {
        job : { $ne : "manager" }
    }
  )
//! 2.  Find the employees who are not in department number 20.?

db.emp.find(
    {
        deptno : { $ne : 20}
    }
)

//! 3. Find the employees whose salary is not 1600.
//! 4.  Find the employees who do not have a commission (`comm`) of 300.
//! 5. Find the employees who were not hired on "17-dec-1980".

db.emp.find({

    hiredate : { $ne : new Date("17-dec-1980")}
})



























 db.emp.find({ job: { $ne: "manager" } })
 db.emp.find({ deptno: { $ne: 20 } })
 db.emp.find({ sal: { $ne: 1600 } })
 db.emp.find({ comm: { $ne: 300 } })
 db.emp.find({ hiredate: { $ne: new Date("1980-12-17") } })