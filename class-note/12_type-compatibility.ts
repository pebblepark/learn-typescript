// // 타입 호환

// // 인터페이스
// interface Developer {
//   name: string;
//   skill: string;
// }

// // interface Person {
// //   name: string;
// // }

// class Person {
//   name: string;
// }

// interface Test {
//   name: string;
// }

// var developer: Developer;
// var person: Person;

// // 타입 스크립트는 타입 자체를 비교하는게 아니라 타입 내부의 속성을 비교함
// // var test: Test = person;

// // Person 타입에는 skill이 없어서 에러
// // developer = new Person();

// // 왼쪽이 오른쪽보다 작을때만 에러 x
// person = developer;

// // 함수
// var add = function (a: number) {
//   //...
// };
// var sum = function (a: number, b: number) {
//   //...
// };

// // 파라미터나 반환값이 더 많은 타입을 가져갈 때 타입 범위가 더 큼
// // add = sum; // add보다 sum이 타입 범위가 넓기 때문에 호환 불가능
// sum = add; // sum은 파라미터를 2개 받아서 호환 가능

// // 제네릭
// interface Empty<T> {}

// var empty1: Empty<string>;
// var empty2: Empty<number>;
// empty1 = empty2;
// empty2 = empty1;

// interface NotEmpty<T> {
//   data: T;
// }

// var notempty1: NotEmpty<string>;
// var notempty2: NotEmpty<number>;
// // 타입 호환 불가능
// notempty1 = notempty2;
// notempty2 = notempty1;
