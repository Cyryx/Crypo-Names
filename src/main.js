// --main.js--
import { coinObj } from "../src/file.js";

let regEx = /^[^]+$/;
let buchstabenMap = new Map;
let buchstabenMapCount = new Map;
let fehler = []
let Arr = []

let text = "Aute consectetur proident consequat consectetur culpa pariatur consectetur enim dolore eu esse in tempor ad.";
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let outsourcing = [];

let funktionen_ausgeben = function () {
    create_Map();
    //coin_convert()
    coin_Symbol()
    coin_validieren()
}

let buchstaben_zaehlen = function (str) {
    str = str.toLowerCase();
    //Neuen wert in alte Map setzen
    for (let i = 0; i < str.length; i++) {
        //console.clear()
        for (let e = 0; e < alphabet.length; e++) {
            if (str.charAt(i) == alphabet[e]) {
                for (let key of buchstabenMap.keys()) {
                    if (key === alphabet[e]) {
                        let eintrag = buchstabenMap.set(alphabet[e], buchstabenMap.get(alphabet[e]) + 1)
                        if (fehler.length === 0) {
                            Arr.push(eintrag);
                        } else {
                            console.log(`%c Folgende Fehler wurden gefunden:`, 'background: #222; color: red');
                            this.fehler.forEach(function (fehler) {
                                console.log(`%c ${fehler}`, 'background: #222; color: red');
                            })
                        };
                    }
                };
            }
        }
    }
}

let coin_validieren = function () {
    let coinWert = Object.values(coinObj);
    coinWert.forEach(function (e) {
        if (e.match(regEx) !== null) {
            buchstaben_zaehlen(e);
        }
    });
}
//coin_validieren()

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
    let coinWert = Object.values(coinObj);
    let coinArr = [];
    coinWert.forEach(function (e) {
        if (e.match(regEx) !== null) {
            coinArr.push(e);
            coinArr.sort(coin_sort);
        }
    });
    console.log(coinArr)
    /* console.log(coinArr.forEach(function (e) {
        e.charAt(0) === "a";
    } ))*/
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

let coin_convert = function () {
    coinObj.indexOf(":")
}

funktionen_ausgeben();
