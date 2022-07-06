// 숫자형 Enum: 0부터 1씩 증가
enum Shoes {
  Nike,
  Adidas,
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

enum Shoes2 {
  Nike = 10,
  Adidas,
}

var myShoes2 = Shoes2.Adidas;
console.log(myShoes2); // 11

// 문자형 Enum
enum Shoes3 {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myShoes3 = Shoes3.Nike;
console.log(myShoes3); // 나이키

enum Answer {
  Yes = "Y",
  No = "N",
}

// 예제
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답");
  }
  if (answer === Answer.No) {
    console.log("오답");
  }
}

askQuestion(Answer.Yes);
// askQuestion("Y");
