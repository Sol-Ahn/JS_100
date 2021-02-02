// 문제51: merge sort를 만들어보자
// 다음 코드의 빈칸을 채워 병합정렬을 완성해보세요.

// 내가 쓴 답안
{
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2); // 배열을 반으로 쪼갬
    const left = arr.slice(0, mid); // 쪼갠 배열의 왼쪽
    const right = arr.slice(mid); // 쪼갠 배열의 오른쪽

    return merge(mergeSort(left), mergeSort(right)); // 재귀적으로 쪼개고 합친 배열
  }

  function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        // left 배열과 right 배열의 첫 번째 요소를 비교
        result.push(left.shift()); // 더 작은 수를 left 배열에 삽입
      } else {
        result.push(right.shift());
      }
    }
    // 어느 한 쪽의 배열이 더 많이 남았다면 나머지 요소를 모두 삽입
    while (left.length) {
      /*빈칸을 채워주세요*/
      result.push(left.shift());
    }
    while (right.length) {
      /*빈칸을 채워주세요*/
      result.push(right.shift());
    }

    return result;
  }

  const array = prompt("배열을 입력하세요")
    .split(" ")
    .map((n) => parseInt(n, 10));

  console.log(mergeSort(array));
}

// 정답
{
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }

    return result;
  }

  const array = prompt("배열을 입력하세요")
    .split(" ")
    .map((n) => parseInt(n, 10));

  console.log(mergeSort(array));
}

// ---------------------------------------------------------------------------------------

// 문제52: quick sort
// 다음 빈 칸을 채워 퀵 정렬을 완성하세요.

// 내가 쓴 답안
{
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }

  const array = prompt("배열을 입력하세요")
    .split(" ")
    .map((n) => parseInt(n, 10));

  console.log(quickSort(array));
}

// 정답
{
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[0]; // 기준점
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }

  const array = prompt("배열을 입력하세요")
    .split(" ")
    .map((n) => parseInt(n, 10));

  console.log(quickSort(array));
}

// --------------------------------------------------------------------------------------

// 문제53: 괄호 문자열
/*
괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말합니다. 
그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 하겠습니다.
(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열입니다.
(해당 문제에서는 소괄호만 판별하지만, 중괄호와 대괄호까지 판별해보세요.)
입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보세요.
*/

// 내가 쓴 답안 => 판별 실패..
{
  const symbol = prompt("괄호 기호를 입력하세요").split("");
  for (let i = 0; i < symbol.length; i++) {
    if (symbol[i] === "(" && (symbol[i + 1] === "(" || symbol[i + 1] === ")")) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}

// 정답
{
  function math(e) {
    // 괄호의 짝을 판별하는 함수
    let count = 0;

    //괄호 개수가 같지 않으면 false
    for (let i = 0; i < e.length; i++) {
      if (e[i] === "(") {
        // 열린 괄호면 count 증가
        count++;
      }
      if (e[i] === ")") {
        // 닫힌 괄호면 count 감소
        count--;
      }
    }
    if (count !== 0) {
      // 최종 count가 0이 아니면 괄호의 짝이 맞지 않는 것
      return false;
    }

    let 괄호 = [];
    for (let i in e) {
      // 열린 괄호면 괄호 배열에 삽입
      if (e[i] === "(") {
        괄호.push("(");
      }
      // 닫힌 괄호면 괄호 배열에서 삭제
      if (e[i] === ")") {
        if (괄호.length === 0) {
          // 여기서 괄호 배열의 길이가 0이면 열린 괄호가 없는 상태이므로 false
          return false;
        }
        괄호.pop();
      }
    }
    return true; // 괄호의 짝이 맞으면 true 반환
  }

  const n = prompt("입력해주세요.").split("");

  if (math(n) === true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
