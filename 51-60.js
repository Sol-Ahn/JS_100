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

// --------------------------------------------------------------------------------------

// 문제54: 연속되는 수
// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하세요.

// 입출력
/*
입력1: 1 2 3 4 5
출력1: YES

입력2: 1 4 2 6 3
출력2: NO
*/

// 내가 쓴 답안 => 판별 실패..
{
  const stamp = prompt("스탬프 숫자")
    .split(" ")
    .map((n) => parseInt(n, 10));

  for (let i = 0; i < stamp.length; i++) {
    if (stamp[i + 1] === stamp[i] + 1) console.log("YES");
    else console.log("NO");
  }
}
// 정답 => 함수 활용 잊지 말자!
{
  function sol(l) {
    l.sort((a, b) => {
      // 오름차순 정렬
      return a - b;
    });

    for (let i = 0; i <= l.length - 1; i++) {
      if (l[i] + 1 !== l[i + 1]) {
        // 연속되는 숫자 판별
        return "NO";
      } else {
        return "YES";
      }
    }
  }

  const n = prompt("입력해주세요")
    .split(" ")
    .map((n) => parseInt(n, 10));

  console.log(sol(n));
}

// --------------------------------------------------------------------------------------

// 문제55: 하노이의 탑
// 하노이의 탑은 A, B, C 3개의 기둥과 기둥에 꽂을 수 있는 N 개의 원판으로 이루어져 있습니다. 이 게임에서 다음의 규칙을 만족해야 합니다.
/*
1. 처음에 모든 원판은 A 기둥에 꽂혀 있다.
2. 모든 원판의 지름은 다르다.
3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다.
4. 작은 원반 위에 큰 원반을 놓을 수 없다.
5. 한 번에 하나의 원판(가장 위에 있는 원판)만을 옮길 수 있다.
*/

// 모든 원반을 옮기기 위해 실행되어야 할 최소 원반 이동 횟수를 계산하는 프로그램을 완성해주세요.

// 내가 쓴 답안 => fail...너무 어렵다.
{
  const route = [];

  function hanoi(num, start, end, temp) {
    //원판이 한 개일 때에는 바로 옮기면 됩니다.
    if (num === 1) {
      route.push([start, end]);
      return NaN;
    }

    //원반이 n-1개를 경유기둥으로 옮기고
    hanoi(num - 1, start, temp, end);
    //가장 큰 원반은 목표기둥으로
    route.push(start, end); // 배열로 push해야 함!
    //경유기둥과 시작기둥을 바꿉니다.
    hanoi(num - 1, temp, end, start);
  }

  hanoi(3, "A", "B", "C");
  console.log(route); // [["A", "B"], "A", "C", ["B", "C"], "A", "B", ["C","A"], "C", "B", ["A", "B"]]
  console.log(route.length); // 10
}

// 정답
{
  const route = [];

  function hanoi(num, start, end, temp) {
    //원판이 한 개일 때에는 바로 옮기면 됩니다.
    if (num === 1) {
      route.push([start, end]);
      return NaN;
    }

    //원반이 n-1개를 경유기둥으로 옮기고
    hanoi(num - 1, start, temp, end);
    //가장 큰 원반은 목표기둥으로
    route.push([start, end]);
    //경유기둥과 시작기둥을 바꿉니다.
    hanoi(num - 1, temp, end, start);
  }

  hanoi(3, "A", "B", "C");
  console.log(route); // [["A", "B"], ["A", "C"], ["B", "C"], ["A", "B"], ["C", "A"], ["C", "B"], ["A", "B"]]
  console.log(route.length); // 7
}
