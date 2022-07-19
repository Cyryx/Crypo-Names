// --main.js--
import { coinObj } from "../src/file.js";


let buchstabenMap = new Map;
//let buchstabenMapCount = new Map;
let fehler = []
let Arr = []
let buchstabenFilterArr = []

let buchstabenFilterLaenge = 0;


//let regEx = new RegExp("^[^" +buchstabenFilter+ "]+$");
//let regEx = /^[^$1234567890PpAaXxGgBbUuSsDdlinkLINKRYry]+$/;
let regEx = /^[^123456789§$%&/()=?{}#+*~]+$/;

//console.log(regEx)
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "§", "$", "%", "&", "/", "(", ")", "=", "?", "{", "[", "]", "}", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

window.onload = function () {
    create_Map();
    //coin_validieren();
    //coin_Symbol(regEx);
    coinPush();
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
                        let eintrag = buchstabenMap.set(alphabet[e], buchstabenMap.get(alphabet[e]) + 1)
                        if (fehler.length === 0) {
                            Arr.push(eintrag).toLowerCase;
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
            console.log(`Schleife 1`)
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
            console.log(`Schleife 2`)
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
        console.log(`Schleife 3`)
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
        console.log(`Schleife 4`)
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
            console.log(`Schleife 5`)
            if (
                e.match(regEx) !== null
                && e.length === buchstabenFilterLaenge
            ) {
                coinArr.push(e);
                coinArr.sort(coin_sort);
            }
        });
    } else {
        console.log(`Schleife 6`)
        coinWert.forEach(function (e) {
            if (
                e.match(regEx) !== null
            ) {
                coinArr.sort(coin_sort);
                coinArr.push(e);

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
            //buchstabenMapCount.set(alphabet[Arr], 0);
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
        let li = document.createElement("p");
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
    //create_li(duplicateElementa, "ausgabe_4");
}

let filter_Set = function (Arr) {
    return Array.from(new Set(Arr))
}

let coinPush = function (stelle, filter) {
    let coinWert = Object.values(coinObj);
    let coinOutput = new Set(coinWert);

    let coinArr = [];
    console.log(`Filter: ${buchstabenFilterArr} Filter Länge: ${buchstabenFilterLaenge}`)
    coinWert.forEach(function (coinwert_element) {
        console.log(`Schleife 1`)

        if (coinwert_element.match(regEx) !== null) {
            for (let i = 0; i < coinwert_element.length; i++) {

                if (buchstabenFilterArr != 0) {

                    buchstabenFilterArr.forEach(function (b) {
                        if (
                            coinwert_element.length === buchstabenFilterLaenge
                            && coinwert_element.charAt(i) === b
                        ) {
                            coinArr.push(coinwert_element);
                            console.log("1")
                        } else if (
                            buchstabenFilterLaenge <= 0
                            && coinwert_element.charAt(i) === b
                        ) {
                            coinArr.push(coinwert_element);
                            console.log("2")
                        }
                    })
                } else {
                    alphabet.forEach(function (b) {
                        if (
                            coinwert_element.length === buchstabenFilterLaenge
                            && coinwert_element.charAt(i) === b
                        ) {
                            coinArr.push(coinwert_element);
                            console.log("3")
                        } else if (
                            buchstabenFilterLaenge <= 0
                            && coinwert_element.charAt(i) === b
                        ) {
                            coinArr.push(coinwert_element);
                            console.log("4")

                        } 

                    })
                }
            }
        }
    });
    coinArr.sort(coin_sort);

    console.log(filter_Set(coinArr));

    //create_li(filter_Set(coinArr), "ausgabe_1")
    filter_Set(coinArr).forEach(function (e) {
        taskList(e)

    })
}

let button = document.getElementById("taskButton");
button.addEventListener('click', () => taskList());

function taskList(arr) {
    let item = arr;
    let newTask = document.createElement("li");
    let deleteTaskButton = document.createElement("button");
    deleteTaskButton.textContent = `Delete `; //+item;
    newTask.innerText = item;
    document.getElementById("ausgabe_1").appendChild(newTask);
    newTask.appendChild(deleteTaskButton);    /* 1. ADD BUTTON TO LI */
  
    if (markTaskComplete) {
      //newTask.addEventListener('click', (e) => markTaskComplete(e));
      deleteTaskButton.addEventListener('click', (i) => removeTask(i));
    }
  }
  
  
  function markTaskComplete(e) {
/*     let strikeThrough = e.target;
    strikeThrough.style.textDecoration = "line-through"; */
  }
  
  function removeTask(i) {
    /* 2. THE BUTTON IS NOW A CHILD OF THE LI, SO DELETE ITS PARENT */
    let deleteTask = i.target.parentElement;
    deleteTask.remove();
  }