// 문제11: for를 이용한 기본 활용
// for문을 사용하여 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요.

// 내가 쓴 답안
{
  let s = 0;
  //pass
  for (let i = 1; i <= 100; i++) {
    s += i;
  }

  console.log(s); // 5050
}

// 정답
{
  let s = 0;

  for (let i = 1; i <= 100; i++) {
    s += i;
  }

  console.log(s);
}

// ---------------------------------------------------------------------

// 문제12: 게임 캐릭터 클래스 만들기
// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드세요.
// 주어진 소스 코드를 수정해선 안됩니다.

// 데이터
// 내가 쓴 답안
{
  class Wizard {
    constructor(health, mana, armor) {
      this.health = health;
      this.mana = mana;
      this.armor = armor;
    }

    attack() {
      console.log("파이어볼");
    }
  }

  const x = new Wizard(545, 210, 10);
  console.log(x.health, x.mana, x.armor);
  x.attack();
}

// 출력
// 545 210 10
// 파이어볼

// 정답
{
  const Wizard = class Wizard {
    constructor(health, mana, armor) {
      this.health = health;
      this.mana = mana;
      this.armor = armor;
    }
    attack() {
      console.log("파이어볼");
    }
  };

  const x = new Wizard(545, 210, 10);
  console.log(x.health, x.mana, x.armor);
  x.attack();
}

// ---------------------------------------------------------------------

// 문제13: 몇 번째 행성인가요?
// 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다.
// 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.
// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

// 내가 쓴 답안
{
  let planet = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "해왕성",
  ];

  let n = prompt("숫자를 입력해주세요.");
  console.log(planet[n - 1]);
}

// 정답
{
  const planets = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "해왕성",
  ];

  const n = prompt("몇 번째 행성인가요?");
  console.log(planets[n - 1]);
}

// 배열과 입력값은 고정된 값이기 때문에 const로 정의한다.

// ---------------------------------------------------------------------

// 문제14: 3의 배수인가요?
// 입력으로 랜덤한 숫자 n이 주어지는데, 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해주세요.

// 내가 쓴 답안
{
  const n = prompt("3의 배수인가요?");
  if (n % 3 === 0) {
    console.log("짝");
  } else {
    console.log(n);
  }
}

// 정답
{
  const n = prompt("숫자를 입력하세요.");
  if (n % 3 == 0) {
    // 나머지 연산 %는 n을 3으로 나누었을때 몫이 아닌 나머지 값을 반환합니다.
    console.log("짝");
  } else {
    console.log(n);
  }
}

// ---------------------------------------------------------------------

// 문제15: 자기소개
// 만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 해주세요.

// 내가 쓴 답안
{
  const name = prompt("이름을 입력해주세요.");
  if (name === "김다정") {
    console.log(`안녕하세요. 저는 ${name}입니다.`);
  }
}

// 정답
{
  const name = prompt("이름을 입력하세요.");
  console.log(`안녕하세요. 저는 ${name}입니다.`);
}
// ES6부터는 backtick 문자열(``) 안에서 $와 중괄호로 표현식을 사용할 수 있습니다. => 템플릿 리터럴(Template literals)

// ---------------------------------------------------------------------

// 문제16: 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어보세요.

// 내가 쓴 답안
{
  const content = prompt("문장을 입력하세요.");
  const reverseContent = content.split("").reverse().join("");
  console.log(reverseContent);
}

// 정답
{
  const n = prompt("입력하세요.");
  const reverseString = n.split("").reverse().join("");
  /*
   * split() 메서드는 문자열을 배열로 만들어 반환하고,
   * reverse() 메서드는 배열의 순서를 반전하며,
   * join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
   */
  console.log(reverseString);
}

// ---------------------------------------------------------------------

// 문제 17: 놀이기구 키 제한
// 입력으로 주어지는 키가 150이 넘으면 YES, 틀리면 NO를 출력하는 프로그램을 작성하세요.

// 내가 쓴 답안
{
  const height = prompt("키를 입력하세요");
  if (height >= 150) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// 정답
{
  const height = prompt("키를 입력하세요.");
  if (height >= 150) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// ---------------------------------------------------------------------

// 문제18: 평균 점수
// 공백으로 구분하여 국어, 수학, 영어 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 내가 쓴 답안
{
  const score = prompt("점수를 입력하세요.");
  const scores = score.split(" ");
  const sum = (a, b, c) => a + b + c;
  const aveScores = Math.floor(
    sum(Number(scores[0]), Number(scores[1]), Number(scores[2])) / 3
  );
  console.log(aveScores);
}

// 정답
{
  const scores = prompt("세 과목의 점수를 입력하세요.").split(" ");
  let sum = 0;

  for (let i = 0; i < 3; i++) {
    sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
  }
  console.log(Math.floor(sum / 3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.
}

// ---------------------------------------------------------------------

// 문제19: 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
{
  const nums = prompt("숫자 두 개를 입력하세요.").split(" ");
  let a = nums[0];
  let b = nums[1];

  let result = Math.pow(a, b);
  console.log(result);
}

// 정답
{
  const n = prompt("수를 입력하세요.").split(" ");
  console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
}

// ---------------------------------------------------------------------

// 문제20: 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 내가 쓴 답안
{
  const n = prompt("숫자 두 개를 입력하세요.").split(" ");
  let a = parseInt(n[0], 10);
  let b = parseInt(n[1], 10);
  console.log(a / b, a % b);
}

// 정답
{
  const n = prompt("수를 입력하세요.").split(" ");
  const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
  const left = parseInt(n[0], 10) % parseInt(n[1], 10);
  console.log(result, left);
}
