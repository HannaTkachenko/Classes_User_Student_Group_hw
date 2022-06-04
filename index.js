"use strict";

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year, currentEducationDay) {
    super(name, surname);
    this.year = year;
    this.currentEducationDay = new Date().getFullYear();
  }
  get year() {
    return this._year;
  }

  set year(year) {
    if (year > this.currentEducationDay) {
      throw new RangeError("Year must be less or equal current");
    }
    if (this.currentEducationDay - year > 5) {
      throw new RangeError("Education can`t last more than 5 years");
    }
    this._year = year;
  }

  getCourse() {
    return this.currentEducationDay - this.year + 1;
  }

  getSurnameWithInitials() {
    return `${this.surname} ${this.name.charAt(0)}`;
  }
}

class Group {
  constructor(name, students) {
    this.name = name;
    this.students = students;
  }

  showStudents() {
    if (this.students.length > 0) {
      return this.students.map((student) => student.getSurnameWithInitials());
    }
    throw new Error("No students in group");
  }
}

const user = new User("Ivan", "Tkach");
const student = new Student("Ivan", "Tkach", 2020);
const group = new Group("New group", [
  new Student("Ivan", "Gess", 2019),
  new Student("Amedeo", "Avogadro", 2016),
  new Student("Fridrich", "Kekule", 2022),
  new Student("Maria ", "Curie", 2017),
  new Student("Michael", "Faradei", 2020),
  new Student("Louis", "Paster ", 2023),
  new Student("Lainus", "Poling", 2018),
]);
console.log(user.getFullName());
console.log(student.getCourse());
console.log(group.showStudents());
