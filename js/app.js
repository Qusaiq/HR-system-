'use strict';
let table = document.getElementById('employeeTable');
const department = ['Call-Center', 'Information-technology', 'Human-Resources'];
let allEmployees = [];
let total=0;
function randomSalary() {
  return Math.floor(Math.random() * (500 - 100) + 100);
}

console.log(randomSalary());

function tableHeader() {
  let tr = document.createElement('tr');
  let thName = document.createElement('th');
  let thEmail = document.createElement('th');
  let thDep = document.createElement('th');
  let thSalary = document.createElement('th');

  thName.textContent = 'Name';
  thEmail.textConten = 'Email';
  thDep.textContent = 'Department';
  thSalary.textContent = 'Salary';

  tr.appendChild(thName);
  tr.appendChild(thEmail);
  tr.appendChild(thDep);
  tr.appendChild(thSalary);

  table.appendChild(tr);


}

function Employee(name, mail, department,salary) {
  this.name = name;
  this.mail = mail;
  this.department = department;
  this.price = salary;
  allEmployees.push(this);
}

Employee.prototype.Rows = function () {
  let tr = document.createElement('tr');
  let tdName = document.createElement('td');
  let tdEmail = document.createElement('td');
  let tdDep = document.createElement('td');
  let tdSalary = document.createElement('td');

  tdName.textContent = this.name;
  tdEmail.textContent = this.mail;
  tdDep.textConten = this.department;
  tdSalary.textContent = this.salary;

  tr.appendChild(tdName);
  tr.appendChild(tdEmail);
  tr.appendChild(tdDep);
  tr.appendChild(tdSalary);

};

let form = document.getElementById('form');
form.addEventListener('submit', formHandle);
function formHandle(event) {
  event.preventDefault();
  //   console.log(event);
  let empName = event.target.name.value;
//   console.log(empName);
  let empEmail = event.target.mail.value;
//   console.log(empEmail);
  let empDep=event.target.opt.value;
//   console.log(empDep);
let empSalary= randomSalary();
let emp=new Employee(empName,empEmail,empDep,empSalary);
total+=empSalary;
let totalSalary=document.getElementById('total');
total.textConten=`Total=${total}`;

localStorage.setItem('Employees',JSON.stringify(allEmployees));
}
tableHeader();
let x=JSON.parse(localStorage.getItem('Employees'));
if(x){
    // for(let i=0;i<x.lenght;i++)
    // {

    // }
}


