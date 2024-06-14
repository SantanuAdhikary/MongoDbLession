
//! 1. Remove the "gender" field from the document where the trainer's name is "Rohit"
   db.users.updateOne({ trainer: "Rohit" }, { $unset: { gender: "" } });
   

//! 2. Remove the "city" field from the document where the branch is "bangalore"
   db.users.updateMany({ branch: "bangalore" }, { $unset: { city: "" } });
   

//! 3. Remove the "duration" field from the document where the salary is greater than 50000
   db.users.updateMany({ Salary: { $gt: 50000 } }, { $unset: { duration: "" } });
  

//! 4. Remove the "nested_Array" field from the document where the trainer knows Python
   db.users.updateMany({ languages: "python" }, { $unset: { nested_Array: "" } });
   
//! 5. Remove the "branch" field from the document where the gender is "female"
   db.users.updateMany({ gender: "female" }, { $unset: { branch: "" } });
  
