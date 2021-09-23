function exercise12() {
  // Exercise 12
  //
  // Write a program that generates a list of all prime numbers from 1 and 200.
  // Prime numbers have exactly two factors.
  // A prime number is a number that is ONLY divisible by 1 and itself.
  //
  // 6 -> NOT prime (2 * 3)
  // 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
  // 12 -> NOT prime (3 * 4, 2 * 6)
  // 37 -> PRIME ()
  //
  //
  // EXPECTED OUTPUT: [2, 3, 5, 7, 11, 13, ...]
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  
  let array = [2] //2 is prime

  //only checking odd numbers
  for (let i = 3; i <= 200; i+=2) { 
    //set to True...
    let isPrime = true

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        //...then set to False if it fails the test
        isPrime = false
      }
      else {
        //do nothing
      }
    }
  
    if (isPrime === true) {
      array.push(i)
    }
  }
  console.log(array)
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-12

module.exports = exercise12;
