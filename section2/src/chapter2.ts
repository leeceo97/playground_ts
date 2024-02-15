// 배열
// 배열요소타입[] 형태로 선언
let numArr: number[] = [1,2,3];
let strArr: string[] = ["a", "b", "c"];
let boolArr: boolean[] = [true, false];
let multiArr: (number|string)[] = [1,"hello"];
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1,2];
let tup2: [number, string, null] = [1, "hello", null];