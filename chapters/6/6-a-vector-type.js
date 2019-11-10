class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return this.y / this.x;
    }

    plus(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    minus(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
}

let a = new Vec(3, 4);
console.log(a.length);
console.log(a.minus(new Vec(1, 1)).y);
