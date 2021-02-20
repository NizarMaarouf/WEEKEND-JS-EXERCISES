const stops = [
    [7, 0],
    [5, 9],
    [14, 4],
    [3, 8],
    [1, 9],
];

const stops1 = [
    [12, 2],
    [15, 3],
    [4, 14],
    [13, 8],
    [10, 12],
];
const stops2 = [
    [12, 2],
    [15, 3],
    [4, 14],
    [13, 8],
    [10, 2],
];
const stops3 = [
    [12, 2],
    [15, 3],
    [4, 14],
    [13, 11],
    [0, 15],
];

function busStops(arr) {
    const approvedOnBus = arr.reduce((n, [gotIn, gotOut]) => n + gotIn - gotOut, 0);
    if (approvedOnBus >= 0) {
        return approvedOnBus;
    }
    return 'There is no passengers left on the bus or at the bus stops!!!';
}
console.log(busStops(stops));
console.log(busStops(stops1));
console.log(busStops(stops2));
console.log(busStops(stops3));