class Group {

    constructor() {
        this.elements = [];
    }

    [Symbol.iterator] = function() {
        return new GroupIterator(this);
    }

    add(element) {
        if(!this.has(element)) {
            this.elements.push(element);            
        }
    }

    delete(element) { 
        this.elements = this.elements.filter(e => e !== element);
    }

    has(element) {
        return this.elements.some(e => e === element);
    }

    static from(object) {
        let group = new Group();

        for (let e of object) {
            group.add(e);
        }

        return group;
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.index = 0;
    }

    next() {
        if (this.index === this.group.elements.length) {
            return {done: true};
        }

        let value = this.group.elements[this.index];

        this.index++;

        return {value, done: false};
    }
}


let a = Group.from([1, 2, 3, 3, 2, 1, 5, 9, 8, 7]);
console.log(a.elements);
a.delete(3);
console.log(a.elements);
console.log(a.has(7));
console.log(a.has(10));

for (e of a) {
    console.log(e);
}
