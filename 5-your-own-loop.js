function loop(start, testF, updateF, bodyF) {
    current = start;
    while(testF(current)) {
        bodyF(current);
        current = updateF(current);
    }
}

loop(0, (start) => start <= 10, (current) => current + 1, (current) => {
console.log('Im at ' + current)});
