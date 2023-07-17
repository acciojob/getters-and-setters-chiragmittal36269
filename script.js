//complete this code
class Person {
	name;
	age;

	get name(){
        return this.name;
    }

	set age(age){
		this.age = age;
	}
}

class Student extends Person {
	study = function(){
		console.log(super.name"is studying");		
	}
}

class Teacher extends Person {
	teach = function(){
		console.log(super.name"is teaching");		
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
