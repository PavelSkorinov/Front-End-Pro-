function Students(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    const attendance = Array.apply(null, Array(30));
    const marks = Array.apply(null, Array(30));
    this.attendance = attendance;
    this.marks = marks;
};

Students.prototype.present = function () {
    if (this.attendance.length <= 30) {
        let value = this.attendance.findIndex(el => el === undefined);
        let newValue = this.attendance[value] = true;
        return newValue;
    } else return console.log('Attendance is filled');
};

Students.prototype.absent = function () {
    if (this.attendance.length <= 30) {
        let value = this.attendance.findIndex(el => el === undefined);
        let newValue = this.attendance[value] = false;
        return newValue;
    } else return console.log('Attendance is filled');
};

Students.prototype.mark = function (mark) {
    if (this.marks.length <= 30) {
        if (mark >= 0 && mark <= 10) {
            let value = this.marks.findIndex(el => el === undefined);
            let newValue = this.marks[value] = mark;
            return newValue;
        } else return console.log('Wrong number')
    } else return console.log('Marks is filled');
};
 
Students.prototype.getAge = function () {
    return (new Date).getFullYear() - this.birthYear;
};

Students.prototype.summary = function () {
    let averageAttendance = this.attendance.reduce((a, b) => a + b) / this.attendance.length;
    let averageMarks = this.marks.reduce((a, b) => a + b) / this.marks.length;
    if (averageAttendance >= 0.9 && averageMarks >= 9) {
        console.log('Ути какой молодчинка!');
    } else if (averageAttendance <= 0.9 && averageMarks <= 9) {
        console.log('Редиска!');
    } else if (averageAttendance <= 0.9 || averageMarks <= 9) {
        console.log('Норм, но можно лучше');
    }
};

const student = new Students('Anton', 'Poznyakov', 2001);
const student2 = new Students('Mark', 'Antonov', 1998);
const student3 = new Students('Semen', 'Kozlovskiy', 2002);
const student4 = new Students('Ivan', 'Petrov', 1997);

student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.mark(4);
student.summary();
console.log(student);
console.log(student2);
console.log(student3);
console.log(student4);
