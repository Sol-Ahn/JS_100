// 문제41: 소수 판별
// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

// 내가 쓴 답안
// '1'과 '2'를 처리하지 못하는 로직
{
  const num = parseInt(prompt("숫자를 입력하세요."), 10);
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log("NO");
      break;
    } else {
      console.log("YES");
      break;
    }
  }
}

// 정답
{
  const num = prompt("숫자를 입력하세요.");

  function check_prime(num) {
    for (let i = 2; i < num; i++) {
      const result = num % i;
      if (result === 0) {
        console.log("NO");
        return false;
      }
    }
    if (num === 1) {
      console.log("NO");
      return;
    }
    console.log("YES");
  }

  check_prime(num);
}

// -----------------------------------------------------------

// 문제42: 2021년
/*
2021년 1월 1일은 금요일입니다. 2021년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2021년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

- 제한 조건
설정상 2021년은 윤년입니다.
2021년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

// 내가 쓴 답안
{
  const a = prompt("월 입력");
  const b = prompt("일 입력");

  function getDate(month, day) {
    let week = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
    const date = new Date(`2021-${month}-${day}`).getDay();
    const today = week[date];

    return today;
  }

  console.log(getDate(a, b));
}

// 정답
{
  const month = prompt("월을 입력하세요.");
  const date = prompt("일을 입력하세요.");

  function solution(a, b) {
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const x = new Date("2021-" + a + "-" + b);
    return day[x.getDay()];
  }
  console.log(solution(month, date));
}

// -----------------------------------------------------------

// 문제43: 10진수를 2진수로
// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

// 내가 쓴 답안
{
  const num = parseInt(prompt("숫자를 입력하세요."), 10);
  console.log(num.toString(2));
}

// 정답
{
  let a = prompt("10진수를 입력해주세요.");
  let b = [];
  let result = "";

  while (a) {
    b.push(a % 2);
    a = parseInt(a / 2, 10);
  }
  b.reverse();

  b.forEach((n) => {
    result += n;
  });

  console.log(result);
}

// -----------------------------------------------------------

// 문제44: 각 자리수의 합
// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

/* - 입출력
    입력 : 18234
    출력 : 18

    입력 : 3849
    출력 : 24
*/

// 내가 쓴 답안
{
  const num = prompt("양의 정수를 입력하세요.").split("");
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i], 10);
  }

  console.log(sum);
}

// 정답
{
  let n = prompt("숫자를 입력하세요.");
  let sum = 0;

  while (n !== 0) {
    sum += n % 10;
    console.log(sum);
    n = Math.floor(n / 10);
    console.log(n);
  }

  console.log(sum);
}

// -----------------------------------------------------------

// 문제45: getTime()함수 사용하기
// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터
// 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
// 이를 이용하여 현재 연도(2021)를 출력해보세요.

// 내가 쓴 답안
{
  const date = new Date();
  console.log(`현재 연도는 ${date.getFullYear()} 입니다.`);
}

// 정답
{
  const d = new Date();

  let year = d.getTime();
  year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970;
  // 60초 * 60분 * 24시간 * 365일 * 1000

  console.log(year);
}

// -----------------------------------------------------------

// 문제46: 각 자리수의 합 2
// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

// 내가 쓴 답안
// 자릿수를 고려하지 않은 로직
{
  let nums = [];
  for (let i = 0; i < 20; i++) {
    nums[i] = i + 1;
  }

  let sum = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
  }

  console.log(sum); // 210
}

// 정답
{
  let arr = [];
  let sum = 0;

  for (let i = 0; i < 20; i++) {
    arr[i] = i + 1;
  }

  arr.forEach((n) => {
    while (n !== 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
  });

  console.log(sum); // 102
}

// -----------------------------------------------------------

// 문제47: set 자료형의 응용
// 아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.
const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

// 내가 쓴 답안
{
  let set = new Set();
  for (person in people) {
    set.add(person); // key값을 담음
  }

  console.log(set.size);
}

// 정답
{
  let result = new Set();
  for (let key in people) {
    result.add(people[key]); // value값을 담음
  }
  console.log(result.size); // size는 set 객체에 있는 값의 개수를 반환
}

// -----------------------------------------------------------

// 문제48: 대소문자 바꿔서 출력하기
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// - 입출력
// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

// 내가 쓴 답안
{
  const string = prompt("문자열을 입력하세요.").split("");
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      string[i] = string[i].toLowerCase();
    } else if (string[i] === string[i].toLowerCase()) {
      string[i] = string[i].toUpperCase();
    }
  }
  console.log(string.join(""));
}

// 정답
{
  let a = prompt("문자열을 입력하세요.");
  let b = [];
  let s = "";

  for (let i = 0; i < a.length; i++) {
    //toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환
    if (a[i] === a[i].toLowerCase()) {
      b.push(a[i].toUpperCase());
    } else {
      b.push(a[i].toLowerCase());
    }
  }

  for (let j = 0; j < b.length; j++) {
    s += b[j];
  }

  console.log(s);
}

// -----------------------------------------------------------

// 문제49: 최댓값 구하기
// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어집니다. 주어진 숫자들 중 최댓값을 반환하세요.
// - 입출력
// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

// 내가 쓴 답안 - Math.max 함수 사용
{
  const data = prompt("숫자 10개를 입력하세요.").split(" "); // 데이터타입 고려 X
  const max = Math.max(...data);
  console.log(max);
}

// 정답 - 정렬함수 사용
{
  let numbers = prompt("10개의 숫자를 입력하세요")
    .split(" ")
    .map((n) => {
      return parseInt(n, 10);
    });

  numbers.sort((a, b) => {
    return b - a;
  });

  console.log(numbers[0]);
}

// -----------------------------------------------------------

// 문제50: 버블정렬 구현하기
// 아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.

// 내가 쓴 답안
{
  function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
      // 빈칸을 채워주세요.
      for (let j = 0; j < result.length - 1 - i; j++) {
        if (result[j] > result[j + 1]) {
          //빈칸을 채워주세요.
          let swap = result[j];
          result[j] = result[j + 1];
          result[j + 1] = swap;
        }
      }
    }
    return result;
  }

  const items = prompt("입력해주세요.")
    .split(" ")
    .map((n) => {
      return parseInt(n, 10);
    });

  console.log(bubble(items));
}

// 정답
{
  function bubble(arr) {
    let result = arr.slice(); // 원본 배열 복사

    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - i; j++) {
        if (result[j] > result[j + 1]) {
          let temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }
    return result;
  }

  const items = prompt("입력해주세요.")
    .split(" ")
    .map((n) => {
      return parseInt(n, 10);
    });

  console.log(bubble(items));
}
