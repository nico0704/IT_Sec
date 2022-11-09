const alphabetic_distribution = [
    " ",
    "e",
    "n",
    "i",
    "s",
    "r",
    "a",
    "t",
    "d",
    "h",
    "u",
    "l",
    "c",
    "g",
    "m",
    "o",
    "b",
    "w",
    "f",
    "k",
    "z",
    "p",
    "v",
    "j",
    "y",
    "x",
    "q",
];

var replacement_map_1 = new Map();
let obj = [
    {
        key: "W",
        value: " ",
    },
    {
        key: "H",
        value: "e",
    },
    {
        key: "u",
        value: "n",
    },
    {
        key: "s",
        value: "i",
    },
    {
        key: "i",
        value: "s",
    },
    {
        key: "o",
        value: "r",
    },
    {
        key: "z",
        value: "a",
    },
    {
        key: ",",
        value: "d",
    },
    {
        key: "F",
        value: "t",
    },
    {
        key: " ",
        value: "h",
    },
    {
        key: "b",
        value: "u",
    },
    {
        key: "n",
        value: "l",
    },
    {
        key: "I",
        value: "c",
    },
    {
        key: "B",
        value: "g",
    },
    {
        key: "?",
        value: "m",
    },
    {
        key: "Z",
        value: "w",
    },
    {
        key: "m",
        value: "o",
    },
    {
        key: ":",
        value: "b",
    },
    {
        key: "d",
        value: "z",
    },
    {
        key: "!",
        value: "k",
    },
    {
        key: "P",
        value: "v",
    },
    {
        key: "S",
        value: "z",
    },
    {
        key: "U",
        value: "w",
    },
    {
        key: "g",
        value: "p",
    },
    {
        key: "d",
        value: "f",
    },
    // Uppercase:
    {
        key: "G",
        value: "R",
    },
    {
        key: "T",
        value: "D",
    },
    {
        key: "J",
        value: "N",
    },
    {
        key: "'",
        value: "M",
    },
    {
        key: "e",
        value: "V",
    },
    {
        key: "N",
        value: "T",
    },
    {
        key: "p",
        value: "S",
    },
    {
        key: "-",
        value: "L",
    },
    {
        key: "C",
        value: "B",
    },
    {
        key: "Q",
        value: "T",
    },
    {
        key: "q",
        value: "K",
    },
    {
        key: "w",
        value: "H",
    },
    {
        key: "A",
        value: "O",
    },
    {
        key: ";",
        value: "Z",
    },
    {
        key: "v",
        value: "U",
    },
    {
        key: "j",
        value: "S",
    },
    {
        key: "K",
        value: "A",
    }

];

for (var i = 0; i < obj.length; i++) {
    replacement_map_1.set(obj[i].key, obj[i].value);
}

function decode() {
    const cipher = document.getElementById("input_matrix").value;
    var map = new Map();
    for (var i = 0; i < cipher.length; i++) {
        let tmp = map.get(cipher[i]);
        if (!tmp) {
            tmp = 1;
        } else {
            tmp++;
        }
        map.set(cipher[i], tmp);
    }
    var map1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    var sorted_array = [];
    for (const [key, value] of map1) {
        sorted_array.push(key);
    }
    console.log(sorted_array);
    var replacement_map = new Map();
    for (var i = 0; i < 27; i++) {
        replacement_map.set(sorted_array[i], alphabetic_distribution[i]);
    }
    console.log(replacement_map_1);
    var result = "";
    for (var i = 0; i < cipher.length; i++) {
        if (replacement_map_1.has(cipher[i])) {
            result += replacement_map_1.get(cipher[i]);
        } else {
            result += cipher[i];
        }
    }
    console.log(result);
}


// unangepasste map nach erstmaligen decodieren:
/*
[
    {
        key: "W",
        value: " ",
    },
    {
        key: "H",
        value: "e",
    },
    {
        key: "u",
        value: "n",
    },
    {
        key: "s",
        value: "i",
    },
    {
        key: "i",
        value: "s",
    },
    {
        key: "o",
        value: "r",
    },
    {
        key: "z",
        value: "a",
    },
    {
        key: ",",
        value: "t",
    },
    {
        key: "F",
        value: "d",
    },
    {
        key: " ",
        value: "h",
    },
    {
        key: "b",
        value: "u",
    },
    {
        key: "n",
        value: "l",
    },
    {
        key: "I",
        value: "c",
    },
    {
        key: "B",
        value: "g",
    },
    {
        key: "?",
        value: "m",
    },
    {
        key: "r",
        value: "o",
    },
    {
        key: "Z",
        value: "b",
    },
    {
        key: "m",
        value: "w",
    },
    {
        key: ":",
        value: "f",
    },
    {
        key: "x",
        value: "k",
    },
    {
        key: "d",
        value: "z",
    },
    {
        key: "!",
        value: "p",
    },
    {
        key: "a",
        value: "v",
    },
    {
        key: "p",
        value: "j",
    },
    {
        key: "S",
        value: "y",
    },
    {
        key: "T",
        value: "x",
    },
    {
        key: "U",
        value: "q",
    },
];
*/



