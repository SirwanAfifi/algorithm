const dictionary = [
    "apple",
    "at",
    "banana",
    "car",
    "cut",
    "city",
    "food",
    "floor",
    "zoo"
]

dictionary.filter(item => {
    return !!item.split("")
        .map(c => c.charCodeAt())
        .reduce((acc, code) => acc && code >= acc && code);
}).reduce((acc, value) => (acc > value ? acc : value));