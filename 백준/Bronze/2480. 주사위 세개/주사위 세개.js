const solution = (input) => {
    const ns = input.split(' ').map((s) => +s);
    const nm = ns.reduce((acc, n) => {
        if (acc[n]) {
            return { ...acc, [n]: acc[n] + 1 };
        } else {
            return { ...acc, [n]: 1 };
        }
    }, {});

    switch (Object.keys(nm).length) {
        case 1:
            return ns[0] * 1000 + 10000;
        case 2:
            return +Object.entries(nm).find((_n) => _n[1] === 2)[0] * 100 + 1000;
        default:
            return Math.max(...ns) * 100;
    }
};
const print = (input) => console.log(solution(input + ''));
process.stdin.on('data', print);
