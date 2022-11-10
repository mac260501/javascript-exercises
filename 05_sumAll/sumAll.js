const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return 'ERROR';
    }
    let sum1 = (end * (end+1)) / 2;
    let sum2 = (start * (start+1)) / 2;

    return Math.abs(sum1 - sum2) + 1;
};

// Do not edit below this line
module.exports = sumAll;
