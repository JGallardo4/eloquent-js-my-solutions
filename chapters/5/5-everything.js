// returns false when it encounters
// the first item that fails testF
function everyWithLoop(array, testF) {
    for(let element of array) {
        if(!testF(element)) return false;
    }
    return true;
}

// Does the array not contain any element that
// does not pass testF?
function everyWithSome(array, testF) {
    let inv = (e) => !testF(e);
    return !array.some(inv);
}

let a = [true, true, true, false];
let b = [true, false, false, false];
let c = [true, true, true, true];
let d = [false, false, false, false];

console.log(everyWithLoop(a, (e) => e));
console.log(everyWithSome(a, (e) => e));
console.log();
console.log(everyWithLoop(b, (e) => e));
console.log(everyWithSome(b, (e) => e));
console.log(); 
console.log(everyWithLoop(c, (e) => e));
console.log(everyWithSome(c, (e) => e));
console.log(); 
console.log(everyWithLoop(d, (e) => e));
console.log(everyWithSome(d, (e) => e));
