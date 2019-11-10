let arrayArray = [
    'I,love,to,eat,pb&j,sandwiches,!'.split(','),
    "Slob,my,hog,right,now,and,don't,neglect,the,balls".split(','),
    'A,comment,is,a,piece,of,text'.split(',')
];
console.log(arrayArray);

function flattenArrays(array) {
    return array.reduce((result, next) => {
        return result.concat(next)
    });
}

console.log(flattenArrays(arrayArray));
