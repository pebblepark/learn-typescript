// interface User {
//   age: number;
//   name: string;
// }

// // 변수에 인터페이스 활용
// var seho: User = {
//   age: 33,
//   name: "세호",
// };

// // 함수에 인터페이스 활용
// function getUser(user: User) {
//   console.log(user);
// }

// const capt = {
//   name: "캡틴",
//   age: 100,
// };

// getUser(capt);

// // 함수의 스펙에 인터페이스를 활용
// interface SumFunction {
//   (a: number, b: number): number;
// }

// var sum: SumFunction;
// sum = function (a: number, b: number): number {
//   return a + b;
// };

// // 인덱싱
// interface StringArray {
//   [index: number]: string;
// }

// var strArr: StringArray = ["a", "b", "c"];
// // strArr[0] = 10;

// // 딕셔너리 패턴
// interface StringRegexDictionary {
//   [key: string]: RegExp;
// }

// var obj: StringRegexDictionary = {
//   sth: /abc/,
//   cssFile: /\.css$/,
//   jsFile: /|.js%/,
// };
// // obj["test"] = "test";
// obj["test"] = /test/;
// Object.keys(obj).forEach(function (value) {});

// // 인터페이스 확장
// interface Person {
//   name: string;
//   age: number;
// }

// interface Developer extends Person {
//   language: string;
// }

// var captain: Developer = {
//   language: "javascript",
//   age: 100,
//   name: "캡틴",
// };
