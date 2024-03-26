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

console.log(joo.name); // 형주
console.log(joo.skill); // 달리기
joo.sayHi();    // hi

class Animal {
    name: string;
    constructor(name:string){
        this.name = name;
    }

    move(distanceInMeters:number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m`);
    }
}

class Dog extends Animal {
    constructor(name:string){
        super(name);
    }
    move (distanceInMeters = 5) {
        console.log('Barking...');
        super.move(distanceInMeters);
    }
    woof(times: number) {
        for(let i = 0; i < times; i++) {
            console.log("Woof!");
        }
    }
}

const dog = new Dog("Rex");
dog.move(); // Barking... Rex moved 5m
dog.woof(3) // Woof! Woof! Woof!