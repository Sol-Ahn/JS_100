// 문제31: 자바스크립트 자료형의 복잡도
// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

/*선택지
1) arr[i]
2) arr.push(5)
3) arr.slice()
4) arr.pop()
5) arr.includes(5)
*/

// - Big O notation
// O(log n), O(1) > O(n) > O(n log n) > O(n^2) > O(2^n) > O(n!)
// 시간 복잡도 계산 시 가장 복잡한 항을 기준으로 한다.
// O(1)은 상수 시간(Constant Time)으로, size n의 입력이 주어지면, 알고리즘을 수행하는데 하나의 단계만 밟는다.
// - 자바스크립트 배열의 시간복잡도
// lookup => O(1)
// push => O(1)
// search => O(n)
// insert => O(n)
// delete => O(n)

// 내가 쓴 답안
// 3) arr.slice(), 4) arr.pop()
// 이유: slice()은 배열의 요소를 추출하여 새로운 배열로 반환하는 메서드로 시간 복잡도가 O(n)이고,
// arr.pop()은 배열에서 마지막 요소를 제거하고 그 값을 반환하는 메서드로 시간 복잡도가 O(n)이다.

// 정답
// 3) arr.slice() , 5) arr.includes(5)
// 자바스크립트 배열의 시간복잡도에서 관건은 '배열의 순회'입니다.
// slice()는 배열의 요소를 추출할 때, includes는 특정 요소를 검색할 때 배열을 순회합니다.

// -----------------------------------------------------------------------------------

// 문제32: 문자열 만들기
// 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.

// - 입출력
// 입력 : 안녕하세요. 저는 백엔드개발자 취업준비생 안솔입니다.
// 출력 : 5

// 내가 쓴 답안
{
  const data = prompt("문자열을 입력하세요.").split(" ");
  const word = data.length;

  console.log(word);
}

// 정답
{
  const string = prompt("문자열을 입력하세요.").split(" ");

  console.log(string.length);
}

// -----------------------------------------------------------------------------------

// 문제33: 거꾸로 출력하기
// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 내가 쓴 답안
{
  const nums = prompt("숫자들을 입력하세요.").split(" ");
  const result = nums.reverse().toString();
  console.log(result.replaceAll(",", " "));
}

// 정답
{
  const data = prompt("숫자를 입력하세요.").split(" ").reverse();
  let result = "";

  for (let i = 0; i < data.length; i++) {
    result += data[i];
  }

  console.log(result);
}

// -----------------------------------------------------------------------------------

// 문제34: sort 구현하기
// 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보세요.
// (키는 공백으로 구분하여 입력됩니다.)

// 내가 쓴 답안
{
  const heights = prompt("키를 입력하세요.").split(" ");

  function compareFunction(a, b) {
    return a - b;
  }

  if (heights.toString() === heights.sort(compareFunction).toString())
    console.log("YES");
  else console.log("NO");
}

