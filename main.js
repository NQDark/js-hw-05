// task 1
// class Account {
//     constructor({ login, email }) {
//       this.login = login;
//       this.email = email;
//     }

//     getInfo() {
//         console.log(`Login: ${this.login}, Email: ${this.email}`)
//     }
//   }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo() // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });
// poly.getInfo()// Login: Poly, Email: poly@mail.com

// task 2

// class User {
//     constructor({ name, age, followers }) {
//       this.name = name;
//       this.age = age;
//       this.followers = followers;
//     }

//     getInfo() {
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
//     }
//   }

// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
//   });

//   mango.getInfo(); // User Mango is 2 years old and has 20 followers

//   const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
//   });

//   poly.getInfo(); // User Poly is 3 years old and has 17 followers

// task 3

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items
//     }
//     addItem(item) {
//         if (this.items.includes(item)) {
//             console.log(`${item} уже есть в наличии`)
//         } else {
//             this.items.push(item)
//         }
//     }
//     removeItem(item) {
//         const indexItem = this.items.indexOf(item)
//         if (indexItem !== -1) {
//             this.items.splice(indexItem, 1)
//         } else {
//             console.log(`${item} нет в наличии`)
//         }
//     }
// }

// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// task 4
// class StringBuilder {
//     constructor(_value) {
//         this._value = _value;
//     }
//     get value() {
//         return this._value;
//     }
//     append(str) {        
//         this._value = this._value + str
//     }
//     prepend(str) {        
//         this._value = str + this._value
//      }
//      pad(str) {
//         this._value = str + this._value + str
//      }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// task 5
class Car {
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */
    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`)

    }
    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
        this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;
        this.price = price;
    }

    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */
    getPrice() {
        return this.price;
    }
    setPrice(newPrice) {
        return this.price = newPrice;
    }
    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        return this.isOn = true;
    }

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this.speed = 0;
        return this.isOn = false;
    }

    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        if (value <= this.maxSpeed) {
            return this.speed += value;
        }
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        if (this.speed - value > 0) {
            return this.speed -= value;
        }
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        if (this.isOn === true) {
            return this.distance += hours * this.speed;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000


