
//! 1. Update the salary of the trainer named "Rohit" to 65000
   db.users.updateOne({ trainer: "Rohit" }, { $set: { Salary: 65000 } });
   

//! 2. Update the branch of the trainer named "Virat" to "Hyderabad"
   db.users.updateOne({ trainer: "Virat" }, { $set: { branch: "Hyderabad" } });
  

//! 3. Update the duration of training for the trainer named "Sreyas" to "6-Months":
   db.users.updateOne({ trainer: "Sreyas" }, { $set: { duration: "6-Months" } });
   

//! 4. Set the gender of the trainer named "Dhawan" to "male"
   db.users.updateOne({ trainer: "Dhawan" }, { $set: { gender: "male" } });
 

//! 5. Update the city of the trainer named "Mandana" to "Mumbai"
   db.users.updateOne({ trainer: "Mandana" }, { $set: { city: "Mumbai" } });
 


