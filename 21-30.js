// 문제21: set은 어떻게 만드나요?
// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르세요.

/*선택지
1) var x = {1, 2, 3, 5, 6, 7};
2) var x = {};
3) var x = new Set('javascript');
4) var x = new Set(range(5));
5) var x = new Set();
*/

// 내가 쓴 답안
// 1), 3), 4)

// 정답
// 3), 5)
// Set 객체는 자료형에 관계 없이 원시값과 객체 참조 모두 '유일한 값'을 저장할 수 있다.
// 구문: new Set([iterable]);
// - Set 선언 예시
// var set1 = new Set();
// var set2 = new Set([1, 2, 3]);
// - Set methods
// has(): set에 값이 존재하는지 확인 / delete(): set에서 값을 제거 / clear(): set에서 모든 값 제거

// --------------------------------------------------------------------------------------------

// 문제22: 배수인지 확인하기
// 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

/*선택지
1) i / 6 == 0
2) i % 6 == 0
3) i & 6 == 0
4) i | 6 == 0
5) i // 6 == 0
*/

// 내가 쓴 답안
// 2) i % 6 == 0
// 이유: 변수 i가 6의 배수가 되려면 i를 6으로 나눴을 때 나머지가 0이어야 한다.
// 나머지 값을 연산할 때 사용하는 연산자는 '%'이다.

// 정답
// 2) i % 6 == 0

// --------------------------------------------------------------------------------------------

// 문제23: OX 문제
// console.log(10/3)의 출력 결과는 3이다.

// 내가 쓴 답안
// X
// 이유: '/' 연산자는 소숫점까지 계산한다.

// 정답
// X
// 출력 결과는 3.3333333333333335
// 소숫점이 없는 정수를 출력하고자 할 때는 'Math.floor()' 함수를 쓰면 됩니다.

// --------------------------------------------------------------------------------------------

// 문제24: 대문자로 바꿔주세요!
// 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.

// 입력 : mary
// 출력 : MARY

// 내가 쓴 답안
{
  //  const name = prompt("이름을 입력하세요.");
  //  console.log(name.toUpperCase());
}

// 정답
{
  //  var name = prompt("이름을 입력하세요.");
  //  console.log(name.toUpperCase());
}

// --------------------------------------------------------------------------------------------

// 문제25: 원의 넓이를 구하세요
// 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.
// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

// 내가 쓴 답안
{
  const area = (radius) => radius * radius * 3.14;
  const n = prompt("반지름의 길이를 입력하세요");
  console.log(area(n));
}

// 정답
{
  function circle(n) {
    const result = n * n * 3.14;

    return result;
  }

  const r = prompt("원의 반지름을 입력하세요.");
  console.log(circle(r));
}

// --------------------------------------------------------------------------------------------

// 문제26: 행성 문제2
// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.
// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어주세요.

// 내가 쓴 답안1 - 함수
{
  const planet = prompt("행성의 이름을 입력하세요.");
  const planetEng = (name) => {
    if (name === "수성") return "Mercury";
    else if (name === "금성") return "Venus";
    else if (name === "지구") return "Earth";
    else if (name === "화성") return "Mars";
    else if (name === "목성") return "Jupiter";
    else if (name === "토성") return "Saturn";
    else if (name === "천왕성") return "Uranus";
    else if (name === "해왕성") return "Neptune";
  };
  console.log(planetEng(planet));
}

// 내가 쓴 답안2 - switch문
{
  const planet = prompt("행성의 이름을 입력하세요.");
  switch (planet) {
    case "수성":
      console.log("Mercury");
      break;
    case "금성":
      console.log("Venus");
      break;
    case "지구":
      console.log("Earth");
      break;
    case "화성":
      console.log("Mars");
      break;
    case "목성":
      console.log("Jupiter");
      break;
    case "토성":
      console.log("Saturn");
      break;
    case "천왕성":
      console.log("Uranus");
      break;
    case "해왕성":
      console.log("Neptune");
      break;
    default:
      alert("잘못된 입력입니다.");
  }
}

// 정답
{
  const planets = {
    수성: "Mercury",
    금성: "Venus",
    지구: "Earth",
    화성: "Mars",
    목성: "Jupiter",
    토성: "Saturn",
    천왕성: "Uranus",
    해왕성: "Neptune",
  };

  const name = prompt("행성의 이름을 입력하세요.");

  console.log(planets[name]);
}

// --------------------------------------------------------------------------------------------

// 문제27: 객체 만들기
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

// 내가 쓴 답안
{
  const name = prompt("학생 이름").split(" "); // 배열
  const score = prompt("수학 점수").split(" "); // 배열

  let result = {}; // const로 선언해야 함!
  for (let i = 0; i < score.length; i++) {
    result[name[i]] = parseInt(score[i], 10);
  }
  console.log(result);
}

// 정답
{
  const keys = prompt("이름을 입력하세요").split(" ");
  const values = prompt("점수를 입력하세요").split(" ");
  const obj = {};

  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = parseInt(values[i], 10);
  }

  console.log(obj);
}

// --------------------------------------------------------------------------------------------

// 문제28: 2-gram
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// - 입력
// Javascript
// - 출력
/*
J a
a v
v a
a s
s c
c r
r i
i p
p t
*/

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해주세요.

// 내가 쓴 답안
{
  const string = prompt("문자를 입력하세요.");

  for (let i = 0; i < string.length - 1; i++) {
    console.log(string[i], string[i + 1]);
  }
}

// 정답
{
  const data = prompt("문자를 입력하세요.");

  for (let i = 0; i < data.length - 1; i++) {
    console.log(data[i], data[i + 1]);
  }
}

// --------------------------------------------------------------------------------------------

// 문제29: 대문자만 지나가세요
// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어주세요.

// 내가 쓴 답안
{
  const alphabet = prompt("알파벳을 입력하세요");
  if (alphabet === alphabet.toUpperCase()) console.log("YES");
  else console.log("NO");
}

// 정답
{
  const data = prompt("알파벳을 입력하세요.");
  if (data === data.toUpperCase()) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// --------------------------------------------------------------------------------------------

// 문제30: 문자열 속 문자 찾기
// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어주세요.

// - 입력
// pineapple is yummy
// apple

// - 출력
// 4

// 내가 쓴 답안
{
  const string = prompt("문자열을 입력하세요.");
  const word = prompt("문자를 입력하세요.");

  const index = string.indexOf(word);
  console.log(index);
}

// 정답
{
  const data = prompt("문자열을 입력하세요");
  const word = prompt("찾을 단어를 입력하세요.");

  console.log(data.indexOf(word));
  // indexOf() 메서드는 호출한 String 객체나 배열에서 주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환하고, 존재하지 않으면 -1을 반환합니다.
}
