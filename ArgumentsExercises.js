// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }    

//     return sum;
// }

// sum(1, 2, 3, 4) ;
// sum(1, 2, 3, 4, 5);

// rest parameter allows a function to accept an indefinite number of arguments as an array

function sum2(...arg) {
    let total = 0;
    for (let i = 0; i < arg.length; i++) { //replace arg with arguments
        total += arg[i];
    }    

    return total;
}

// sum2(1, 2, 3, 4) ;
// sum2(1, 2, 3, 4, 5);

// Solve it first using the arguments keyword.

// Within your myBind method, you'll have to define a new, anonymous function to be returned.
// Be careful: using arguments inside the anonymous function will not give you the arguments passed to myBind, 
// because arguments is reset on every function invocation (just like this).
// That makes sense, because there are two arrays of arguments you care about: the extra arguments passed to myBind, 
// and the arguments passed when the bound function is called.
// Once you've done that, write a second version using the ... rest operator.


Function.prototype.myBind = function (ctx) {
    // debugger
    const func = this;
    const boundArgs = [...arguments].slice(1);
    return function () {
        const calledArgs = [...arguments];
        return func.apply(ctx, boundArgs.concat(calledArgs));
    }
}

Function.prototype.myBind = function (ctx, ...boundArgs) {
  return (...calledArgs) => {
    this.apply(ctx, boundArgs.concat(calledArgs));
  }
}


class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  // const markov = new Cat("Markov");
  // const pavlov = new Dog("Pavlov");
  
  // markov.says("meow", "Ned");
  // // Markov says meow to Ned!
  // // true
  
  // // bind time args are "meow" and "Kush", no call time args
  // markov.says.myBind(pavlov, "meow", "Kush")();
  // // Pavlov says meow to Kush!
  // // true
  
  // // no bind time args (other than context), call time args are "meow" and "a tree"
  // markov.says.myBind(pavlov)("meow", "a tree");
  // // Pavlov says meow to a tree!
  // // true
  
  // // bind time arg is "meow", call time arg is "Markov"
  // markov.says.myBind(pavlov, "meow")("Markov");
  // // Pavlov says meow to Markov!
  // // true
  
  // // no bind time args (other than context), call time args are "meow" and "me"
  // const notMarkovSays = markov.says.myBind(pavlov);
  // notMarkovSays("meow", "me");
  // // Pavlov says meow to me!
  // // true


  // curriedSum

function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);
    
    if (numbers.length === numArgs) {
      let totalSum = 0;
      for (let i=0; i<numbers.length; i++) {
        totalSum += numbers[i];
      }
      return totalSum;

    } else {
      return _curriedSum;
    };
  };

  return _curriedSum;
}

// const checkSum = curriedSum(4);
// console.log(checkSum(5)(30)(20)(1)); // => 56


// Function.prototype.curry

// Function.prototype.curry = function(numArgs) {
//   const func = this;
//   const args = [];
//   function _curry(arg) {
//     args.push(arg);

//     if (args.length === numArgs) {
//       return func.apply(null, args);
//     } else {
//       return _curry;
//     }
//   }
//   return _curry;
// }

Function.prototype.curry = function(numArgs) {
  const func = this;
  const args = [];
  function _curry(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return func(...args);
    } else {
      return _curry;
    }
  }
  return _curry;
}

// test example:

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30