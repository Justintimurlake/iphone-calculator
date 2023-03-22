// const buttonsEl = document.querySelectorAll("button");

// const inputFieldEl = document.getElementById("result");

// let isPowerActive = false;
// let base;

// for (let i = 0; i < buttonsEl.length; i++) {
//   buttonsEl[i].addEventListener("click", () => {
//     const buttonValue = buttonsEl[i].textContent;
//     if (buttonValue === "C") {
//       clearResult();
//     } else if (buttonValue === "=") {
//       calculateResult();
//     } else if (buttonValue === "+/-") {
//       negate();
//     } else if (buttonValue === "%") {
//       percent();
//     } else if (buttonValue === "sin") {
//       sin();
//     } else if (buttonValue === "cos") {
//       cos();
//     } else if (buttonValue === "x^2") {
//       square();
//     } else if (buttonValue === "y^x") {
//       power();
//     } else if (buttonValue === "!x") {
//       factorial();
//     } else if (buttonValue === "√x") {
//       sqrt();
//     } else if (buttonValue === "∛x") {
//       cbrt();
//     } else {
//       appendValue(buttonValue);
//     }
//   });
// }

// function factorial() {
//   const num = parseFloat(inputFieldEl.value);
//   if (Number.isInteger(num) && num >= 0) {
//     inputFieldEl.value = factorialRecursive(num);
//   } else {
//     alert("Please enter a non-negative integer value.");
//   }
// }

// function factorialRecursive(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorialRecursive(n - 1);
//   }
// }

// function sqrt() {
//   const num = parseFloat(inputFieldEl.value);
//   if (num >= 0) {
//     inputFieldEl.value = Math.sqrt(num);
//   } else {
//     alert("Please enter a non-negative value.");
//   }
// }

// function cbrt() {
//   const num = parseFloat(inputFieldEl.value);
//   inputFieldEl.value = Math.cbrt(num);
// }

// function power() {
//   if (inputFieldEl.value !== "") {
//     base = parseFloat(inputFieldEl.value);
//     inputFieldEl.value = "";
//     isPowerActive = true;
//   }
// }

// function percent() {
//   inputFieldEl.value =
//     (parseFloat(inputFieldEl.value) / 100) *
//     parseFloat(inputFieldEl.value);
// }

// function clearResult() {
//   inputFieldEl.value = "";
// }

// function square() {
//   inputFieldEl.value = parseFloat(inputFieldEl.value) ** 2;
// }

// function sin() {
//   inputFieldEl.value = Math.sin(parseFloat(inputFieldEl.value));
// }

// function cos() {
//   inputFieldEl.value = Math.cos(parseFloat(inputFieldEl.value));
// }

// function calculateResult() {
//   if (isPowerActive) {
//     inputFieldEl.value = Math.pow(
//       base,
//       parseFloat(inputFieldEl.value)
//     );
//     isPowerActive = false;
//   } else {
//     inputFieldEl.value = eval(inputFieldEl.value);
//   }
// }

// function negate() {
//   inputFieldEl.value = -parseFloat(inputFieldEl.value);
// }

// function appendValue(buttonValue) {
//   inputFieldEl.value += buttonValue;
// }

//====================

// class Calculator {
//   constructor(inputFieldEl) {
//     this.inputFieldEl = inputFieldEl;
//     this.isPowerActive = false;
//     this.base = null;
//   }

//   factorialRecursive(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * this.factorialRecursive(n - 1);
//     }
//   }

//   factorial() {
//     const num = parseFloat(this.inputFieldEl.value);
//     if (Number.isInteger(num) && num >= 0) {
//       this.inputFieldEl.value = this.factorialRecursive(num);
//     } else {
//       alert("Please enter a non-negative integer value.");
//     }
//   }

//   sqrt() {
//     const num = parseFloat(this.inputFieldEl.value);
//     if (num >= 0) {
//       this.inputFieldEl.value = Math.sqrt(num);
//     } else {
//       alert("Please enter a non-negative value.");
//     }
//   }

//   cbrt() {
//     const num = parseFloat(this.inputFieldEl.value);
//     this.inputFieldEl.value = Math.cbrt(num);
//   }

