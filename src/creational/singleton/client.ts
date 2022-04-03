import Eager from "./eagerLoading";
import Lazy from "./lazyLoading";

const a1 = new Lazy()
const a2 = new Lazy()

console.log("---BEFORE---")
console.log(a1.getX(), a1.getY())
console.log(a2.getX(), a2.getY())



console.log("---AFTER---")
// console.log(a1.getX(), a1.getY())
// console.log(a2.getX(), a2.getY())