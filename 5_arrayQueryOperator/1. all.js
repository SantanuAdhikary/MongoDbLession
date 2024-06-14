
//! 1. Find trainers who know both SQL and MongoDB


//! 2. Find trainers who know both Java and Python


//! 3. Find trainers who know both HTML and CSS


//! 4. Find trainers who know both Node.js and MongoDB


//! 5. Find trainers who know both Python and SQL and have a salary greater than 25000


//! 6. Find trainers who know both JavaScript (`js`) and Node.js (`nodejs`)


//! 7. Find trainers who know both HTML and CSS and have a salary less than or equal to 30000


//! 8. Find trainers who have a nested array containing both `[10, 20]` and `["java", "python"]`























//  1.  db.users.find({ languages: { $all: ["sql", "mongodb"] } });
//  2.  db.users.find({ languages: { $all: ["java", "python"] } });
//  3.  db.users.find({ languages: { $all: ["html", "css"] } });
//  4.  db.users.find({ languages: { $all: ["nodejs", "mongodb"] } });
//  5.  db.users.find({ languages: { $all: ["python", "sql"] }, Salary: { $gt: 25000 } });
//  6.  db.users.find({ languages: { $all: ["js", "nodejs"] } });
//  7.  db.users.find({ languages: { $all: ["html", "css"] }, Salary: { $lte: 30000 } });
//  8.  db.users.find({ nested_Array: { $all: [[10, 20], ["java", "python"]] } });
    