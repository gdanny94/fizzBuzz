//Given a number as an input, print out every integer from 1 to that numbe.
//However, when the integer is divisible by 3, print out 'FIZZ'
//when its divisible by 5, print out 'Buzz'
//When its divisible by 3 and 5, print out 'Fizz Buzz'

//PREP
//num -> to that num -> div 3 fixx; div 5; div 3/5 fizz buzz
//always int; positive; no floats; no funny biz; int always
//print to console; notes

function fizzBuzz(num) {
  //loop 1 to num - for i will be my increment
  for (let i = 1; i >= num; i++) {
    //conditional

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    }
  }
  // i % 3 === 0 -> fizz
  // i % 5 === 0 -> buzz
  // i % 3 & 5 === 0 -> fizzbuzz
}

fizzBuzz(5); //1,2,fizz,4,buzz
fizzBuzz(9); //1,2,fizz,4,buzz,fizz,7,8,fizz
fizzBuzz(15); //1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz
