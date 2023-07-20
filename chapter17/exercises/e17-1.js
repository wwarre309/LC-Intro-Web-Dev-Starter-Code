// 17.4.1. Zero Division: Throw

// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:


function gradeLabs(labs) {
    for (let i=0; i < labs.length; i++) {
      try{ 
        let lab = labs[i];
      let result = lab.runLab(3);
      console.log(`${lab.student} code worked: ${result === 27}`);
      } catch (err) {
        console.log("Error Thrown")}
    }
  }
  
  let studentLabs = [
    {
      student: 'Carly',
      runLab: function (num) {
          return Math.pow(num, num);
      }
    },
    {
      student: 'Erica',
      runLab: function (num) {
          return num * num;
      }
    }
  ];
  
  gradeLabs(studentLabs);
  
  let studentLabs2 = [
     {
        student: 'Blake',
        myCode: function (num) {
           return Math.pow(num, num);
        }
     },
     {
        student: 'Jessica',
        runLab: function (num) {
           return Math.pow(num, num);
        }
     },
     {
        student: 'Mya',
        runLab: function (num) {
           return num * num;
        }
     }
  ];
  
  gradeLabs(studentLabs2);