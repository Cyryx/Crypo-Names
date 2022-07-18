// --main.js--
import { coinObj } from "../src/file.js";


let buchstabenMap = new Map;
let buchstabenMapCount = new Map;
let fehler = []
let Arr = []

let buchstabenFilterLaenge = 6;
let buchstabenFilterStelle = 0;
let buchstabenFilter = "";

//let regEx = new RegExp("^[^" +buchstabenFilter+ "]+$");
let regEx = /^[^$1234567890]+$/;


//console.log(regEx)
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "§", "$", "%", "&", "/", "(", ")", "=", "?", "{", "[", "]", "}", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


window.onload = function () {
    create_Map();
    //coin_validieren();
    coin_Symbol(regEx);
    coin_validieren()
    create_li(buchstabenMap.keys(), "ausgabe_2")
    create_li(buchstabenMap.values(), "ausgabe_3")
}

let buchstaben_zaehlen = function (str) {
    str = str.toLowerCase();
    //Neuen wert in alte Map setzen
    for (let i = 0; i < str.length; i++) {
        for (let e = 0; e < alphabet.length; e++) {
            if (str.charAt(i) == alphabet[e]) {
                for (let key of buchstabenMap.keys()) {
                    if (key === alphabet[e]) {
                        let eintrag = buchstabenMap.set(alphabet[e], buchstabenMap.get(alphabet[e]) + 1).toLowerCase
                        if (fehler.length === 0) {
                            Arr.push(eintrag);
                        } else {
                            //console.log(`%c Folgende Fehler wurden gefunden:`, 'background: #222; color: red');
                            this.fehler.forEach(function (fehler) {
                                //console.log(`%c ${fehler}`, 'background: #222; color: red');
                            });
                        };
                    };
                };
            };
        };
    };
};

let coin_validieren = function () {
    let coinWert = filterArray(Object.values(coinObj));
    coinWert.forEach(function (e) {
        if (e.match(regEx) !== null) {
            buchstaben_zaehlen(e);
        }
    });
}

let coin_sort = function (a, b) {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
}

let coin_Symbol = function () {
    let coinWert = filterArray(Object.values(coinObj));
    let coinArr = [];
    let laenge = buchstabenFilterLaenge > "";
    let filter = buchstabenFilter > "";
    let stelle = buchstabenFilterStelle > "";

    if (laenge && filter && !stelle) {

        coinWert.forEach(function (e) {
            //console.log(`Schleife 1`)
            if (
                e.match(regEx) !== null
                && e.length === buchstabenFilterLaenge
            ) {
                for (let i = 0; i < e.length; i++) {
                    if (e.charAt(i) === buchstabenFilter) {
                        coinArr.push(e);
                        coinArr.sort(coin_sort);
                    }
                }
            }
        });
    } else if (laenge && filter && stelle) {

        coinWert.forEach(function (e) {
            //console.log(`Schleife 2`)
            if (
                e.match(regEx) !== null
                && e.charAt(buchstabenFilterStelle) === buchstabenFilter
                && e.length === buchstabenFilterLaenge
            ) {
                coinArr.push(e);
                coinArr.sort(coin_sort);
            }
        });
    } else if (filter && stelle) {
        //console.log(`Schleife 3`)
        coinWert.forEach(function (e) {
            if (
                e.match(regEx) !== null
                && e.charAt(buchstabenFilterStelle) === buchstabenFilter
            ) {
                coinArr.push(e);
                coinArr.sort(coin_sort);
            }
        });
    } else if (filter && laenge) {
        //console.log(`Schleife 4`)
        coinWert.forEach(function (e) {
            for (let i = 0; i < buchstabenFilterLaenge; i++) {
                if (
                    e.match(regEx) !== null
                    && e.charAt(buchstabenFilterStelle) === buchstabenFilter
                    && e.length === buchstabenFilterLaenge
                ) {
                    coinArr.push(e);
                    coinArr.sort(coin_sort);
                }
            }
        });
    } else if (laenge) {
        coinWert.forEach(function (e) {
            //console.log(`Schleife 5`)
            if (
                e.match(regEx) !== null
                && e.length === buchstabenFilterLaenge
            ) {
                coinArr.push(e);
                coinArr.sort(coin_sort);
            }
        });
    } else {
        //console.log(`Schleife 6`)
        coinWert.forEach(function (e) {
            if (
                e.match(regEx) !== null
            ) {
                coinArr.push(e);
                coinArr.sort(coin_sort);
            }
        });
    }
    create_li(coinArr, "ausgabe_1")
    //console.log(coinArr);
    return coinArr;

}

let create_Map = function () {
    //Erstelle Maps A-Z
    if (buchstabenMap.size <= 0) {
        for (let Arr = 0; Arr < alphabet.length; Arr++) {
            buchstabenMap.set(alphabet[Arr], 0);
            buchstabenMapCount.set(alphabet[Arr], 0);
        }
    }
}

function filterArray(inputArr) {
    var found = {};
    var out = inputArr.filter(function (element) {
        return found.hasOwnProperty(element) ? false : (found[element] = true);
    });
    return out;
}

let create_li = function (arr, target) {
    let ol = document.createElement("ul");
    for (let i of arr) {
        let li = document.createElement("li");
        li.innerHTML = i;
        ol.appendChild(li);
    }
    return document.getElementById(`${target}`).appendChild(ol);
}
let hasDuplicates = function () {
    let coinWert = Object.values(coinObj);


    const toFindDuplicates = coinWert => coinWert.filter((item, index) => coinWert.indexOf(item) !== index)
    const duplicateElementa = toFindDuplicates(coinWert);
    console.log(duplicateElementa);
    create_li(duplicateElementa, "ausgabe_4");
}
hasDuplicates()




