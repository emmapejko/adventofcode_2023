const day2Input = {
    1: [
        ['7 blue', '5 red'],
        ['10 red', '7 blue'],
        ['5 blue', '4 green', '15 red'],
        ['4 green', '6 red', '7 blue'],
        ['5 green', '8 blue', '4 red'],
        ['5 red', '4 blue', '3 green'],
    ],
    2: [
        ['8 green', '3 red'],
        ['7 blue', '6 red', '8 green'],
        ['7 blue', '3 green', '6 red'],
        ['8 green', '6 blue', '11 red'],
        ['6 blue', '3 green', '12 red'],
    ],
    3: [
        ['6 blue', '3 red', '7 green'],
        ['3 red', '3 green', '8 blue'],
        ['8 blue', '11 red', '4 green'],
        ['5 blue', '7 red', '6 green'],
        ['9 blue', '7 green', '1 red'],
    ],
    4: [
        ['3 red', '4 green'],
        ['5 red', '1 blue'],
        ['2 green'],
        ['3 green', '1 blue'],
        ['2 green', '1 blue', '1 red'],
    ],
    5: [
        ['17 red', '5 blue', '3 green'],
        ['8 green', '9 red', '10 blue'],
        ['2 green', '9 blue', '4 red'],
    ],
    6: [
        ['5 blue', '6 green', '3 red'],
        ['1 green', '8 blue', '12 red'],
        ['2 blue', '13 red', '6 green'],
    ],
    7: [
        ['1 green', '1 blue', '6 red'],
        ['1 red', '8 green'],
        ['3 red', '8 green', '2 blue'],
        ['14 green', '4 blue', '4 red'],
        ['4 green', '5 blue'],
        ['7 green', '2 blue', '1 red'],
    ],
    8: [
        ['6 blue', '9 red', '3 green'],
        ['2 red', '6 blue'],
        ['2 green', '1 red', '2 blue'],
        ['2 green', '9 blue', '6 red'],
    ],
    9: [
        ['5 green', '8 blue', '8 red'],
        ['2 blue', '6 green', '8 red'],
        ['6 red', '9 green'],
    ],
    10: [
        ['2 red', '2 blue', '12 green'],
        ['8 green', '3 red'],
        ['5 blue', '11 red', '6 green'],
        ['14 red', '1 green'],
    ],
    11: [
        ['2 green', '1 red', '1 blue'],
        ['4 blue', '7 red'],
        ['7 red', '7 green', '5 blue'],
        ['2 blue', '3 red', '6 green'],
        ['3 blue', '9 red', '7 green'],
    ],
    12: [
        ['9 green', '7 red', '7 blue'],
        ['6 green', '4 blue', '1 red'],
        ['3 blue', '5 red', '7 green'],
        ['9 green', '10 red', '12 blue'],
        ['11 green', '5 red'],
        ['9 blue', '12 green', '3 red'],
    ],
    13: [
        ['7 blue', '7 red', '2 green'],
        ['5 blue', '5 green', '7 red'],
        ['1 blue', '10 red'],
        ['11 red', '2 blue', '1 green'],
        ['1 green', '1 blue', '4 red'],
    ],
    14: [
        ['2 blue', '10 red'],
        ['3 blue', '6 green', '17 red'],
        ['3 green', '4 blue', '14 red'],
    ],
    15: [
        ['7 blue', '2 green', '4 red'],
        ['7 blue', '3 red', '3 green'],
        ['4 red', '2 green', '1 blue'],
        ['2 red', '9 green', '5 blue'],
        ['2 red', '4 green', '5 blue'],
    ],
    16: [
        ['5 blue', '1 red'],
        ['8 blue', '1 green'],
        ['5 green', '3 blue', '2 red'],
        ['8 blue', '2 green'],
        ['2 red', '2 blue', '5 green'],
    ],
    17: [
        ['2 blue', '5 red'],
        ['7 red', '1 blue'],
        ['2 blue', '2 green', '3 red'],
        ['3 blue', '2 red', '1 green'],
        ['5 green', '7 red'],
        ['6 red', '3 green'],
    ],
    18: [
        ['4 blue', '1 red', '14 green'],
        ['8 red', '4 blue', '14 green'],
        ['6 red', '11 blue', '10 green'],
        ['5 blue', '2 green', '3 red'],
        ['16 green', '10 blue', '2 red'],
        ['6 red', '4 blue', '12 green'],
    ],
    19: [
        ['10 green', '12 red', '12 blue'],
        ['5 blue', '12 red', '7 green'],
        ['15 red', '8 blue', '6 green'],
        ['13 green', '1 red', '10 blue'],
        ['4 blue', '8 red', '9 green'],
        ['16 red', '7 green', '3 blue'],
    ],
    20: [
        ['10 blue', '9 green'],
        ['9 blue', '1 red', '3 green'],
        ['11 blue'],
        ['6 blue'],
        ['8 blue', '10 green'],
    ],
    21: [
        ['4 blue', '4 red'],
        ['1 green', '3 red', '3 blue'],
        ['4 blue', '1 green', '2 red'],
    ],
    22: [
        ['5 blue', '4 green', '1 red'],
        ['14 green', '4 blue', '1 red'],
        ['4 blue', '4 red', '13 green'],
    ],
    23: [
        ['6 red', '8 green'],
        ['4 green', '1 blue', '7 red'],
        ['10 green', '5 red'],
        ['2 red', '9 green'],
    ],
    24: [
        ['1 blue', '10 green'],
        ['12 green', '5 blue'],
        ['1 red', '3 green'],
        ['2 red', '4 blue'],
    ],
    25: [
        ['2 blue', '3 red', '13 green'],
        ['7 blue', '15 green', '1 red'],
        ['7 blue', '2 green'],
    ],
    26: [
        ['20 red', '5 blue', '4 green'],
        ['1 green', '8 blue', '11 red'],
        ['7 blue', '6 red', '2 green'],
        ['4 green', '7 blue', '4 red'],
        ['5 red', '8 blue'],
    ],
    27: [
        ['3 red', '3 green', '1 blue'],
        ['3 red', '1 blue', '8 green'],
        ['3 blue', '4 red'],
    ],
    28: [
        ['1 blue', '15 red', '2 green'],
        ['15 red'],
        ['3 red', '2 green'],
        ['3 red', '1 green'],
    ],
    29: [
        ['4 blue', '7 green', '1 red'],
        ['5 green', '9 red'],
        ['8 green', '1 red', '10 blue'],
        ['2 blue', '1 green'],
    ],
    30: [
        ['9 blue', '5 red', '6 green'],
        ['15 red', '6 blue', '3 green'],
        ['13 red', '2 blue', '4 green'],
        ['2 green', '3 blue'],
        ['13 red', '8 blue'],
        ['5 green', '6 blue', '17 red'],
    ],
    31: [
        ['1 green', '9 blue', '9 red'],
        ['4 green', '8 red', '1 blue'],
        ['10 blue', '2 green'],
        ['1 red', '1 blue'],
        ['1 red', '1 blue'],
        ['6 blue', '9 red', '5 green'],
    ],
    32: [
        ['7 red', '7 green', '3 blue'],
        ['14 green', '11 red', '11 blue'],
        ['10 green', '7 red', '2 blue'],
        ['1 green', '4 blue', '4 red'],
        ['9 blue', '10 green', '5 red'],
    ],
    33: [
        ['12 red', '4 green', '11 blue'],
        ['4 blue', '10 red', '1 green'],
        ['7 green', '10 red', '16 blue'],
        ['15 red', '5 blue'],
        ['10 green', '4 red'],
        ['8 green', '5 blue', '6 red'],
    ],
    34: [
        ['8 blue', '1 red', '2 green'],
        ['3 green', '3 blue', '4 red'],
        ['6 red', '3 green'],
        ['6 red'],
        ['9 blue', '4 red', '3 green'],
    ],
    35: [
        ['6 green', '6 blue', '1 red'],
        ['3 green', '3 blue'],
        ['1 red', '5 blue', '2 green'],
        ['1 red', '13 green', '1 blue'],
        ['3 green', '1 red', '10 blue'],
        ['5 green', '4 blue'],
    ],
    36: [
        ['15 blue', '1 red'],
        ['2 red', '3 green', '17 blue'],
        ['6 blue', '7 red', '8 green'],
        ['12 red', '7 green', '14 blue'],
        ['4 blue', '2 red'],
        ['8 green', '12 blue', '10 red'],
    ],
    37: [
        ['2 green', '2 blue'],
        ['6 red', '3 blue', '1 green'],
        ['2 green', '3 blue', '1 red'],
    ],
    38: [
        ['2 blue', '7 red', '9 green'],
        ['3 red', '18 green', '6 blue'],
        ['6 red', '19 green', '2 blue'],
        ['2 blue', '13 green', '7 red'],
    ],
    39: [
        ['12 blue', '7 green', '3 red'],
        ['16 green', '6 blue'],
        ['1 red', '4 green', '2 blue'],
        ['15 blue', '2 red', '2 green'],
    ],
    40: [
        ['18 blue', '1 red'],
        ['4 green', '15 blue'],
        ['5 green', '17 blue', '3 red'],
        ['4 red', '16 blue', '2 green'],
    ],
    41: [
        ['3 blue', '14 green'],
        ['11 green', '8 blue'],
        ['14 blue', '4 red', '1 green'],
        ['5 blue', '2 red', '15 green'],
    ],
    42: [
        ['7 red', '9 green'],
        ['10 red', '19 green', '10 blue'],
        ['16 blue', '8 green', '7 red'],
        ['6 blue', '11 green', '7 red'],
    ],
    43: [
        ['1 blue', '5 red'],
        ['8 red', '2 green', '1 blue'],
        ['4 red', '3 green'],
        ['2 green', '1 red'],
    ],
    44: [
        ['5 green', '13 blue', '12 red'],
        ['18 blue', '3 green', '8 red'],
        ['2 green', '3 blue', '11 red'],
    ],
    45: [
        ['3 blue', '1 red', '4 green'],
        ['2 blue', '1 red'],
        ['1 blue', '4 green'],
        ['3 red', '16 green'],
    ],
    46: [
        ['10 red', '1 green', '4 blue'],
        ['4 green', '14 blue', '2 red'],
        ['12 red', '3 blue', '2 green'],
        ['4 green', '2 red', '2 blue'],
        ['2 red', '1 green', '11 blue'],
        ['2 green', '19 blue'],
    ],
    47: [
        ['10 blue', '10 green', '3 red'],
        ['3 red', '11 blue', '9 green'],
        ['4 blue', '10 green'],
    ],
    48: [
        ['5 green', '1 blue'],
        ['4 red', '8 green', '8 blue'],
        ['17 red', '5 blue', '2 green'],
        ['12 green', '18 red', '7 blue'],
        ['15 green', '14 red', '8 blue'],
        ['11 green', '1 blue', '16 red'],
    ],
    49: [
        ['2 red', '4 green', '1 blue'],
        ['1 green', '5 blue', '2 red'],
        ['8 green', '3 blue', '1 red'],
        ['4 blue', '3 red', '9 green'],
    ],
    50: [
        ['2 blue'],
        ['7 green', '5 red'],
        ['3 red', '3 blue'],
        ['5 green', '1 blue', '2 red'],
        ['5 blue', '3 green'],
        ['4 green', '3 blue', '1 red'],
    ],
    51: [
        ['6 green', '13 blue', '3 red'],
        ['7 blue', '7 green', '1 red'],
        ['15 green', '2 red', '13 blue'],
        ['1 red', '7 blue', '3 green'],
        ['11 blue', '16 green', '1 red'],
    ],
    52: [
        ['5 blue', '2 green', '14 red'],
        ['4 blue', '3 red'],
        ['10 green', '7 red'],
        ['1 blue', '10 green', '10 red'],
        ['9 blue', '5 green', '12 red'],
    ],
    53: [
        ['1 green', '2 red', '1 blue'],
        ['4 green'],
        ['1 green'],
        ['2 green'],
        ['2 green', '1 red'],
    ],
    54: [
        ['3 green', '11 blue'],
        ['12 blue'],
        ['1 red', '3 blue'],
        ['7 blue', '1 red'],
    ],
    55: [
        ['7 green', '7 red'],
        ['1 blue', '7 green', '14 red'],
        ['17 red', '2 blue', '5 green'],
        ['1 blue', '7 red'],
        ['2 blue', '3 green', '14 red'],
    ],
    56: [
        ['3 blue', '2 red', '1 green'],
        ['1 red', '4 blue', '2 green'],
        ['5 green', '1 red', '2 blue'],
        ['7 blue'],
    ],
    57: [
        ['1 blue', '14 red', '7 green'],
        ['2 red', '1 green'],
        ['1 blue', '6 red', '6 green'],
    ],
    58: [
        ['11 red', '2 green'],
        ['3 green', '8 red', '8 blue'],
        ['10 red', '1 green', '13 blue'],
    ],
    59: [
        ['11 green', '5 blue', '11 red'],
        ['13 red', '6 blue', '11 green'],
        ['6 red', '7 blue', '12 green'],
        ['9 blue', '9 red', '1 green'],
    ],
    60: [
        ['3 red', '8 blue', '4 green'],
        ['5 blue', '2 red', '3 green'],
        ['7 green', '3 red'],
        ['8 blue', '2 red', '7 green'],
    ],
    61: [
        ['17 red', '12 blue', '9 green'],
        ['20 green', '5 red', '14 blue'],
        ['9 blue', '11 green', '15 red'],
        ['14 green', '6 blue', '14 red'],
        ['16 green', '7 red', '4 blue'],
    ],
    62: [
        ['3 red', '11 blue', '16 green'],
        ['1 green', '6 red', '6 blue'],
        ['7 green', '6 red', '9 blue'],
    ],
    63: [
        ['3 blue', '20 red', '1 green'],
        ['11 red', '5 green'],
        ['13 red', '2 green'],
        ['15 red', '1 blue', '6 green'],
    ],
    64: [
        ['8 blue', '1 red', '11 green'],
        ['1 red', '11 blue', '4 green'],
        ['5 red', '7 green', '1 blue'],
    ],
    65: [
        ['3 blue', '13 green', '2 red'],
        ['2 blue', '3 red'],
        ['10 green', '8 blue', '2 red'],
        ['2 red', '6 blue', '8 green'],
        ['10 blue', '12 green'],
    ],
    66: [
        ['4 blue', '3 red', '8 green'],
        ['1 red', '9 green'],
        ['7 blue', '6 red', '6 green'],
        ['1 blue', '1 red', '11 green'],
    ],
    67: [
        ['10 blue', '15 green'],
        ['3 red', '2 blue', '1 green'],
        ['4 blue', '12 green', '2 red'],
        ['8 green', '11 blue', '8 red'],
        ['9 blue', '5 green', '6 red'],
        ['10 green', '4 red', '14 blue'],
    ],
    68: [
        ['4 green', '3 blue', '4 red'],
        ['9 green', '2 blue'],
        ['6 blue', '6 red', '10 green'],
        ['5 blue', '4 green', '5 red'],
        ['3 blue', '10 green'],
        ['5 blue', '5 red'],
    ],
    69: [
        ['6 blue', '1 red', '1 green'],
        ['4 red', '3 green', '2 blue'],
        ['5 green', '3 red', '5 blue'],
        ['5 red', '5 blue'],
    ],
    70: [
        ['2 green', '1 red'],
        ['12 green', '1 red', '11 blue'],
        ['7 green', '12 blue'],
        ['13 blue', '10 green'],
    ],
    71: [
        ['9 red', '9 green', '4 blue'],
        ['10 red', '1 blue', '12 green'],
        ['3 blue', '13 red', '3 green'],
    ],
    72: [
        ['2 red', '8 blue', '5 green'],
        ['2 green'],
        ['1 red', '5 green', '6 blue'],
        ['1 blue', '3 red', '12 green'],
        ['5 green', '14 blue', '1 red'],
        ['8 blue', '13 green'],
    ],
    73: [
        ['19 blue', '11 red', '8 green'],
        ['18 blue', '9 red', '11 green'],
        ['6 green', '19 blue', '6 red'],
    ],
    74: [
        ['2 green', '4 red', '2 blue'],
        ['1 green', '1 red', '4 blue'],
        ['2 red', '4 green', '2 blue'],
        ['3 red', '2 blue', '6 green'],
    ],
    75: [
        ['2 blue'],
        ['1 red', '1 blue', '1 green'],
        ['1 blue'],
        ['5 blue', '2 green'],
        ['1 green', '1 red', '3 blue'],
    ],
    76: [
        ['9 blue', '4 red', '3 green'],
        ['8 blue', '8 green', '3 red'],
        ['3 red', '2 green', '8 blue'],
        ['8 green', '6 blue', '5 red'],
    ],
    77: [
        ['7 blue', '17 green'],
        ['1 blue', '2 red', '18 green'],
        ['18 green', '1 blue', '2 red'],
    ],
    78: [
        ['2 red', '2 green', '1 blue'],
        ['5 green', '3 blue'],
        ['1 green', '2 blue'],
        ['2 blue', '6 red', '5 green'],
    ],
    79: [
        ['4 red', '6 green', '17 blue'],
        ['2 blue', '3 red', '8 green'],
        ['8 red', '19 blue', '12 green'],
        ['5 red', '8 green', '12 blue'],
        ['16 blue', '1 red', '12 green'],
        ['5 green', '18 blue', '8 red'],
    ],
    80: [
        ['1 blue', '4 red', '10 green'],
        ['6 green'],
        ['6 red', '3 green', '2 blue'],
    ],
    81: [
        ['2 green', '5 blue', '4 red'],
        ['3 red', '1 green', '14 blue'],
        ['3 red', '10 blue', '2 green'],
    ],
    82: [
        ['12 red', '5 blue', '2 green'],
        ['12 blue', '6 red', '5 green'],
        ['13 blue', '1 green', '3 red'],
        ['11 red', '3 blue'],
        ['4 red', '3 green'],
    ],
    83: [
        ['10 blue', '16 red', '4 green'],
        ['6 red', '2 blue', '14 green'],
        ['9 blue', '14 green'],
        ['7 blue', '1 red'],
        ['4 green', '2 red', '8 blue'],
        ['5 red', '7 green'],
    ],
    84: [
        ['3 red', '3 blue', '6 green'],
        ['9 red', '17 green', '16 blue'],
        ['13 blue', '7 red'],
        ['14 green', '2 red', '14 blue'],
    ],
    85: [['7 blue'], ['8 red', '10 blue', '1 green'], ['6 blue', '9 red']],
    86: [
        ['9 red', '6 green', '9 blue'],
        ['1 blue', '5 red'],
        ['11 red', '1 green', '11 blue'],
        ['3 green', '8 blue'],
        ['8 red', '5 green', '4 blue'],
        ['15 blue', '4 green', '2 red'],
    ],
    87: [['2 red', '2 green'], ['5 red', '2 blue'], ['6 red']],
    88: [
        ['2 green', '5 red'],
        ['9 blue', '7 red', '3 green'],
        ['1 blue', '2 green', '3 red'],
        ['3 green', '6 blue', '1 red'],
        ['1 red', '3 green', '6 blue'],
    ],
    89: [
        ['10 blue', '13 red'],
        ['15 red', '6 blue', '2 green'],
        ['2 green', '10 red', '18 blue'],
        ['1 green', '18 red', '8 blue'],
    ],
    90: [
        ['2 red', '2 blue', '9 green'],
        ['1 red', '9 green'],
        ['7 green', '3 blue', '2 red'],
        ['4 blue', '2 red', '4 green'],
    ],
    91: [
        ['6 green', '4 red', '9 blue'],
        ['4 green', '4 red', '17 blue'],
        ['6 blue', '2 red', '4 green'],
        ['7 green', '2 red', '13 blue'],
        ['1 green', '13 blue', '1 red'],
    ],
    92: [
        ['4 green', '1 blue', '8 red'],
        ['7 green', '6 red'],
        ['13 red'],
        ['9 green'],
        ['6 red', '1 blue', '4 green'],
        ['2 red', '1 blue', '15 green'],
    ],
    93: [
        ['8 green', '8 red', '13 blue'],
        ['4 red', '10 green'],
        ['15 blue', '11 red'],
        ['14 green', '5 red', '6 blue'],
        ['12 red', '3 blue', '13 green'],
        ['9 red', '10 green', '6 blue'],
    ],
    94: [
        ['14 red', '10 green'],
        ['15 red'],
        ['4 red'],
        ['4 green', '7 red', '1 blue'],
        ['6 red', '5 green'],
        ['1 red', '2 green'],
    ],
    95: [
        ['1 blue', '11 red'],
        ['15 red', '1 blue', '3 green'],
        ['13 red', '2 blue', '3 green'],
        ['1 green', '1 blue'],
    ],
    96: [
        ['4 red', '4 blue', '4 green'],
        ['5 blue', '5 green', '4 red'],
        ['2 red', '8 blue'],
        ['16 red', '5 green', '13 blue'],
    ],
    97: [
        ['6 red', '13 green', '3 blue'],
        ['10 green', '4 blue'],
        ['3 red', '12 green', '4 blue'],
        ['3 red', '5 blue', '16 green'],
        ['3 red', '9 green', '1 blue'],
    ],
    98: [
        ['8 red', '12 green', '2 blue'],
        ['7 green', '8 red', '1 blue'],
        ['2 blue', '6 red', '3 green'],
        ['9 red', '1 blue', '4 green'],
    ],
    99: [
        ['6 blue', '11 red', '7 green'],
        ['9 red', '6 green', '1 blue'],
        ['9 red', '2 blue'],
    ],
    100: [
        ['1 red', '4 blue', '2 green'],
        ['6 red', '2 green', '11 blue'],
        ['1 red', '1 blue', '2 green'],
        ['1 red', '7 blue'],
    ],
};

