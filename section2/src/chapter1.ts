// number
// 자바스크립트에서 숫자를 의미하는 모든 값을 포함하는 타입
// 정수, 소수, 음수등 아래의 모든 타입 허용
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;
// let num8: number = "test"; 불가능

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;

// null
// 오직 null값만 허용
let null1: null = null;

// undefined 타입
// 오직 undefined만 허용
let unde1: undefined = undefined;

// 리터럴 타입
// 단하나의 값만 허용하도록 설정
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;