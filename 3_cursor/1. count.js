
// ! 1.  How many employees have the job title "salesman"?


// ! 2. How many employees belong to department number 30?


// ! 3. How many employees have a salary greater than 2000?



 const http = require("http");

 const server = http.createServer((req,res)=>{

 })

 server.listen(5000,err=>{
    if(err) throw err;
    console.log('app is running');
 })



















    //  db.emp.find({ job: "salesman" }).count()
    //  db.emp.find({ deptno: 30 }).count()
    //  db.emp.find({ sal: { $gt: 2000 } }).count()
     

