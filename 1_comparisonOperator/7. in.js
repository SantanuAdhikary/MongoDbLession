
//! $in 


//? syntax:  { fieldname : { $in : [value1,value2....,value n]}}


// ! 1.  Find the employees whose job titles are either "clerk" or "analyst".

db.emp.find(
        {
                job : { $in: ["clerk","analyst"]}
        }
)


// ! 2.  Find the employees who belong to departments 10, 20.

db.emp.find(
        {
              deptno : {$in :[10,20]}  
        }
)


// ! 3. Find the employees whose salaries are either 800, 1600, or 3000.

db.emp.find(
        {
                sal : { $in : [800,1600,3000]}
        }
)


// ! 4. Find the employees who were hired on "17-dec-1980", "20-feb-1981", or "23-jan-1982".

db.emp.find(
        {
                hiredate : { $in : [new Date("17-dec-1980"),new Date("20-feb-1981"), new Date("23-jan-1982")] }
        }
)

// ! 5. Find the employees whose employee numbers (`empno`) are 7369, 7499, or 7521.

db.emp.find(
        {
              empno : {$in : [7369,7499,7521]}  
        }
)


























db.emp.find({ job: { $in: ["clerk", "analyst"] } })
     db.emp.find({ deptno: { $in: [10, 20, 30] } })
     db.emp.find({ sal: { $in: [800, 1600, 3000] } })
     db.emp.find({ hiredate:
             { $in: [new Date("1980-12-17"), new Date("1981-02-20"), new Date("1982-01-23")]                
              } })
     db.emp.find({ empno: { $in: [7369, 7499, 7521] } })
     