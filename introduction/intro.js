
                                //!  MongoDB

//? It is open source, cross platform ,document oriented, noSQL Database Management System.

//! open source : 
     //?  Open source software is software with source code that anyone can inspect, modify, and enhance. 


//! Data : 
   //? Data is a raw fact that describes peroperty of object. 

   //! types of data 

   //! 1. Structured Data : 
      //?  organized and formatted in a way that computer can easily search.
            //? ex:  databases, spreadsheets, tables
     
   //!  2. Unstructured Data : 
       //? data those are not organized in a predefined manner. 

        //? ex: text, video , emails 


//! Object : 
  //? anything that has physical existance  

//! Database : 
  //? it is a place where data are stored in systematic and organized manner. 


//! Types of Database 

 //?  1. Relational Database => MySQL , Oracle
 //?  2. NoSQL Database => MonogoDB , Redis ,  Cassandra 
 //?  3. Object Oriented Database  => ObjectDB , db4o
 //?  4. Graph Database => Amazon Neptune , Neo4j


           SQL                                         NoSQL

1.   It supports table with row and column.        1. It supports documents and collections.
2.   here we use predefined/fixed/ static schema   2. here we use dynamic schema
3.   vertically scalable                           3. Horizontally scalable
4.   it follow ACID property                       4. It follows BASE property



//! Scalling:
  //  alter the size of a system In the scaling process, we either compress or expand the system to meet the expected needs. 

//! Vertical Scaling 
  //  Vertical scaling involves increasing the capacity of a single server by adding more resources, such as CPU, RAM, or storage.
  //  This improves the performance and capacity of the existing server without adding additional servers.
   

//!   Horizontal Scaling (Scaling Out)
  //  Horizontal scaling involves adding more servers or nodes to a system and distributing the data and workload across multiple machines. 
  //  In MongoDB, this is typically achieved through sharding, which partitions the data across a cluster of servers.
   



                        //!  ACID Property

//? A : Atomicity   :  the entire trasaction takes places at once or does not happen at all 
//? C : Consistency : the database must be consistent before and after the transaction
//? I : Isolation : Multiple Transaction occur independently without interference
//? D : Durability  : Durability guarantees that once the transaction completes and changes are written to the database, they are persisted. This ensures that data within the system will persist even in the case of system failures like crashes or power outages.


//  chitra --> rajan 

//  5000        4000  ==> total : 9000

//  1000       


//  4000        5000  ==> total : 9000

                            //! BASE Property

//? BA : Basic Availablity => its giving the gurantee of the data availabilty even the system fails also . 

//? S : soft state => The state of the system may change over time, even without input (due to eventual consistency). The system doesn't have to be always consistent, which means that the data can change even without any new data being input

//? E : eventual constistent => The system will eventually become consistent once it stops receiving input. This means that, given enough time, all updates will propagate through the system and all nodes will eventually have the same data.



//    {
//       "name":"anand",
//       "age":21,
//       "usn":"1AM2024"
//    }

  
//!               JSON

//?  1.  json stands for JavaScript Object Notation
//?  2. it is a format for storing and transfering the data. 
//?  3. it is lightweight 


//!  Data Types Of JSON 

   1.  String 
   2.  Number
   3.  Boolean
   4.  Array
   5.  Object
   6.  null

   example : 

   {
    "userName" : "Chitra",
    "mobileNumber": 89123456788,
    "isStudent" : true,
    "skills" : ["mongodb","nodejs","expressjs"],
    "address" :  {
          "state":"karnataka",
          "city":"bangalore",
          "pin":546767
    },

    "isNullable": null
  }


                    //!  array of objects

  [
    {

    },
    {

    },
    {
          
    }
  ]

  //? example

    [{
      "userName" : "Chitra",
      "mobileNumber": 89123456788,
      "isStudent" : true,
      "skills" : ["mongodb","nodejs","expressjs"],
      "address" :  {
            "state":"karnataka",
            "city":"bangalore",
            "pin":546767
      },
      "isNullable": null
    },
    {
      "userName" : "Aditya",
      "mobileNumber": 891897788,
      "isStudent" : false,
      "skills" : ["mongodb","reactjs","expressjs"],
      "address" :  {
            "state":"wb",
            "city":"kolkata",
            "pin":546767
      },
      "isNullable": null
    }]



      //! how to the mongod version ?
            //?  mongod --version 
      //! how to know the mongosh version ? 
            //?  mongosh --version 
     //! connect shell with mongodb compass 
           //?  mongosh
    //! how to show the present databases 
          //? show dbs
    //! how to create database 
          //? use databae-name
         //  TODO:  if you are not creating any collection then the database won't be shown
   //! how to create collection 
        //?  db.createCollection("collectionname")
    //! how to show the collections in database 
        //?  show collections
    //! how to drop/ delete collection 
        //? db.collection-name.drop()
    //! how to drop/ delete the database 
       //? db.dropDatabase()




                                 //!  insert data into collections 

        //! insert one data

       //!  method name :  insertOne()
       
       //? syntax : 

        db.<collectionname>.insertOne( {

          field1:value1,
          field2:value2,
          field3:value3,
        });

        //? example : 

        db.users.insertOne(
          {
            name:"rohit",
            phno:1234567890,
            isPlayer:true
          }
        )

        db.users.insertOne(
          {
            name:"virat",
            phno:9876543210,
            isPlayer:true
           }
        )


        //! insert more than one data 
      
        //! method name : insertMany()

        //? syntax 

          
          db.<collectionname>.insertMany([ 
            {

            field1:value1,
            field2:value2,
            field3:value3,
          },
          {
              field:value
          },
          {
            field:value
          }
        ]);

        //? example

        db.users.insertMany([
          {
           name:"pant",
            phno:6572367,
            isPlayer:true
          }
          ,
          {
            name:"sreyash",
            phno:89872367,
            isPlayer:true
          }]
        )


        //! when should we use Quotes 

        db.users.insertOne(
          {
            name:"bumrah",
            isPlayer:true,
            "team name":"India"
          }
        )
        
        // TODO: mongodb is case-sensitive

      

  //!======================================================================================

        //! Read Operation 


      //! methodname:  find()  => used to fetch / find all the data

      //? syntax :    db.collectionName.find({filter_condition})

      //? example: 

        db.users.find()


        //! find one data 

        //! method name : findOne()

        //? syntax:   db.collectionName.findOne({filer_condition})

        db.users.findOne()

        //! 1. select the data whose name is jaddu
        
        //? in sql 

            // select * 
            // from users
            // where name="virat"

        db.users.findOne(
          {
            name:"jaddu"
          }
        )
       

        db.users.insertMany(
          [
            {
             name:"srk",
              phno:6572367,
              isPlayer:false
            }
            ,
            {
              name:"salman",
              phno:89872367,
              isPlayer:false
            }]
        )

        //! 2. find the data who are not a player 

        db.users.find(
          {
            isPlayer:false
          }
        )

        //! 3. display the name and phno who are player 

        //TODO:  notes :  here we need projection  findOne({filter_condition},{projection})

        select name,phno
        from users
        where isPlayer=true

        db.users.find(
          {
            isPlayer:true
          },
          {
            name:1,
            isPlayer:1,
            _id:0
          }
        )

       
      