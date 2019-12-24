function derivative(arr) {
    const output = [];

    for (i = 0; i < arr.length; i++) {
        const y = 3 * Math.sin(2 * Math.PI * 50 * arr[i] + (Math.PI / 6));
        output.push({ index: arr[i], value: y });
    }

    let random = Math.floor(Math.random() * output.length);
    if (output[random] >= output.length) {
        random = random - 2
    }
    const randomNumbers = [output[random], output[random + 1]];
    const sorted = randomNumbers.sort((a, b) => b.index - a.index);
    const [a, b] = sorted;
    console.log(a, b);
    return {
        d: 1000 * (a.value - b.value),
        a,
        b
    };
}

var d = derivative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

var domain = Math.pow((Math.pow(d.a.value, 2) + Math.pow((d.d / (100 * Math.PI)), 2)), 0.5);

var phase = (Math.atan((d.a.value) / (d.d / (100 * Math.PI)))) - (100 * Math.PI * d.a.index);

console.log("phase: " + phase + "\n" + "domain: " + domain);