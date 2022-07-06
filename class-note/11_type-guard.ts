// interface Developer {
//   name: string;
//   skill: string;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// function introduce(): Developer | Person {
//   return { name: "Tony", age: 33, skill: "Iron Making" };
// }

// var tony = introduce();
// console.log(tony.skill);

// if ((tony as Developer).skill) {
//   const skill = (tony as Developer).skill;
//   console.log(skill);
// } else if ((tony as Person).age) {
//   const age = (tony as Person).age;
//   console.log(age);
// }

// function isDeveloper(target: Developer | Person): target is Developer {
//   return (target as Developer).skill !== undefined;
// }

// if (isDeveloper(tony)) {
//   console.log(tony.skill);
// } else {
//   // Developer가 아니면 Person이 됨 -> Person 속성 접근 가능
//   console.log(tony.age);
// }
