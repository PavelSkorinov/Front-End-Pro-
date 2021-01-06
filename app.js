class Students {
    constructor(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        const attendance = new Array(30);
        const marks = new Array(30);
        this.attendance = attendance;
        this.marks = marks;
        this.attendanceCount = 0;
        this.markCount = 0;
    };

    present() {
        try {                
            if (this.attendanceCount >= 30) {
                throw new Error('Attendance is full');
            } else { 
            let value = this.attendance.findIndex((el) => el === undefined);
            this.attendance[value] = true;
            this.attendanceCount+= 1;
            return this.attendance[value];
            };
        } catch(er) {
            console.log(`${er.name}: ${er.message}`)
        }
    };

    absent() {
        try {                
            if (this.attendanceCount >= 30) {
                throw new Error('Attendance is full');
            } else { 
            let value = this.attendance.findIndex((el) => el === undefined);
            this.attendance[value] = false;
            this.attendanceCount+= 1;
            return this.attendance[value];
            };
        } catch(er) {
            console.log(`${er.name}: ${er.message}`)
        }
    };

    mark(mark) {
        try {
            if (this.markCount >= 30) {
                throw new Error('Wrong number');
            } else {
                if (mark < 0 || mark > 10) {
                    throw new Error('Wrong number');
                } else {
                let value = this.marks.findIndex(el => el === undefined);
                this.marks[value] = mark;
                this.markCount+= 1;
                return this.marks[value];
                }; 
            } 
        } catch(er) {
            console.log(`${er.name}: ${er.message}`)
        }
    };

    getAge() {
        return (new Date).getFullYear() - this.birthYear;
    };

    summary() {
        let averageAttendance = this.attendance.reduce((accumulator, value) => accumulator + value) / this.attendance.length;
        let averageMarks = this.marks.reduce((accumulator, value) => accumulator + value) / this.marks.length;
        if (averageAttendance >= 0.9 && averageMarks >= 9) {
            console.log('Ути какой молодчинка!');
        } else if (averageAttendance <= 0.9 && averageMarks <= 9) {
            console.log('Редиска!');
        } else if (averageAttendance <= 0.9 || averageMarks <= 9) {
            console.log('Норм, но можно лучше');
        };
    };
};

const student = new Students('Anton', 'Poznyakov', 2001);
const student2 = new Students('Mark', 'Antonov', 1998);
const student3 = new Students('Semen', 'Kozlovskiy', 2002);
const student4 = new Students('Ivan', 'Petrov', 1997);


student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
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