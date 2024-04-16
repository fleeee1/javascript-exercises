const sumAll = function(start, end) {
    if (isNaN(start) || isNaN(end)) {
        return "ERROR";
    }

    if (start > end) {
       [start, end] = [end, start];
    }
    let total = 0;
    for (let i = start; i <= end; i++) {
        if (isNaN(i)) {
            return "ERROR";
        }
        
        total += i;
    }
        if (total < 0) {
            return "ERROR";
        }
        
    return total;

};

// Do not edit below this line
module.exports = sumAll;
