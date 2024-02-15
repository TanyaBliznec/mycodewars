//Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

//Solution:

function combineNames (first, second) {
    let myName = [first, second];
    return myName.join(" ");
  }
   combineNames("James", "Stevens");