//   power() {
//     if (this.inputFieldEl.value !== "") {
//       this.base = parseFloat(this.inputFieldEl.value);
//       this.inputFieldEl.value = "";
//       this.isPowerActive = true;
//     }
//   }

//   percent() {
//     this.inputFieldEl.value =
//       (parseFloat(this.inputFieldEl.value) / 100) *
//       parseFloat(this.inputFieldEl.value);
//   }

//   clearResult() {
//     this.inputFieldEl.value = "";
//   }

//   square() {
//     this.inputFieldEl.value =
//       parseFloat(this.inputFieldEl.value) ** 2;
//   }

//   sin() {
//     this.inputFieldEl.value = Math.sin(
//       parseFloat(this.inputFieldEl.value)
//     );
//   }

//   cos() {
//     this.inputFieldEl.value = Math.cos(
//       parseFloat(this.inputFieldEl.value)
//     );
//   }

//   addPi() {
//     this.inputFieldEl.value += Math.PI;
//   }

//   log() {
//     const num = parseFloat(this.inputFieldEl.value);
//     if (num > 0) {
//       this.inputFieldEl.value = Math.log10(num);
//     } else {
//       alert("Please enter a positive value.");
//     }
//   }

//   calculateResult() {
//     if (this.isPowerActive) {
//       this.inputFieldEl.value = Math.pow(
//         this.base,
//         parseFloat(this.inputFieldEl.value)
//       );
//       this.isPowerActive = false;
//     } else {
//       this.inputFieldEl.value = eval(this.inputFieldEl.value);
//     }
//   }

//   negate() {
//     this.inputFieldEl.value = -parseFloat(this.inputFieldEl.value);
//   }

//   appendValue(buttonValue) {
//     this.inputFieldEl.value += buttonValue;
//   }
// }

// const inputFieldEl = document.getElementById("result");
// const calculator = new Calculator(inputFieldEl);

// const buttonsEl = document.querySelectorAll("button");

// for (let i = 0; i < buttonsEl.length; i++) {
//   buttonsEl[i].addEventListener("click", () => {
//     const buttonValue = buttonsEl[i].textContent;
//     if (buttonValue === "C") {
//       calculator.clearResult();
//     } else if (buttonValue === "=") {
//       calculator.calculateResult();
//     } else if (buttonValue === "+/-") {
//       calculator.negate();
//     } else if (buttonValue === "%") {
//       calculator.percent();
//     } else if (buttonValue === "sin") {
//       calculator.sin();
//     } else if (buttonValue === "cos") {
//       calculator.cos();
//     } else if (buttonValue === "x^2") {
//       calculator.square();
//     } else if (buttonValue === "y^x") {
//       calculator.power();
//     } else if (buttonValue === "!x") {
//       calculator.factorial();
//     } else if (buttonValue === "√x") {
//       calculator.sqrt();
//     } else if (buttonValue === "∛x") {
//       calculator.cbrt();
//     } else if (buttonValue === "log") {
//       calculator.log();
//     } else if (buttonValue === "π") {
//       calculator.addPi();
//     } else {
//       calculator.appendValue(buttonValue);
//     }
//   });
// }

function handleKeyPress(event) {
  const key = event.key;

  const operatorKeys = ["+", "-", "*", "/"];

  if (
    operatorKeys.includes(key) &&
    calculator.inputFieldEl.value === ""
  ) {
    alert("Please enter a positive value.");
    return;
  }
  switch (key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
      calculator.appendValue(key);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      calculator.appendValue(key);
      break;
    case "Enter":
      calculator.calculateResult();
      break;
    case "Backspace":
    case "Delete":
      calculator.clearResult();
      break;
    case "Escape":
      calculator.clearResult();
      break;
    // Add more key codes for other functions as needed
    default:
      break;
  }
}

document.addEventListener("keydown", handleKeyPress);

class Calculator {
  constructor(inputFieldEl) {
    this.inputFieldEl = inputFieldEl;
    this.isPowerActive = false;
    this.base = null;
  }

  factorialRecursive(n) {
    if (n === 0 || n === 1 || n === "") {
      return 1;
    } else {
      return n * this.factorialRecursive(n - 1);
    }
  }

