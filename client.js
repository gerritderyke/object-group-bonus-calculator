const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT 

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function evaluateEmployee (employee){
  let bonus = bonusCalculator(employee.reviewRating, employee.employeeNumber, employee.annualSalary);
  let bonusPotential = {
    name: employee.name,
    bonusPercentage: bonus,
    totalCompensation: employee.annualSalary * (1 + bonus/100),
    totalBonus: Math.round(employee.annualSalary * (bonus/100))
  }
  return bonusPotential;
}

function bonusCalculator(rating, employeeNumber, salary){
  const oldTimerBonus = (employeeNumber.length == 4) ? 5 : 0;
  const richPersonAntiBonus = (salary > 65000) ? -1 : 0;
  if (rating <= 2){
    if (0 + oldTimerBonus + richPersonAntiBonus < 0) {
      return 0;
    }
    else{ 
      return 0 + oldTimerBonus + richPersonAntiBonus;
    }
  }
  else if (rating <= 3){
    return 4 + oldTimerBonus + richPersonAntiBonus;
  }
  else if (rating <= 4){
    return 6 + oldTimerBonus + richPersonAntiBonus;
  }
  else {
    if (10 + oldTimerBonus + richPersonAntiBonus > 13) {
      return 13;
    }
    else {
      return 10 + oldTimerBonus + richPersonAntiBonus;
    }
  }
}

for ( let employee of employees){
  console.log(evaluateEmployee(employee));
}

// ## Processing Employee Bonuses

// Loop over the `employees` array and do the following:

// * use each employee object as the input to the function described below.
// * `console.log` the results of each iteration.

