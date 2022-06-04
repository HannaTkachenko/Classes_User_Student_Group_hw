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
  constructor(name, surname, currentEducationDay) {
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
    return this.today - this.year + 1;
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
    throw new Error('No students in group')
  }
}