// returns 0 if game is impossible
// returns game id if game is possible
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function checkGame(game: any): number {
    const [key, value] = game;
    for (const round of value) {
        for (const cubesRevealed of round) {
            const cubesHint = cubesRevealed.split(' ');
            const cubeAmount = parseInt(cubesHint[0]);
            const color = cubesHint[1];

            switch (color) {
                case 'red':
                    if (cubeAmount > 12) return 0;
                    break;
                case 'green':
                    if (cubeAmount > 13) return 0;
                    break;
                case 'blue':
                    if (cubeAmount > 14) return 0;
                    break;
                default:
                    throw new Error("color isn't red green or blue :(");
            }
        }
    }
    console.log(`${key} is possible!`);
    return parseInt(key);
}

function day2Puzzle1(): void {
    let sum = 0;
    for (const game of Object.entries(day2Input)) {
        sum += checkGame(game);
    }
    console.log(sum);
    return;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getGamePower(game: any): number {
    const [key, value] = game;
    let fewestRed: number | null = null;
    let fewestGreen: number | null = null;
    let fewestBlue: number | null = null;

    for (const round of value) {
        for (const cubesRevealed of round) {
            const cubesHint = cubesRevealed.split(' ');
            const cubeAmount = parseInt(cubesHint[0]);
            const color = cubesHint[1];

            switch (color) {
                case 'red':
                    if (fewestRed === null || cubeAmount > fewestRed) {
                        fewestRed = cubeAmount;
                    }
                    break;
                case 'green':
                    if (fewestGreen === null || cubeAmount > fewestGreen) {
                        fewestGreen = cubeAmount;
                    }
                    break;
                case 'blue':
                    if (fewestBlue === null || cubeAmount > fewestBlue) {
                        fewestBlue = cubeAmount;
                    }
                    break;
                default:
                    throw new Error("color isn't red green or blue :(");
            }
        }
    }
    console.log(
        `${key} ---> fewest red: ${fewestRed}, fewest green: ${fewestGreen}, fewest blue: ${fewestBlue}`
    );
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return fewestRed! * fewestGreen! * fewestBlue!;
}

function day2Puzzle2(): void {
    let sum = 0;
    for (const game of Object.entries(day2Input)) {
        sum += getGamePower(game);
    }
    console.log(sum);
    return;
}

function day2Main(puzzleNum: number): void {
    if (puzzleNum === 1) {
        day2Puzzle1();
        return;
    }

    if (puzzleNum === 2) {
        day2Puzzle2();
        return;
    }
    return;
}

day2Main(2);
