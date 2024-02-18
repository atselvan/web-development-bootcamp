function bmiCalculator(weight, height) {
  var bmi = Math.floor(weight / Math.pow(height, 2));

  if (bmi < 18.5) {
    return "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    return "Your BMI is " + bmi + ", so you are overweight.";
  }
}

// console.log(bmiCalculator(65, 1.8));

function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
}

// console.log(isLeapYear(2400));
// console.log(isLeapYear(2400));
// console.log(isLeapYear(1989));

function fizzbuzz() {
  for (i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// console.log(fizzbuzz());
  
function fizzbuzz1() {  
  for (i = 0; i <= 100; i++) {
    var out = "";
    if (i % 3 == 0) {
      out = out + "Fizz";
    } 
    if (i % 5 == 0) {
      out = out + "Buzz";
    } 
    if (out == "") {
      out = out + i;
    }
    console.log(out)
  }  
}

// console.log(fizzbuzz1())

function fibonacci(n) {
  let out = [0, 1];

  if (n === 0) {
    return [];
  } else {
    for (let i = 2; i < n; i++) {
      out.push(out[i - 2] + out[i - 1]);
    }
    return out.slice(0, n);
  }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
