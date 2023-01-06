// 1) this inside global scope , 
// this inside an object, 
// this inside a function , 
// this inside inner function using arrow function, 
// this inside a method
// this inside a constructor

// 2) 
// inside global scope:
// this.name = 'Anuraag';
// console.log(name);

// inside an object
// let obj = {
//   name: "Anuraag",
// }
// console.log(obj.name);

//inside a method
// let obj = {
//   name: "Anuraag",
//   print(){
//     console.log(this.name);
//   }
// }
// obj.print();

//inside function
// won't work if we use 'use strict'
// this.name = 'Anuraag';
// const print = function(){
//   console.log(this.name);
// }
// print(); 

//or 
// this.name = 'Anuraag';
// const print = function(title){
//   console.log(`${name} ${title}`);
// }
// print.call(this,'Chetia');

//inside inner function
// this.name = 'Anuraag';
// const print = function(title){
//   const innerFunction = (_title) => {
//     console.log(`${name} ${_title}`);
//   }
//   innerFunction.call(this,title);
// }
// print.call(this,'Chetia');

//inside a constructor
// let createPerson = function(name){
//   this.person = `${name}`;
// }
// const Anuraag = new createPerson('Anuraag');
// const print = function(title){
//   console.log(`${this.person} ${title}`);
// }
// print.call(Anuraag,'Chetia');

// 3)
// class Student{
//   static count = 0;
//   constructor(name,age,phoneNumber,marks){
//     this.name = name;
//     this.age = age;
//     this.phoneNumber=phoneNumber;
//     this.marks = marks;
//     this.i++;
//     Student.countStudent();
//   }
//   static countStudent(){
//     return Student.count++;
//   }
//   eligible(){
//     if(this.marks>40){
//       console.log('eligible');    
//     }else{
//       console.log('not eligible');
//     }
//   }
// }
// const Abdul = new Student('Abdul',21,123123,39);
// const Anuraag = new Student('Anuraag',21,1231231,80);
// const Riya = new Student('Riya',23,213123,67);
// const Tina = new Student('Tina',23,123123,76);
// const Jacob = new Student('Jacob',23,34523542,30);
// console.log(Student.countStudent());
// Abdul.eligible();
// Anuraag.eligible();
// Riya.eligible();
// Tina.eligible();
// Jacob.eligible();

//FAT ARROW FUNCTION
class Student{
  constructor(name,age,marks){
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  setMinimumAge(minAge){
    return (minMarks)=>{
      if(this.marks>minMarks && this.age>minAge){
        console.log(`${this.name} is eligible for placements`);
      }else{
        console.log(`${this.name} is not eligible for placements`);
      }
    }
  }
}
const Anuraag = new Student('Anuraag',21,55);
Anuraag.setMinimumAge(18)(40);
const James = new Student('James',25,33);
James.setMinimumAge(18)(40);
