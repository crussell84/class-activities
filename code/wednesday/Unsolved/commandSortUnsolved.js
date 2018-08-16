var input = process.argv;
var numArray = [];

for (var i = 2; i < input.length; i++){
    numArray.push(parseFloat(input[i]));
}

function sortNumber(a,b) {
    return a - b;
}

numArray.sort(sortNumber);
console.log(numArray.join(","));