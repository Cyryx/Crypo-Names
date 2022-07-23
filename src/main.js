// --main.js--
import { coinObj } from "../src/file.js";
/////let coinObj;

let buchstabenMap = new Map();
//let buchstabenMapCount = new Map;
let fehler = [];
let Arr = [];
let buchstabenFilterArr = [];
let buchstabenFilterArr_2 = [];
let buchstabenFilterArr_3 = [];
let buchstabenFilterArr_4 = [];
let buchstabenFilterArr_5 = [];
let buchstabenFilterArr_6 = [];

let buchstabenFilter = "T";
let buchstabenFilterStelle = 0;
let buchstabenFilterLaenge = 3;

//let regEx = new RegExp("^[^" +buchstabenFilter+ "]+$");

//console.log(regEx)
let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "!",
  "§",
  "$",
  "%",
  "&",
  "/",
  "(",
  ")",
  "=",
  "?",
  "{",
  "[",
  "]",
  "}",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

window.onload = function () {
  // create_Map();
  //coin_validieren();
  // coin_Symbol(regEx);
  // coinPush();
  //coin_validieren()
  /*     create_li(buchstabenMap.keys(), "ausgabe_2")
        create_li(buchstabenMap.values(), "ausgabe_3") */
};

// let buchstaben_zaehlen = function (str) {
//     str = str.toLowerCase();
//     //Neuen wert in alte Map setzen
//     for (let i = 0; i < str.length; i++) {
//         for (let e = 0; e < alphabet.length; e++) {
//             if (str.charAt(i) == alphabet[e]) {
//                 for (let key of buchstabenMap.keys()) {
//                     if (key === alphabet[e]) {
//                         let eintrag = buchstabenMap.set(alphabet[e], buchstabenMap.get(alphabet[e]) + 1)
//                         if (fehler.length === 0) {
//                             Arr.push(eintrag).toLowerCase;
//                         } else {
//                             //console.log(`%c Folgende Fehler wurden gefunden:`, 'background: #222; color: red');
//                             this.fehler.forEach(function (fehler) {
//                                 //console.log(`%c ${fehler}`, 'background: #222; color: red');
//                             });
//                         };
//                     };
//                 };
//             };
//         };
//     };
// };

// let coin_validieren = function () {
//     let coinWert = filterArray(Object.values(coinObj));
//     coinWert.forEach(function (e) {
//         if (e.match(regEx) !== null) {
//             buchstaben_zaehlen(e);
//         }
//     });
// }


// let coin_Symbol = function () {
//     let coinWert = filterArray(Object.values(coinObj));
//     let coinArr = [];
//     let laenge = buchstabenFilterLaenge > "";
//     let filter = buchstabenFilter > "";
//     let stelle = buchstabenFilterStelle > "";

//     if (laenge && filter && !stelle) {

//         coinWert.forEach(function (e) {
//             if (
//                 e.match(regEx) !== null
//                 && e.length === buchstabenFilterLaenge
//             ) {
//                 for (let i = 0; i < e.length; i++) {
//                     if (e.charAt(i) === buchstabenFilter) {
//                         coinArr.push(e);
//                         coinArr.sort(coin_sort);
//                     }
//                 }
//             }
//         });
//     } else if (laenge && filter && stelle) {

//         coinWert.forEach(function (e) {
//             if (
//                 e.match(regEx) !== null
//                 && e.charAt(buchstabenFilterStelle) === buchstabenFilter
//                 && e.length === buchstabenFilterLaenge
//             ) {
//                 coinArr.push(e);
//                 coinArr.sort(coin_sort);
//             }
//         });
//     } else if (filter && stelle) {
//         coinWert.forEach(function (e) {
//             if (
//                 e.match(regEx) !== null
//                 && e.charAt(buchstabenFilterStelle) === buchstabenFilter
//             ) {
//                 coinArr.push(e);
//                 coinArr.sort(coin_sort);
//             }
//         });
//     } else if (filter && laenge) {
//         coinWert.forEach(function (e) {
//             for (let i = 0; i < buchstabenFilterLaenge; i++) {
//                 if (
//                     e.match(regEx) !== null
//                     && e.charAt(buchstabenFilterStelle) === buchstabenFilter
//                     && e.length === buchstabenFilterLaenge
//                 ) {
//                     coinArr.push(e);
//                     coinArr.sort(coin_sort);
//                 }
//             }
//         });
//     } else if (laenge) {
//         coinWert.forEach(function (e) {
//             if (
//                 e.match(regEx) !== null
//                 && e.length === buchstabenFilterLaenge
//             ) {
//                 coinArr.push(e);
//                 coinArr.sort(coin_sort);
//             }
//         });
//     } else {
//         console.log(`Schleife 6`)
//         coinWert.forEach(function (e) {
//             if (
//                 e.match(regEx) !== null
//             ) {
//                 coinArr.sort(coin_sort);
//                 coinArr.push(e);