// 정답
{
  const unsorted = prompt("키를 입력하세요");
  let sorted = "";

  sorted = unsorted
    .split(" ")
    .sort(function (a, b) {
      return a - b;
    })
    .join(" ");

  if (unsorted === sorted) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// -----------------------------------------------------------------------------------

// 문제35: Factory 함수 사용하기
// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들어보세요.

// 내가 쓴 답안
{
  // two()에 들어가는 파라미터가 base value가 되고, onde()에 들어가는 파라미터가 exponent value가 된다.
  function one(n) {
    function two() {
      result = Math.pow(n, n);
      return result;
    }
    return two;
  }
  const a = one(2);
  const b = one(3);
  const c = one(4);
  console.log(a(10));
  console.log(b(10));
  console.log(c(10));
}

// 정답
{
  function one(n) {
    function two(value) {
      const sq = Math.pow(value, n);
      return sq;
    }
    return two;
  }

  const a = one(2);
  const b = one(3);
  const c = one(4);

  console.log(a(10)); // 실질적으로 a(10)는 two(10)를 의미함.
  console.log(b(10));
  console.log(c(10));
}

// -----------------------------------------------------------------------------------

// 문제36: 구구단 출력하기
// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// - 입출력
// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

// 내가 쓴 답안
{
  const input = prompt("숫자를 입력하세요.");
  let gugudan = [];

  for (let i = 1; i < 10; i++) {
    data = input * i;
    gugudan.push(data);
  }
  console.log(gugudan.join(" "));
}

// 정답
{
  const num = prompt("1 ~ 9까지의 숫자 중 하나를 입력하세요.");
  let result = "";

  for (let i = 1; i <= 9; i++) {
    result += i * num + " ";
  }

  console.log(result);
}

// -----------------------------------------------------------------------------------

// 문제37: 반장선거
// 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하세요.

// - 입출력
// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진
//
// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

// 내가 쓴 답안

{
  const candidates = prompt("학생들이 뽑은 후보들을 입력하세요.").split(" ");
  const set = Array.from(new Set(candidates));

  // 각 후보별 표의 수
  const vote = candidates.reduce((allCandidates, candidate) => {
    if (candidate in allCandidates) {
      allCandidates[candidate] += 1;
    } else {
      allCandidates[candidate] = 1;
    }

    return allCandidates;
  }, {});

  // 선출된 후보
  const maxCondidate = (values) => {
    let max = 0;
    let leader = null;

    for (const [key, value] of Object.entries(values)) {
      if (max < value) {
        max = value;
        leader = key;
      }
    }
    return leader;
  };

  // 선출된 후보의 표
  const maxVote = Math.max.apply(null, Object.values(vote));

  // 결과
  console.log(
    `${maxCondidate(vote)}(이)가 총 ${maxVote}표로 반장이 되었습니다.`
  );
}

// 정답
{
  const array = prompt("이름을 입력해주세요.").split(" ");
  let result = {};
  let winner = "";

  for (let index in array) {
    let val = array[index];
    result[val] = result[val] === undefined ? 1 : (result[val] += 1);
  }

  winner = Object.keys(result).reduce(function (a, b) {
    return result[a] > result[b] ? a : b;
  });

  console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
}

// -----------------------------------------------------------------------------------

// 문제38: 호준이의 아르바이트
// 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.
// 1위 ~ 3위 학생은 여러명일 수 있고 1위 ~ 3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

// - 입출력
// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

// 내가 쓴 답안
{
  const scores = prompt("학생들의 점수를 입력하세요.").split(" ");
  // 입력된 점수 내림차순 정렬
  const candy = scores.sort((a, b) => {
    return b - a;
  });

  // 중복없는 점수 배열
  const candySet = Array.from(new Set(candy));

  // 1위 ~ 3위 점수
  let first = candySet[0];
  let second = candySet[1];
  let third = candySet[2];

  const candyStudents = [];

  // 중복을 포함한 1위 ~ 3위 점수 배열
  for (let i = 0; i < candy.length; i++) {
    if (candy[i] === first || candy[i] === second || candy[i] === third) {
      candyStudents.push(candy[i]);
    }
  }
  console.log(candyStudents);
  console.log(candyStudents.length); // 사탕을 받는 학생들의 수
}

// 정답
// 중복점수를 포함하지 않는다.
{
  const scores = prompt("점수입력")
    .split(" ")
    .map(function (n) {
      return parseInt(n, 10);
    });

  scores.sort((a, b) => {
    return a - b;
  });

  let count = 0;
  let arr = [];

  while (arr.length < 3) {
    let n = scores.pop();
    if (!arr.includes(n)) {
      arr.push(n);
    }
    count += 1;
  }

  console.log(count);
}

// -----------------------------------------------------------------------------------

// 문제39: 오타 수정하기
// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성하세요.

// - 입출력
// 입력 : querty
// 출력 : euerty
// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

// 내가 쓴 답안
{
  const data = prompt("문장을 입력하세요.");
  const fixedData = data.replaceAll("q", "e");
  console.log(fixedData);
}

// 정답
{
  // 함수 사용
  const word = prompt("입력하세요.");

  function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
  }

  console.log(replaceAll(word, "q", "e"));

  // 정규식 사용
  //   const word = prompt("입력하세요.");

  //   console.log(word.replace(/q/gi, "e"));
  //
}

// -----------------------------------------------------------------------------------

// 문제40: 놀이동산에 가자
// 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.
// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께 타는 사람들의 수 n이 주어집니다.
// 그 다음 차례대로 탑승할 사람들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.
// 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성하세요.

// - 입출력
// 입력
// 50
// 5
// 20
// 20
// 20
// 20
// 20

// 출력
// 2

// 내가 쓴 답안
{
  const limitedWeight = parseInt(prompt("제한 무게"), 10);
  const n = parseInt(prompt("탑승할 사람의 수"), 10);

  const weights = [];
  let i = 1;
  while (i <= n) {
    const weight = parseInt(prompt("탑승할 사람들의 무게"), 10);
    weights.push(weight);
    i += 1;
  }

  // 탑승할 수 있는 사람의 수
  let sum = 0;
  let count = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    while (sum <= limitedWeight) {
      count += 1;
      break;
    }
  }
  console.log(count);
}

// 정답
{
  let total = 0;
  let count = 0;
  const limit = prompt("제한 무게를 입력하세요.");
  const n = prompt("인원수를 입력하세요.");

  for (let i = 1; i <= n; i++) {
    total += parseInt(prompt("무게를 입력해주세요."), 10);
    if (total <= limit) {
      count = i;
    }
  }

  console.log(count);
}
