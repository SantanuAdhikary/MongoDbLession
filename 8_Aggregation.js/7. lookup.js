
//! 1. display empno , ename , deptname and location 

    db.emp.aggregate([
      {
        $lookup: {
          from: "dept",
          localField: "deptno",
          foreignField: "deptno",
          as: "department"
        }
      },
     
      {
        $project: {
          _id: 0,
          empno: 1,
          ename: 1,
          "department.dname": 1,
          "department.loc": 1
        }
      }
    ]);

//! 2. emp name, dept location who are working in new york and dallas

    db.emp.aggregate([
      {
        $lookup: {
          from: "dept",
          localField: "deptno",
          foreignField: "deptno",
          as: "department"
        }
      },
      {
        $unwind: "$department"
      },
      {
        $match: {
          "department.loc": { $in: ["new york", "dallas"] }
        }
      },
      {
        $project: {
          _id: 0,
          ename: 1,
          deptLocation: "$department.loc"
        }
      }
    ]);

  //! 3. WAQTD emp name, Manager name of that emp

    db.emp.aggregate([
      {
        $lookup: {
          from: "emp",
          localField: "mgr",
          foreignField: "empno",
          as: "manager"
        }
      },
      {
        $unwind :"$manager"
      },
      {
        $project: {
          _id: 0,
          empName: "$ename",
          managerName:  "$manager.ename"
        }

      }
    ]);

// ! 4. WAQTD dept name and salary of all the emp who are working in accounting

      db.emp.aggregate([
        {
          $lookup: {
            from: "dept",
            localField: "deptno",
            foreignField: "deptno",
            as: "department"
          }
        },
        {
          $unwind: "$department"
        },
        {
          $match: {
            "department.dname": "accounting"
          }
        },
        {
          $project: {
            _id: 0,
            deptName: "$department.dname",
            salary: "$sal"
          }
        }
      ]);

//! 5.  write a query to find the manager of miller's manager

db.emp.aggregate([
  // Match documents for Miller
  {
    $match: {
      ename: "miller"
    }
  },
  // Lookup to get Miller's manager
  {
    $lookup: {
      from: "emp",
      localField: "mgr",
      foreignField: "empno",
      as: "millerManager"
    }
  },
  // Unwind the array created by $lookup (since it will have exactly one element)
  {
    $unwind: "$millerManager"
  },
  // Lookup to get Miller's manager's manager
  {
    $lookup: {
      from: "emp",
      localField: "millerManager.mgr",
      foreignField: "empno",
      as: "millerManagerManager"
    }
  },
  // Unwind the array created by $lookup (since it will have exactly one element)
  {
    $unwind: "$millerManagerManager"
  },
  // Project the desired fields
  {
    $project: {
      _id: 0,
      Ename: "$ename",
      MillerManager: "$millerManager.ename",
      MillerManagerManager: "$millerManagerManager.ename"
    }
  }
]);

    