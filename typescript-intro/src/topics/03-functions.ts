function addNumbers(a: number, b: number) {
  return a + b;
}

const result = addNumbers(1, 2);


const addNumbersArrow = (a:number, b: number):string => {
    return  `${a+b}`;
}

const resultArrow = addNumbersArrow(3, 5);

function multiply(firsNumber: number, secondNumber?: number, base:number = 2){
    return firsNumber * base;
}

const multiplyResult: number = multiply(5);

console.log({result, resultArrow, multiplyResult});

export {};