//             }
//         });
//     }
//   //  create_li(coinArr, "ausgabe_1")
//     //console.log(coinArr);
//     return coinArr;
// }

// let create_Map = function () {
//     //Erstelle Maps A-Z
//     if (buchstabenMap.size <= 0) {
//         for (let Arr = 0; Arr < alphabet.length; Arr++) {
//             buchstabenMap.set(alphabet[Arr], 0);
//             //buchstabenMapCount.set(alphabet[Arr], 0);
//         }
//     }
// }

// let hasDuplicates = function () {
//     let coinWert = Object.values(coinObj);

//     const toFindDuplicates = coinWert => coinWert.filter((item, index) => coinWert.indexOf(item) !== index)
//     const duplicateElementa = toFindDuplicates(coinWert);
//     console.log(duplicateElementa);
//     //create_li(duplicateElementa, "ausgabe_4");
// }

// let filter_Set = function (Arr) {
//     return Array.from(new Set(Arr))
// }

// let coinPush = function (stelle, filter) {
//     let coinWert = Object.values(coinObj);
//     let coinOutput = new Set(coinWert);

//     let coinArr = [];
//     console.log(`Filter: ${buchstabenFilterArr} Filter Länge: ${buchstabenFilterLaenge}`)

//     coinWert.forEach(function (coinwert_element) {
//         //console.log(`Schleife 1`)

//         if (coinwert_element.match(regEx) !== null) {
//             for (let i = 0; i < coinwert_element.length; i++) {

//                 if (buchstabenFilterArr != 0) {

//                     buchstabenFilterArr.forEach(function (b) {
//                         if (
//                             coinwert_element.length === buchstabenFilterLaenge
//                             && coinwert_element.charAt(i) === b
//                         ) {
//                             coinArr.push(coinwert_element);
//                             //console.log("1")
//                         } else if (
//                             buchstabenFilterLaenge <= 0
//                             && coinwert_element.charAt(i) === b
//                         ) {
//                             //coinArr.push(coinwert_element);
//                             console.log("2")
//                         }
//                     })
//                 } else {
//                     alphabet.forEach(function (b) {
//                         if (
//                             coinwert_element.length === buchstabenFilterLaenge
//                             && coinwert_element.charAt(i) === b
//                         ) {
//                             coinArr.push(coinwert_element);
//                             //console.log("3")
//                         } else if (
//                             buchstabenFilterLaenge <= 0
//                             && coinwert_element.charAt(i) === b
//                         ) {
//                             coinArr.push(coinwert_element);
//                             console.log("4")

//                         }

//                     })
//                 }
//             }
//         }
//     });

//     filterArray(coinArr)

//     let laenge = 3
//     let f1 = "";
//     let f2 = "";
//     let f3 = "";
//     let f4 = "";
//     let f5 = "";
//     let f6 = "";

//     let array1 = []

//     coinArr.forEach(function (e) {
//         if (e.length === laenge) {
//             array1.push(e)
//             for (let i = 0; i < e.length; i++) {
//                 if (e.charAt(i) === f1 && f1 != "") {
//                     array1.push(e)
//                     for (let i = 0; i < e.length; i++) {
//                         if (e.charAt(i) === f2 && f2 != "") {
//                             array1.push(e)
//                             for (let i = 0; i < e.length; i++) {
//                                 if (e.charAt(i) === f3 && f3 != "") {
//                                     array1.push(e)
//                                     for (let i = 0; i < e.length; i++) {
//                                         if (e.charAt(i) === f4 && f4 != "") {
//                                             array1.push(e)
//                                             for (let i = 0; i < e.length; i++) {
//                                                 if (e.charAt(i) === f5 && f5 != "") {
//                                                     array1.push(e)
//                                                     for (let i = 0; i < e.length; i++) {
//                                                         if (e.charAt(i) === f6) {
//                                                             array1.push(e)
//                                                         } else if (f6 == "") { array1.push(e) }
//                                                     }
//                                                 } else if (f5 == "") { array1.push(e) }
//                                             }
//                                         } else if (f4 == "") { array1.push(e) }
//                                     }
//                                 } else if (f3 == "") { array1.push(e) }
//                             }
//                         } else if (f2 == "") { array1.push(e) }
//                     }
//                 }
//             }
//         }
//     })
//     //,console.log(filterArray(array1))

