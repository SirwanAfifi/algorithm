function chunk(array, size) {
    const chunked = [];
    const length = Math.ceil(array.length / size);
    [...Array(length).keys()].forEach((val, i) => {
        const start = size * i;
        chunked.push(array.slice(start, start + size));
    });
    return chunked;
}
module.exports = chunk;