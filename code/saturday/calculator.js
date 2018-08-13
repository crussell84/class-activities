const op = process.argv[2];
const firstNum = process.argv[3];
const secondNum = process.argv[4];

switch (op) {
    case "add":
    console.log(+firstNum + +secondNum);
    break;

    case "subtract":
    console.log(+firstNum - +secondNum);
    break;

    case "multiply":
    console.log(+firstNum * +secondNum);
    break;

    case "divide":
    console.log(+firstNum / +secondNum);
    break;

    case "remainder":
    console.log(+firstNum % +secondNum);
    break;

    case "exp":
    console.log((+firstNum) ** +secondNum);
    break;

    case "algebra":
    //take last 2 characters and set as answer, subtract value on other side of =, divide result by first character
    var expression = firstNum.split("");
    var multiplier = expression[0];
    var answer = expression[5]+expression[6];
    var subtract = expression[3];
    answer = (+answer - +subtract) / +multiplier;
    console.log(answer);
    break;
    
    default:
    console.log("Invalid input, try again");
}