//     coinArr.sort(coin_sort);
//     //console.log(coinArr)

//     //symbol_Input(coinArr, ".liste_symbol > section")

//     /* //create_li(filter_Set(coinArr), "ausgabe_1")
//     filter_Set(coinArr).forEach(function (e) {
//         taskList(e)
//     }) */
// }

//let button = document.getElementById("taskButton");

//button.addEventListener('click', () => taskList());

// function taskList(arr) {
//     let item = arr;
//     let newTask = document.createElement("li");
//     let deleteTaskButton = document.createElement("button");
//     deleteTaskButton.textContent = `Delete `; //+item;
//     newTask.innerText = item;
//     document.getElementById("ausgabe_1").appendChild(newTask);
//     newTask.appendChild(deleteTaskButton);    /* 1. ADD BUTTON TO LI */

//     if (markTaskComplete) {
//         //newTask.addEventListener('click', (e) => markTaskComplete(e));
//         deleteTaskButton.addEventListener('click', (i) => removeTask(i));
//     }
// }

// function markTaskComplete(e) {
//     /*     let strikeThrough = e.target;
//         strikeThrough.style.textDecoration = "line-through"; */
// }

// function removeTask(i) {
//     /* 2. THE BUTTON IS NOW A CHILD OF THE LI, SO DELETE ITS PARENT */
//     let deleteTask = i.target.parentElement;
//     deleteTask.remove();
// }

// let symbol_Input = function (arr, query) {
//     arr.forEach(function (e) {
//         let quer = document.querySelector(query);
//         let ausgabe_hinzu = document.createElement("p");
//         let child = quer.appendChild(ausgabe_hinzu);
//         let text = document.createTextNode(`${e}`);
//         child.appendChild(text)
//     });
// };

// let create_input = function (inputNr) {
//     let quer = document.querySelector(".input");

//     for (let i = 1; i <= inputNr; i++) {
//         let crt_input = document.createElement("input");
//         let setAttr_type = crt_input.setAttribute("type", "text");
//         let setAttr_class = crt_input.setAttribute("class", "input");
//         let t = crt_input.setAttribute("input", "disabled")
//         let setAttr_id = crt_input.setAttribute("id", "searchInput");
//         let setAttr_playceholder = crt_input.setAttribute("placeholder", i);
//         let child = quer.appendChild(crt_input);

//     }

//     let qr = document.querySelector(".input");
//     let crt_btn = document.createElement("button");
//     let setAttr_btn = crt_btn.setAttribute("class", "button");

//     crt_btn.append("suchen");
//     qr.appendChild(crt_btn)

// }

// //create_input(3)

// let getValue = function () {
//     document.querySelector('.button').disabled = true;

//     console.log(document.getElementById(".button"));
//     create_input(document.getElementById("lengthInput").value)
// }

/* 
let coin_Suchen = function () {
    let coinWert = filterArray(Object.values(coinObj));

    let lang = 3;
    let filter = "T";
    coinWert.forEach(function (e, a) {
        let stelle = [1,2]
        
        for (let i = 0; i < stelle.length; i++) {
  
            if (e.length === lang
                && e.charAt(i) === filter) {
                console.log(e)
                
            

            } else if (e.length === lang
            ) {
                console.log(e)
                
            
            }
        }



            

        

        

    })
}
coin_Suchen();
 */

// let suchen_stelle = function (stelle, filter = [], laenge, not) {
//     let coinWert = filterArray(Object.values(coinObj));
//     //console.log(coinWert)

//     if (not) {
//         coinWert.forEach(function (e) {

//             for (let i = 0; i < e.length; i++) {
//                 if (e.length === laenge
//                     && e.charAt(not) === filter
//                     && e.match(regEx) !== null) {
//                     test.add(e);
//                 }
//             }
//         });
//     } else {
//         coinWert.forEach(function (e) {

