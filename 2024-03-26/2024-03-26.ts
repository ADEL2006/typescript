class Person {
    name:string;
    skill:string;
    constructor(name:string, skill:string){
        this.name = name;
        this.skill = skill;
    }
    sayHi():void {
        console.log('hi');
    }
}

var joo = new Person('형주', '달리기');

console.log(joo.name);
console.log(joo.skill);
joo.sayHi();
