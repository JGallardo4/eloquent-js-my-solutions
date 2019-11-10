// Not what the exercise is asking, but here to show
// one possibility
let a = {
    name: 'Abby',
    species: 'Isopod',
    [hasOwnProperty]: 'Yes, a house.'
};

console.log(a.hasOwnProperty('age'));
console.log(a[hasOwnProperty]);

// Probably the correct answer
let b = {
    name: 'Tony',
    species: 'Gorilla',
    hasOwnProperty: 'Yes, a barrel.'
};

console.log(Object.prototype.hasOwnProperty.call(b, 'age'));
console.log(Object.prototype.hasOwnProperty.call(b, 'name'));
console.log(b.hasOwnProperty);
