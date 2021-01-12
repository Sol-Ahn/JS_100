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
