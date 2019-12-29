function maxChar(str) {
    const charMap = str.split("").reduce((acc, val) => {
        if (!acc[val]) {
            acc[val] = 1;
        } else {
            acc[val]++;
        }
        return acc;
    }, {});

    const result = Object.entries(charMap).reduce((prev, current) => {
        return prev[1] > current[1] ? prev : current;
    });

    return result[0];
}

module.exports = maxChar;