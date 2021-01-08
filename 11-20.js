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