  factorial() {
    const num = parseFloat(this.inputFieldEl.value);
    if (Number.isInteger(num) && num >= 0) {
      this.inputFieldEl.value = this.factorialRecursive(num);
    } else {
      alert("Please enter a non-negative integer value.");
    }
  }

  sqrt() {
    const num = parseFloat(this.inputFieldEl.value);
    if (num >= 0) {
      this.inputFieldEl.value = Math.sqrt(num);
    } else {
      alert("Please enter a non-negative value.");
    }
  }

  cbrt() {
    if (this.inputFieldEl.value !== "") {
      const num = parseFloat(this.inputFieldEl.value);
      this.inputFieldEl.value = Math.cbrt(num);
    } else {
      alert("Please enter a positive value.");
    }
  }

  power() {
    if (this.inputFieldEl.value !== "") {
      this.base = parseFloat(this.inputFieldEl.value);
      this.inputFieldEl.value = "";
      this.isPowerActive = true;
    } else {
      alert("Please enter a positive value.");
    }
  }

  percent() {
    if (this.inputFieldEl.value > 0) {
      this.inputFieldEl.value =
        (parseFloat(this.inputFieldEl.value) / 100) *
        parseFloat(this.inputFieldEl.value);
    } else {
      alert("Please enter a positive value.");
    }
  }

  clearResult() {
    this.inputFieldEl.value = "";
  }

  square() {
    if (this.inputFieldEl.value > 0) {
      this.inputFieldEl.value =
        parseFloat(this.inputFieldEl.value) ** 2;
    } else {
      alert("Please enter a positive value.");
    }
  }

  sin() {
    if (this.inputFieldEl.value > 0) {
      this.inputFieldEl.value = Math.sin(
        parseFloat(this.inputFieldEl.value)
      );
    } else {
      alert("Please enter a positive value.");
    }
  }

  cos() {
    if (this.inputFieldEl.value > 0) {
      this.inputFieldEl.value = Math.cos(
        parseFloat(this.inputFieldEl.value)
      );
    } else {
      alert("Please enter a positive value.");
    }
  }

  addPi() {
    this.inputFieldEl.value += Math.PI;
  }

  log() {
    const num = parseFloat(this.inputFieldEl.value);
    if (num > 0) {
      this.inputFieldEl.value = Math.log10(num);
    } else {
      alert("Please enter a positive value.");
    }
  }

  calculateResult() {
    if (this.isPowerActive) {
      this.inputFieldEl.value = Math.pow(
        this.base,
        parseFloat(this.inputFieldEl.value)
      );
      this.isPowerActive = false;
    } else {
      this.inputFieldEl.value = eval(this.inputFieldEl.value);
    }
  }

  negate() {
    this.inputFieldEl.value = -parseFloat(this.inputFieldEl.value);
  }

  appendValue(buttonValue) {
    this.inputFieldEl.value += buttonValue;
  }
}

const inputFieldEl = document.getElementById("result");
const calculator = new Calculator(inputFieldEl);

const buttonsEl = document.querySelectorAll("button");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;

    const operatorKeys = ["+", "-", "*", "/", "="]; // Replace "×" and "÷" with "*" and "/" if you are using those symbols on your buttons.

    if (
      operatorKeys.includes(buttonValue) &&
      calculator.inputFieldEl.value === ""
    ) {
      alert("Please enter a positive value.");
      return;
    }

    if (buttonValue === "C") {
      calculator.clearResult();
    } else if (buttonValue === "=") {
      calculator.calculateResult();
    } else if (buttonValue === "+/-") {
      calculator.negate();
    } else if (buttonValue === "%") {
      calculator.percent();
    } else if (buttonValue === "sin") {
      calculator.sin();
    } else if (buttonValue === "cos") {
      calculator.cos();
    } else if (buttonValue === "x^2") {
      calculator.square();
    } else if (buttonValue === "y^x") {
      calculator.power();
    } else if (buttonValue === "!x") {
      calculator.factorial();
    } else if (buttonValue === "√x") {
      calculator.sqrt();
    } else if (buttonValue === "∛x") {
      calculator.cbrt();
    } else if (buttonValue === "log") {
      calculator.log();
    } else if (buttonValue === "π") {
      calculator.addPi();
    } else {
      calculator.appendValue(buttonValue);
    }
  });
}
