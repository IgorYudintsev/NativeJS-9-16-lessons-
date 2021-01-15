import React from 'react';
import { log } from 'util';


const Lesson2 = () => {
  console.log('lesson2');

  // Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

//----------------------------------------------------------------------------------------------------------------------
// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
// function sum(n: number) {
//   return function(n2: number) {
//     return n + n2;
//   };
// }
// console.log(sum(3)(6));
// const sum = (n: number) => {
//   return (n2: number) => {
//     return n + n2;
//   };
// };
// console.log(sum(3)(6));


//-------------------------------------------------------------------------------------------------------
  // Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

//   function makeCounter() {
//     let count = 0;
//     return function() {
//       return ++count;
//     };
//   }
//   const counter = makeCounter();
//   console.log(counter());
//   console.log(counter());
//   const counter2 = makeCounter();
//   console.log(counter2());
//   console.log(counter());

//===========================================================================================================================
  // Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

  // function makeCounter(n: number) {
  //   return {
  //     increase: () => ++n,
  //     decrease: () => --n,
  //     reset: () => {
  //       n = 0;
  //       return n;
  //     },
  //     set: (num: number) => {
  //       n = num;
  //       return num;
  //     },
  //   };
  // }
  //
  // const counter = makeCounter(5);
  // console.log(counter.increase());//6
  // console.log(counter.increase());//7
  // console.log(counter.reset());//0
  // console.log(counter.decrease());//-1
  // console.log(counter.set(100));//100
  // console.log(counter.increase());//101
  //
  // const counter2 = makeCounter(1);
  // console.log(counter2.increase());//2
  // console.log(counter2.increase());//3

//======================================================================================================================
// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

  // function superSum(num: number) {
  //   if (num == 0) return 0;
  //   if (num == 1) return (n: number) => n;//если всего одно число-его и возвращаем
  //
  //   let _arguments: number[] = [];
  //
  //   function helper(...args: number[]) {//заливаем  аргументы в массив при помощи спред оператора
  //     _arguments = [..._arguments, ...args];
  //     if (_arguments.length >= num) {
  //       _arguments.length = num;//чтобы не считались лишние аргументы
  //       return _arguments.reduce((acc, number) => acc + number);
  //     } else {
  //       return helper;//запускаем функцию по новой пока не удовлетворит _arguments.length >= num(стр.102)
  //     }
  //   }
  //
  //   return helper;
  // }

  //@ts-ignore
  // console.log(superSum(0));
  //@ts-ignore
  // console.log(superSum(3)(2)(5)(3));
  // //@ts-ignore
  // console.log(superSum(3)(2)(5, 3));
  // //@ts-ignore
  // console.log(superSum(3)(2, 5, 3));
  // //@ts-ignore
  // console.log(superSum(3)(2, 5)(3));
  // //@ts-ignore
  // console.log(superSum(3)(2, 5)(3, 9));

//======================================================================================================================
// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//   sumTo(1) = 1
//   sumTo(2) = 2 + 1 = 3
//   sumTo(3) = 3 + 2 + 1 = 6
//   sumTo(4) = 4 + 3 + 2 + 1 = 10 ///4+sumTo(4-1)+sumTo(4-1-1)
// ...
//   sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

  //@ts-ignore
  // function sumTo(n: number) {
  //   if (n === 1) return 1;
  //   return n +sumTo(n-1)
  // }
  // console.log(sumTo(4));

  //хвостовая рекурсия
  //выполняется, получается результат, запускается поновой, а про старую забывает
  //т.е. результат суммируется в асс
  // function sum(n:number,acc:number) {
  //   if(n===1)return n+acc;
  //   return sum(n-1,acc+n);
  // }
  //    console.log(sum(4,0));


  function factorial(n: number) {
    debugger
    if (n === 1) return 1;
      return factorial(n - 1) * n;
  }

  console.log(factorial(5));//120

  // function factorial2(n:number,acc: number) {
  //   if (n === 1) return 1*acc;
  //   return  factorial2(n-1,n*acc);
  // }
  // console.log(factorial2(5,1));//120

  // function fibonacci(n: number) {
  //   let first = 0;
  //   let second = 1;
  //   if (n === 0) return first;
  //   if (n === 1) return second;
  //   let count = 2;
  //   function inner():number {
  //     if (count === n) return first + second;
  //     let temp = first + second;
  //     first = second;
  //     second = temp;
  //     count+=1;
  //     return inner()
  //   }
  //   return inner();
  // }
  // console.log(fibonacci(3)); // 2
  // console.log(fibonacci(7)); // 13
  // console.log(fibonacci(77)); // 5527939700884757

  //наоборот от большего к меньшему
  // function fibonacci(n: number) {
  //   let first = 0;
  //   let second = 1;
  //   if (n === 0) return first;
  //   if (n === 1) return second;
  //   // let count = 2;
  //   function inner():number {
  //     if (n === 2) return first + second;
  //     let temp = first + second;
  //     first = second;
  //     second = temp;
  //     n-=1;
  //     return inner()
  //   }
  //   return inner();
  // }
  // console.log(fibonacci(3)); // 2
  // console.log(fibonacci(7)); // 13
  // console.log(fibonacci(77)); // 5527939700884757
//
//    вывод односвязанного
//   let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  //  //@ts-ignore
  //  function recurs(list) {
  //    console.log(list.value);
  //       if(list.next){
  //         return recurs(list.next)
  //       }
  //  }
  //  //@ts-ignore
  // recurs(list) ;


  return (<div>'lesson2'</div>);
};


export default Lesson2;

