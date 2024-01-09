
// ====================
// 1번째 예시
const obj = {
  name: "John",
  sayName() {
    // obj.sayName()을 호출하는 순간 "동적"으로 결정되며 함수를 호출한 객체인 obj가 this이다. 
    console.log(this.name); // John
  },
  sayNameArrow: () => {
    // 화살표함수는 항상 상위 스코프를 "정적"으로 가리키며, window가 this이다.
    console.log(this.name);// undefined
  },
};
obj.sayName();
obj.sayNameArrow();

// ====================
// 2번째 예시
"use strict";
function myFunction() {
  return this;
}

console.log(myFunction());// undefined

var count = 0;
function addCount() {
  this.count = 100;// cannot set of properties of undefined ~~ 
  count++;
}
addCount();
// use strict 모드가 아닐 때는 count = 1이 출력된다.
console.log(count);

// ====================
// 3번째 예시 (이벤트 핸들러)
var btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  console.log(this);// btn을 가리킨다.
});

// ====================
// 4번째 예시 (비동기 함수)
class Counter {
  constructor() {
    this.count = 0;
  }

  start() {
    console.log(this); // Count 클래스

    setInterval(function () {
      /**
       * 일반함수의 콜백이 setInterval에 호출
       * setInterval은 Web API이므로 여기서의 this는 Window가 된다. 
       */
      console.log(this); // Window
      console.log(this.count++); // NaN
    }, 1000);

    setInterval(() => {
        /**
         * 화살표 함수의 this는 상위 스코프를 가리키므로 Counter 객체를 가리킨다
         */
      console.log(this);// Counter
      console.log(this.count++);// 1, 2, 3 ...
    }, 1000);
  }
}

const counter = new Counter();
