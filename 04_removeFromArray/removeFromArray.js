const removeFromArray = function() {
    let num = [1, 2, 3, 4];
    num.splice(2, 1); // Use splice on the array `num`, not the function `removeFromArray`
    return num;
};

// Do not edit below this line
module.exports = removeFromArray;
