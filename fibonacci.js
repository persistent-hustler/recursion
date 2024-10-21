function fibsRec(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const sequence = fibsRec(n - 1);
        const next_fib = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next_fib);
        return sequence;
    }
}

console.log(fibsRec(8));