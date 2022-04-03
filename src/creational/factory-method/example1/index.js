"use strict";
class Creator {
    someOperation() {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}
class ConcreteCreator1 extends Creator {
    factoryMethod() {
        return new ConcreateProduct1();
    }
}
class ConcreteCreator2 extends Creator {
    factoryMethod() {
        return new ConcreateProduct2();
    }
}
class ConcreateProduct1 {
    operation() {
        return '{Result of the ConcreteProduct1}';
    }
}
class ConcreateProduct2 {
    operation() {
        return '{Result of the ConcreteProduct2}';
    }
}
function clientCode(creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');
console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());
