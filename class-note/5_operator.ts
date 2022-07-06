// // function logMessage(value: string) {
// //   console.log(value);
// // }

// // logMessage("hello");
// // logMessage(100);

// // or 연산자 파이프라인(|) 사용해서 만든 타입 -> 유니온 타입

// var seho: string | number | boolean;
// function logMessage(value: string | number) {
//   console.log(value);
//   if (typeof value === "number") {
//     value.toLocaleString;
//   }
//   if (typeof value === "string") {
//     value.toString();
//   }
//   throw new TypeError("value must be string or number");
// }

// logMessage("hello");
// logMessage(100);

// interface Developer {
//   name: string;
//   skill: string;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// function askSomeoneUnion(someone: Developer | Person) {
//   someone.name; // union의 공통 속성만 접근 가능함
//   // someone.skill;
//   // someone.age;
// }
// askSomeoneUnion({ name: "capt", skill: "js" });
// askSomeoneUnion({ name: "캡틴", age: 100 });

// // and 연산자 &를 사용해서 만든 타입 -> 인터섹션 타입
// // 최종 타입은 never -> string, number, boolean을 한번에 만족할 수 없음
// var capt: string & number & boolean;

// function askSomeone(someone: Developer & Person) {
//   someone.name; // union의 공통 속성만 접근 가능함
//   someone.skill;
//   someone.age;
// }
// askSomeone({ name: "seho", skill: "js", age: 30 }); // Developer와 Person 속성을 모두 넘겨주어야함
