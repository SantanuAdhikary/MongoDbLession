
//! 1. Update the salary of all trainers in the Mumbai branch to 70000
   db.users.updateMany({ branch: "Mumbai" }, { $set: { Salary: 70000 } });
   

//! 2. Update the duration of training to "6-Months" for all trainers in the Bangalore branch:
   
   db.users.updateMany({ branch: "bangalore" }, { $set: { duration: "6-Months" } });   

//! 3. Update the city to "Pune" for all trainers whose branch is "kolkata":
   db.users.updateMany({ branch: "kolkata" }, { $set: { city: "Pune" } });
   

//! 4. Set a new field "experience" to "5 years" for all trainers who have a duration of "4-Months"
    db.users.updateMany({ duration: "4-Months" }, { $set: { experience: "5 years" } });
    


    