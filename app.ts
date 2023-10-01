const num1Element = document.getElementById('num1')as HTMLInputElement;
const num2Element = document.getElementById('num2')as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

function add(num1: number | string, num2: number | string){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }
    if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + num2;
    }
    return +num1 + +num2;
}
 const resultNum: Array<number> = [];
 const resString: string[] = [];

 type Result = { val: number; timestamp: Date };

 //Another way to define type aliases using interface
 interface resObj{
    val: number,
    timestamp: Date
 }

function printResult(resObject: Result){
    console.log(resObject.val)
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    resultNum.push(result as number);
    const resStr = add(num1, num2);
    resString.push(resStr as string);
    printResult({val: result as number, timestamp: new Date()})
    console.log(resultNum, resStr)
})

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
       resolve("It Worked")
    }, 1000)
})

promise.then((result => console.log(result.split('W'))));