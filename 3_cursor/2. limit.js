
// ! 1.  Retrieve the first 3 employees from department number 20.


// ! 2. Retrieve the first 3 employees with a salary greater than 1500.


// ! 3.  Retrieve the first 3 employees who have a commission (`comm`) not equal to null.


// ! 4. Retrieve the first 3 employees who have the job title "manager".


// ! 5. Retrieve the first 3 employees hired after "01-jan-1981".

































//1 db.emp.find({ deptno: 20 }).limit(3)
//2 db.emp.find({ sal: { $gt: 1500 } }).limit(3)
//3 db.emp.find({ comm: { $ne: null } }).limit(3)
//4 db.emp.find({ job: "manager" }).limit(3)
//5 db.emp.find({ hiredate: { $gt: new Date("1981-01-01") } }).limit(3)
          