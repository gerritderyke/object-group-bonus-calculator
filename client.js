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
}

function bonusCalculator(rating, employeeNumber, salary){
  const oldTimerBonus = (employeeNumber.length == 4) ? 5 : 0;
  const richPersonAntiBonus = ;
  if (rating <= 2){
    return 0 + oldTimerBonus;
  }
  else if (rating <= 3){
    return 4 + oldTimerBonus;
  }
  else if (rating <= 4){
    return 6 + oldTimerBonus;
  }
  else {
    return 10;
  }
}
