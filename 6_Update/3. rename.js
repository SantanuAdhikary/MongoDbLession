
//! 1. Rename the "Salary" field to "Income" for the document where the trainer's name is "Rohit"
   db.users.updateOne({ trainer: "Rohit" }, { $rename: { Salary: "Income" } });
  

//! 2. Rename the "city" field to "location" for the document where the branch is "bangalore":
   db.users.updateOne({ branch: "bangalore" }, { $rename: { city: "location" } });
   

//! 3. Rename the "duration" field to "course_duration" for the document where the salary is greater than 50000
   db.users.updateOne({ Salary: { $gt: 50000 } }, { $rename: { duration: "course_duration" } });


//! 4. Rename the "languages" field to "skills" for the document where the trainer knows Python
   db.users.updateOne({ languages: "python" }, { $rename: { languages: "skills" } });
   
//! 5. Rename the "branch" field to "office" for the document where the gender is "female"
   db.users.updateOne({ gender: "female" }, { $rename: { branch: "office" } });
  
