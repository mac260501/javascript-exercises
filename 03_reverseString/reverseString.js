const reverseString = function(string) {
    const array = string.split('');
    let temp = '';
    for (let i = array.length - 1; i >= 0; i--)
    {
        temp += array[i];
    }
    return temp;
    
    // or just: return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
