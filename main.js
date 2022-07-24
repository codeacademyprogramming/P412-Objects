// GET, SET, DELETE, UPDATE

// const propertyName = "firstname";
// const user = {
//   firstname: "Aydan",
//   lastname: "Nuriyeva",
//   age: 18,
//   speciality: "Software developer",
// };

// const userCopy = { ...user };

// userCopy[propertyName] = "Aygun";

// delete user.speciality;
// delete userCopy.speciality;

// const user = {
//   firstname: "Agil",
//   lastname: "Atakishiyev",
//   age: 23,
//   speciality: "Frontend Engineer",
// };

// Object.keys(user); ["firstname", "lastname", "age", "speciality"]

// Object.values(user); ['Agil', 'Atakishiyev', 23, 'Frontend Engineer']

// Object.entries(user)  [['firstname', 'Agil'], ['lastname', 'Atakishiyev'], ['age', 23], ['speciality', 'Frontend Engineer']];

// const userKeys = Object.keys(user); // ["firstname", "lastname", "age", "speciality"];
// userKeys.forEach(function (userKey) {
//   console.log(userKey, "----", user[userKey]);
// });

// const userEntries = Object.entries(user);
// for (const entry of userEntries) {
//   console.log(entry[0], "----", entry[1]);
// }

// for (const userKey in user) {
//   console.log(userKey, "----", user[userKey]);
// }

// function User(firstname, lastname, age, speciality) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.age = age;
//   this.speciality = speciality;

//   this.getFullname = function () {
//     return `${this.firstname} ${this.lastname}`;
//   };
// }

// const user = new User("Agil", "Atakishiyev", 23, "FE");
// const user2 = new User("Ashraf", "Qasimov", 20, "Student");
// const user3 = new User("Elgun", "Bayramli", 19, "Student");

// alert(user3.getFullname());
// alert(user2.getFullname());

// Decorators

// class User {
//   //   #id = "123";

//   constructor(firstname, lastname, age, speciality, role) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//     this.speciality = speciality;
//     this.role = role;
//   }

//   getFullname() {
//     return `${this.firstname} ${this.lastname}`;
//   }

//   getId() {
//     return this.#id;
//   }

//   setId() {
//     // check if valid id is passed
//   }

//   //   #calculateSomething() {}
// }

// class Admin extends User {
//   constructor(firstname, lastname, age, speciality, role, hairColor) {
//     super(firstname, lastname, age, speciality, role);
//     this.hairColor = hairColor;
//   }

//   changeUserAccess() {
//     // Some fake logic
//     console.log("user's access changed");
//   }
// }

// const newAdmin = new Admin("Agil", "Atakishiyev", 23, "FE", "ADMIN", "black");
// const newUser = new User("Zaur", "Mahmudzade", 26, "PE", "USER");
// newAdmin.changeUserAccess();

// const user = new User("Agil", "Atakishiyev", 23, "FE");
// const user2 = new User("Ashraf", "Qasimov", 20, "Student");
// const user3 = new User("Elgun", "Bayramli", 19, "Student");

// alert(user3.getFullname());

// class CustomArray extends Array {
//   constructor(...rest) {
//     super(...rest);
//   }

//   customForEach(callbackFn) {
//     for (let i = 0; i < this.length; i++) {
//       callbackFn(this[i], i, this);
//     }
//   }
// }

// const customArrayInstance = new CustomArray(1, 2, 3, 4, 5, 6);
// const customArrayInstance2 = new CustomArray();
// const customArrayInstance3 = new CustomArray(10);

// customArrayInstance.customForEach(function (number) {
//   console.log(number);
// });

// [1, 2, 3, 4, 5, 6].customForEach(function (number) {
//   console.log(number);
// });

// Array.prototype.customForEach = function (callbackFn) {
//   for (let i = 0; i < this.length; i++) {
//     callbackFn(this[i], i, this);
//   }
// };

// [5, 10, 15, 20].customForEach(function (number) {
//   console.log(number);
// });

// const newArray = new Array(3, 6, 9, 12);
// newArray.customForEach(function (number) {
//   console.log(number);
// });

// Number.prototype.add = function (num) {
//   return this + num;
// };

// Number.prototype.minus = function (num) {
//   return this - num;
// };

// Number.prototype.multiply = function (num) {
//   return this * num;
// };

// divide

// console.log((5).add(10).minus(3).multiply(2)); // 24
// console.log((10).multiply(2).minus(5).add(50).divide(5)); // 13

// class CustomNumber {
//   constructor(number) {
//     this.number = number;
//   }

//   add(number) {
//     this.number += number;
//     return this;
//   }

//   minus(number) {
//     this.number -= number;
//     return this;
//   }

//   multiply(number) {
//     this.number *= number;
//     return this;
//   }

//   divide(number) {
//     this.number /= number;
//     return this;
//   }
// }

// const num = new CustomNumber(5);
// console.log(num.add(5).minus(3).add(10).multiply(2).divide(5));

Array.prototype.customIncludes = function () {
  // this
};

Array.prototype.customFind = function () {
  //
};

Array.prototype.customIndexOf = function () {
  //
};

[1, 2, 3].customIncludes(2); // true
