// Import chai.
let chai = require('chai'),
    path = require('path');

// Tell chai that we'll be using the "should" style assertions.
chai.should();

// Import the Rectangle class.
let curryPath = path.join(__dirname, '..', 'solution', 'curried');
let curry = require(curryPath);

// define test function
function add(a, b) {
    return a + b;
}

describe('curried function', () => {
    it('curry is function', () => {
        curry.should.be.a('function');
    });

    it('curry() returns false', () => {
        let result = curry();
        result.should.equal(false);
    });

    it('curry(add)(1) returns function', () => {
        let result = curry(add)(1);
        result.should.be.a('function');
    });

    it('curry(add)(1)() returns function', () => {
        let result = curry(add)(1)();
        result.should.be.a('function');
    });

    it('curry(add)(1)()(2) returns 3', () => {
        let result = curry(add)(1)()(2);
        result.should.equal(3);
    });

    it('curry(add)(100, 2) returns 102', () => {
        let result = curry(add)(100, 2);
        result.should.equal(102);
    });

    it('curry(add)(1, 2, 3) returns 3', () => {
        let result = curry(add)(1, 2, 3);
        result.should.equal(3);
    });

    describe('how it works with bind', () => {
        let increase;

        before(() => {
            increase = curry(add)(1);
        });

        it('increase(100) returns 101', () => {
            let result = increase(100);
            result.should.equal(101);
        });

        it('increase(50) returns 51', () => {
            let result = increase(50);
            result.should.equal(51);
        });
    });
});
