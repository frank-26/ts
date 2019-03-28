interface Alarm {
  alert(): any;
}

interface LightableAlarm extends Alarm {
  lightOn();
  lightOff();
}

interface Light {
  lightOn();
  lightOff();
}

class Door {}

class SecurityDoor extends Door implements Alarm, Light {
  alert() {
    console.log('SecurityDoor alert');
  }
  lightOn() {
  }
  lightOff() {
  }
}

class Car implements Alarm {
  alert() {
    console.log('Car alert');
  }
}

class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
// 一个函数还可以有自己的属性和方法：
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;