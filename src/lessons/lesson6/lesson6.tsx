import React from 'react';


export const Lesson6 = () => {
  console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA


  // class Test {
  //   name: string;
  //   // hi: () => void;
  //
  //   constructor(name: string) {
  //     this.name = name;
  //     // this.hi = function() {
  //     //  return 'hello';
  //     // };
  //       }
  //       hi(){
  //             return 'hello';
  //       }
  // }
  //
  // let newTest = new Test('Igor');
  // console.log(newTest.hi());

  //----------------------------------------------------------------------------------
//интерфейс

  // interface Iperson{
  //   name: string,
  //   age: number,
  //   say: Function
  // }
  // interface Iperson2{
  //   fullName: string,
  // }
  // class Test implements Iperson,Iperson2{
  //   name: string;
  //   age: number;
  //   fullName: string
  //
  //   constructor(name: string,age: number, fullName: string) {
  //     this.name = name;
  //     this.age=age;
  //     this.fullName=fullName
  //    }
  //   hi(){
  //     return 'hello';
  //   }
  //   say(){
  //     return 'I say'
  //   }
  //
  // }
  //
  // let newTest = new Test('Igor',42,'Yudintsev');
  // console.log(newTest.say());

  //------------------------------------------------------------
//статические методы не могут вызываться как обычные
//
//   class Test  {
//     name: string;
//     static yo='YO!'
//
//     constructor(name: string) {
//       this.name = name;
//
//     }
//        say(){
//       return 'I say'
//     }
//
//     static sayY0(){
//       return this.yo
//     }
//
//   }
//
//   let newTest = new Test('Igor');
//   console.log(newTest);

  //-------------------------------------------------------------
//приватные свойства-доступны только внутри класса

  // class Test  {
  //   name: string;
  //   private car='Audi';
  //
  //   constructor(name: string) {
  //     this.name = name;
  //
  //   }
  //   say(){
  //     return this.car
  //   }
  // }
  //
  // let newTest = new Test('Igor');
  // console.log(newTest.say());

//---------------------------------------
//
//   class Animal{
//     eat(){
//       console.log('Animal is eating');
//     }
//   }
//
//   class Monkey extends Animal{
//     name:string;
//
//     constructor(name:string) {
//       super();
//       this.name=name
//     }
//     eat(){
//       console.log('Animal is eating222');
//       super.eat()//при помощи super связался с батей
//     }
//
//   }
// let newAnimal= new Monkey('Booba')
//   console.log(newAnimal.eat());

// Task 01
// Дан интерфейс класса транспортное средство. На его основе реализуйте класс vehicle.
// - максимальная скорость по умолчанию ограничена в 150
// - необходимо предусмотреть: нельзя завести рабочий двигатель, как и остановить не рабочий.
// - нельзя остановить стоящее транспортное средство и т.д. Чем больше тем лучше)
// - метод startMoving должен раз в секунду выводить текущую скорость, при это увеличивать ее на произвольное число
// скорость не должна увеличиться больше чем максимальная скорость. Выводить в консоль предупреждение о большой скорости,
// выводить в консоль сообщение о достижении максимальной скорости.
// - метод stopMoving должен раз в секунду выводить текущую скорость, при это уменьшать ее на произвольное число
// (можно на тоже что и метод startMoving), скорость не может быть меньше 0. Выводить сообщение о остановки.
// создайте экземпляр класса и проверьте что все работает

  interface IVehicle {
    isStartEngine: boolean;
    isMoving: boolean;
    speed: number;
    startEngine: () => void;
    stopEngine: () => void;
    startMoving: (maxSpeed?: number) => void;
    stopMoving: () => void;
  }

// Task 02
// на базе класса Vehicle реализовать класс Motorbike у которого максимальная скорость 200 и
// есть свой метод burnOut который выводит в консоль 'Zoom zoom zoom zoom zoom...'

  // class Test{
  //   param1:string;
  //   param2:string;
  //
  //   constructor(param1:string='Hellow',param2:string='Buy') {
  //     this.param1=param1;
  //     this.param2=param2;
  //
  //   }
  // }


// Task 03
// на базе класса Vehicle реализовать класс Car у которого максимальная скорость 180 и
// есть свой метод beep который выводит в консоль 'Beeeeeeeeeeeep...'
// Приведите в движение мотоцикл и автомобиль


// Task 04
// Создать класс Warrior который реализует интерфейс IWarrior.
// метод attack возвращает значение damage
// метод attackWithBonus оставить пустым
// у класса должен быть статический метод battle который принимает 2 аргумента (объекты с интерфейсом IWarrior)
// метод battle должен реализовывать поочередные ходы до тех пор пока не останется в живых только один.
// выбор кто ходит первым должен быть случайным.
// на каждом ходе должна выводиться информация о нанесенном уроне и остатке здоровья у противника
// в конце написать кто победил

  interface IWarrior {
    health: number;
    damage: number;
    defence: number;
    attack: () => number;
    attackWithBonus: Function
  }


// Task 05
// На базе класса из // Task 04 создать 2 класса Solder и Wizard
// реализовать обоим классам метод attackWithBonus
// у класса Solder есть вероятность (10%) нанести двойной урон
// у класса Wizard есть вероятность (50%) нанести тройной урон

// Task 06
// Устройте несколько драк. Подумайте о сложности нахождения баланса


  interface ICistomer {
    name: string
    surname: string
    address: string
    account: number
  }

  class Customer implements ICistomer {
    private _name: string;
    private _surname: string;
    private _address: string;
    private _account: number;

    constructor(name: string, surname: string, address: string, account: number) {
      this._name = name;
      this._surname = surname;
      this._address = address;
      this._account = account;
    }

    set name(n) {
      this._name = n;
    }

    get name() {
      return this._name;
    }

    set surname(n) {
      this._surname = n;
    }

    get surname() {
      return this._surname;
    }

    set address(n) {
      this._address = n;
    }

    get address() {
      return this._address;
    }

    set account(acc) {
      this._account = acc;
    }

    get account() {
      return this._account;
    }

    print() {
      console.log(`${this._name} ${this._surname},Address - ${this._address}, Account - ${this._account}`);
    }

    static sort(c1: ICistomer, c2: ICistomer) {
      if (c1.name > c2.name) {
        return 1;
      } else if (c1.name < c2.name) {
        return -1;
      } else {
        return 0;
      }
    }
  }

  let customs=[];
  customs.push(new Customer('Ivan', 'Ivanovich','Minsk', 12345 ))
  customs.push(new Customer('Petr', 'Petrovich','Moskow', 54321 ))
  customs.push(new Customer('Alex', 'Aleksandrovich','Kiev', 55311 ))

  // customs[0].print()

  customs.sort(Customer.sort)
  console.log(  customs.sort(Customer.sort));

// just a plug
  return (
    <div>
      {

      }
    </div>
  );
};

