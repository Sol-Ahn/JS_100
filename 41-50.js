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
