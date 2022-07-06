// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText(30);
// logText("hello");
// logText(true);

// // Union을 이용해서 type을 여러개 지정할 수 있지만 리턴 타입이 여러개로 묶여서 특정 자료형의 함수를 사용하지 못한다.
// // Genric을 사용하면 받은 파라미터의 자료형을 타입으로 사용하기 때문에 파라미터의 자료형과 동일한 자료형으로 리턴 됨 -> 해당 자료형의 함수 사용 가능

// // logText<string>(30); // 제너릭 타입을 지정하면 지정한 자료형으로 넣어주기
// logText(30); // 제너릭 타입을 지정 안하면 넣어준 파라미터 자료형으로 사용

// // 인터페이스에 제네릭을 선언하는 방법
// // interface Dropdown {
// //   value: string;
// //   selected: boolean;
// // }

// // const obj: Dropdown = {value: 'abc', selected: false};

// interface Dropdown<T> {
//   value: T;
//   selected: boolean;
// }

// const obj: Dropdown<string> = { value: "abc", selected: false };

// // 제네릭의 타입 제한
// // function logTextLength<T>(text: T[]): T[] {
// //   console.log(text.length);
// //   text.forEach(function (text) {
// //     console.log(text);
// //   });
// //   return text;
// // }

// // logTextLength<string>(["hi", "abc"]);

// // 제네릭 타입 제한 2 - 정의된 타입 이용하기
// interface LengthType {
//   length: number;
// }

// function logTextLength<T extends LengthType>(text: T): T {
//   text.length;
//   return text;
// }

// logTextLength("a");
// logTextLength(["hi", "abc"]);
// logTextLength({ length: 10 });
// logTextLength(10); // number는 length 속성이 없어서 에러 발생

// // 제네릭 타입 제한 3 - keyof
// interface ShoppingItem {
//   name: string;
//   price: number;
//   stock: number;
// }

// function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
//   return itemOption;
// }

// // getShoppingItemOption(10);
// getShoppingItemOption("name");
