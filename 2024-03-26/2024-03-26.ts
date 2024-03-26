function Person(name, skill) {
    this.name = name;
    this.skill = skill;
}

Person.prototype.sayHi = function () {
    console.log('hi');
}

var joo = new Person('형주', '달리기');

console.log(joo.name);
console.log(joo.skill);
joo.sayHi();
