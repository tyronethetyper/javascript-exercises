const fibonacci = function(a) {
    if (typeof a === 'string') {
        a = Number(a);
    }
    if (a === 0) {
        return 0;
    }
    if (a < 0) {
        return "OOPS";
    }
    let fib_arr = [1, 1];
    for (let i = 2; i < 27; i++) {
        fib_arr[i] = fib_arr[i - 2] + fib_arr[i - 1];
    }
    return fib_arr[a - 1];
};

// Do not edit below this line
module.exports = fibonacci;

fibonacci(4);