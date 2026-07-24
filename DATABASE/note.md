1. MySQL database is a system for manages data kind of open source.
2. type of database : MYSQL DB, Posgrest, MSSQL server, Mongo, Oracle, Access , ...
3. can use SQL for query, insert update and delete data.
4. can use with js, py, php, java, .net and nodejs.

5. MySQL statement content

primary key - is the key value which is unique

homework
drawDB - tbl brand, tbl category, tbl product

SELECT
employee.EmpCode,
employee.EmpName,
department.DepartmentName
FROM `employee`
INNER JOIN department
ON employee.DepartmentID = department.DeptID;

SELECT
employee.EmpCode,
employee.EmpName,
office.OfficeName
FROM `employee`
INNER JOIN office
ON employee.OfficeID = office.OfficeID;

SELECT
employee.EmpCode,
employee.EmpName,
division.DivisionName
FROM `employee`
INNER JOIN division
ON employee.DivisionID = division.DivisionID;

SELECT
employee.EmpCode,
employee.EmpName,
branch.BranchName
FROM `employee`
INNER JOIN branch
ON employee.BranchID = branch.BranchID;