//             for (let i = 0; i < e.length; i++) {
//                 if (e.length === laenge
//                     && e.charAt(i) === filter[i]
//                     && e.match(regEx) !== null) {
//                     test.push(e);

//                 }
//             }

//             /* if (i == 2) {
//                                     test.clear()
//                                     console.log(44)
//                                 }
//              */
//         });

//         console.log(filterArray(test))
//         /* for (let h = 0; h <= test.length; h++) {
//             if (h == test.length) {
//                 console.log("Löschen " + true)
//                 test.splice(0)
//                 console.log(test)
//             }

//         } */

//         //console.log(test_2.length)
//     } // console.log(test)
// }
// //suchen_stelle(null, ["T","L","V"], 3);

// let suchen_stelle_1 = function (arr, stelle, filter, laenge) {
//     let coinWert = filterArray(Object.values(coinObj));

//     arr.forEach(function (e) {
//         for (let i = 0; i < e.length; i++) {
//             if (e.length === laenge
//                 && e.charAt(stelle) !== filter) {
//                 test.add(e);

//             }
//         }
//     });
//     //console.log(test())

// }

// //suchen_stelle_1( test,3, "L", 4)
// //suchen_stelle_1(test, 1, "B", 5)

// /*
// let suchen_Zufall = function (arr, filters) {

//     arr.forEach(function (e) {
//         for (let i = 0; i < e.length; i++) {
//             if (e.charAt(i) !== filters) {

//                 test_2.add(e);

//                 if (test.indexOf("S") > -1) {
//                     alert("hello found inside your_string");
//                 }

//             }
//         }
//     });
//     //console.log(test)

// }
// create_li(test, "ausgabe_1")

 
let coin_sort = function (a, b) {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
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
  let ol = document.createElement("ol");
  for (let i of arr) {
    let li = document.createElement("li");
    li.innerHTML = i;
    ol.appendChild(li);
  }
  return document.getElementById(`${target}`).appendChild(ol);
};
let regEx = /^[^$1234567890LTCOUSWP]+$/i;

let input = [];
let output = new Set();

let buchstabenfilterLaenge = 7;
let buchstabenfilter1 = "A";
let buchstabenfilter2 = "I";
let buchstabenfilter3 = "N";
let buchstabenfilter4 = "";
let buchstabenfilter5 = "";
let buchstabenfilter6 = "";
let buchstabenfilter7 = "";
let buchstabenfilter8 = "";
let buchstabenfilter9 = "";
let buchstabenfilter10 = "";

let letterSearch = function () {
  //console.log(coinWert)
  let coinWert = filterArray(Object.values(coinObj));

  coinWert.forEach(function (e, i, a) {
    if (a[i].length === buchstabenfilterLaenge) {
      if (a[i].match(buchstabenfilter1)) {
        input.push(`${a[i]}`);
      }
    }
  });

  input.forEach(function (e, i, a) {
    if (a[i].length === buchstabenfilterLaenge && a[i].match(regEx) !== null) {
      if (
        buchstabenfilter1 !== "" &&
        buchstabenfilter2 === "" &&
        a[i].match(buchstabenfilter1) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter2 !== "" &&
        buchstabenfilter3 === "" &&
        a[i].match(buchstabenfilter2) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter3 !== "" &&
        buchstabenfilter4 === "" &&
        a[i].match(buchstabenfilter3) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter4 !== "" &&
        buchstabenfilter5 === "" &&
        a[i].match(buchstabenfilter4) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter5 !== "" &&
        buchstabenfilter6 === "" &&
        a[i].match(buchstabenfilter5) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter6 !== "" &&
        buchstabenfilter7 === "" &&
        a[i].match(buchstabenfilter6) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter7 !== "" &&
        buchstabenfilter8 === "" &&
        a[i].match(buchstabenfilter7) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter8 !== "" &&
        buchstabenfilter9 === "" &&
        a[i].match(buchstabenfilter8) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter9 !== "" &&
        buchstabenfilter10 === "" &&
        a[i].match(buchstabenfilter9) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter10 !== "" &&
        a[i].match(buchstabenfilter10) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (buchstabenfilter1 === "") {
        output.add(`${a[i]} 0`);
      }
    }
  });

    input = [];
  console.log(Array.from(output).sort());
  create_li(Array.from(output).sort(), "ausgabe_1");
};
letterSearch();
