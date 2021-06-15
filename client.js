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
  // calculate bonus percentage based on employee rating, number, and salary
  let bonusPercent = bonusCalculator(employee.reviewRating, employee.employeeNumber, employee.annualSalary);
  let bonusPotential = {
    name: employee.name,
    bonusPercentage: bonusPercent,
    totalCompensation: employee.annualSalary * (1 + bonus/100),
    totalBonus: Math.round(employee.annualSalary * (bonus/100))
  }//end object
  return bonusPotential;
}//end function

function bonusCalculator(rating, employeeNumber, salary){
  // if employee number is 4 digits long, they've been with company more
  // than 15 years and get a 5% bonus
  const oldTimerBonus = (employeeNumber.length == 4) ? 5 : 0;
  // if employee gets more than 65000 per year, adjust bonus down 1%
  const richPersonAntiBonus = (salary > 65000) ? -1 : 0;
  if (rating <= 2){
    if (0 + oldTimerBonus + richPersonAntiBonus < 0) {
      return 0; // no bonus can be below 0%
    }
    else{ 
      return 0 + oldTimerBonus + richPersonAntiBonus;
    }
  }//end if
  else if (rating <= 3){
    return 4 + oldTimerBonus + richPersonAntiBonus;
  }
  else if (rating <= 4){
    return 6 + oldTimerBonus + richPersonAntiBonus;
  }
  else {
    if (10 + oldTimerBonus + richPersonAntiBonus > 13) {
      return 13; // no bonus can be above 13%
    }
    else {
      return 10 + oldTimerBonus + richPersonAntiBonus;
    }
  }//end else
}//end function

for ( let employee of employees){
  console.log(evaluateEmployee(employee));
}//end for loop


