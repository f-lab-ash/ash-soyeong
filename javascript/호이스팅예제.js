/**
 * 함수 호이스팅 예시
 */

// ====================
// 1번째 예제
count();
var count = function () {
  console.log("count");
};

// ====================
// 2번째 예제
var count = function () {
  console.log("count");
};
count();

// ====================
// 3번째 예제
count();
let count = function () {
  console.log("count");
};

// ====================
// 4번째 예제
count();
function count() {
  console.log("count");
}

// ====================
// 5번째 예제
function count() {
  console.log("count");
}
count();

// ====================
// 6번째
var test = function () {
  return 1;
};
console.log(test());

function test() {
  return 2;
}

console.log(test());
