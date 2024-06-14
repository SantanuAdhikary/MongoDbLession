

db.emp.insertMany(
[{
    empno: 7369,
    ename: "smith",
    job: "clerk",
    mgr: 7902,
    hiredate: new Date("17-dec-1980"),
    sal: 800,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7499,
    ename: "allen",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("20-feb-1981"),
    sal: 1600,
    comm: 300,
    deptno: 30,
  },
  {
    empno: 7521,
    ename: "ward",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("22-feb-1981"),
    sal: 1250,
    comm: 500,
    deptno: 30,
  },
  {
    empno: 7566,
    ename: "jones",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("02-apr-1981"),
    sal: 2975,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7654,
    ename: "martin",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("28-sep-1981"),
    sal: 1250,
    comm: 1400,
    deptno: 30,
  },
  {
    empno: 7698,
    ename: "blake",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("01-may-1981"),
    sal: 2850,
    comm: null,
    deptno: 30,
  },
  {
    empno: 7782,
    ename: "clark",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("09-jun-1981"),
    sal: 2450,
    comm: null,
    deptno: 10,
  },
  {
    empno: 7788,
    ename: "scott",
    job: "analyst",
    mgr: 7566,
    hiredate: new Date("19-apr-1987"),
    sal: 3000,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7839,
    ename: "king",
    job: "president",
    mgr: null,
    hiredate: new Date("17-nov-1981"),
    sal: 5000,
    comm: null,
    deptno: 10,
  },
  {
    empno: 7844,
    ename: "turner",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("08-sep-1981"),
    sal: 1500,
    comm: 0,
    deptno: 30,
  },
  {
    empno: 7876,
    ename: "adams",
    job: "clerk",
    mgr: 7788,
    hiredate: new Date("23-may-1987"),
    sal: 1100,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7900,
    ename: "james",
    job: "clerk",
    mgr: 7698,
    hiredate: new Date("03-dec-1981"),
    sal: 950,
    comm: null,
    deptno: 30,
  },
  {
    empno: 7902,
    ename: "ford",
    job: "analyst",
    mgr: 7566,
    hiredate: new Date("03-dec-1981"),
    sal: 3000,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7934,
    ename: "miller",
    job: "clerk",
    mgr: 7782,
    hiredate: new Date("23-jan-1982"),
    sal: 1300,
    comm: null,
    deptno: 10,
  }]
)


db.dept.insertMany(
  [
    {
      "_id":1,
      "deptno": 10,
      "employees": ["clark", "king", "miller"],
      "count": 3
    },
    {
      "_id":2,
      "deptno": 20,
      "employees": ["smith", "jones", "scott", "adams", "ford"],
      "count": 5
    },
    {
      "_id":3,
      "deptno": 30,
      "employees": ["allen", "ward", "martin", "blake", "turner", "james"],
      "count": 6
    }
  ]
  
)