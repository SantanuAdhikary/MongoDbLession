// ! 1.  Find the employees whose job titles are neither "clerk" nor "analyst".
       
db.emp.find(
    {
        job : { $nin :["clerk","analyst"]}
    }
)

// ! 2.  Find the employees who do not belong to departments 10, 20.

db.emp.find(
    {
        deptno : { $nin :[10,20]}
    }
)

// ! 3. Find the employees whose salaries are not either 800, 1600, or 3000.

db.emp.find(
    {
        sal : { $nin : [800,1600,3000]}
    }
)


// ! 4. Find the employees who were not hired on "17-dec-1980", "20-feb-1981", or "23-jan-1982".

db.emp.find(
    {
            hiredate : { $nin : [new Date("17-dec-1980"),new Date("20-feb-1981"), new Date("23-jan-1982")] }
    }
)


// ! 5. Find the employees whose employee numbers (`empno`) are not 7369, 7499, or 7521.

db.emp.find(
    {
        empno: {$nin : [7369,7499,7521]}
    }
)