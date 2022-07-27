// --main.js--
import { coinObj } from "../src/file.js";
import {wodl_1} from "../src/wodl.js"
/////let coinObj;

const inputFilesCoin = wodl_1;


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

let buchstabenFilter = "";
let buchstabenFilterStelle = 0;
let buchstabenFilterLaenge = 3;
let regEx = /^[^$1234567890]+$/i;

//let regEx = new RegExp("^[^" +buchstabenFilter+ "]+$");

//console.log(regEx)
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "§", "$", "%", "&", "/", "(", ")", "=", "?", "{", "[", "]", "}", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

window.onload = function () {
  create_li(count.keys(), "ausgabe_2")
  create_li(count.values(), "ausgabe_3")
};



  let count = new Map();
let letterCount = function (arr) {


  if (count.size <= 0) {
    for (let Arr = 0; Arr < alphabet.length; Arr++) {
      count.set(alphabet[Arr], 0);
      //buchstabenMapCount.set(alphabet[Arr], 0);
    }
  }

  for (let a = 0; a < arr.length; a++) {
    for (let i = 0; i < alphabet.length; i++) {
      if (arr.charAt(a) === alphabet[i]) {
        //console.log(arr.charAt(a))
        
        for (let key of count.keys()) {

          if (key === alphabet[i]) {
            //console.log(key)
            count.set(alphabet[i], count.get(alphabet[i]) + 1)
          }
        }

      }
    }
  }
  //console.log(count)
  
}



let letterCounter = function () {
  let coinWert = filterArray(Object.values(inputFilesCoin));

  coinWert.forEach(function (e) {
    if (e.match(regEx) !== null) {
      letterCount(e);
    }
  });

}

letterCounter()

// letterCount();

// let create_Map = function () {
//     //Erstelle Maps A-Z
//     if (buchstabenMap.size <= 0) {
//         for (let Arr = 0; Arr < alphabet.length; Arr++) {
//             buchstabenMap.set(alphabet[Arr], 0);
//             //buchstabenMapCount.set(alphabet[Arr], 0);
//         }
//     }
// }


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
    let li = document.createElement("p");
    li.innerHTML = i;
    ol.appendChild(li);
  }
  return document.getElementById(`${target}`).appendChild(ol);
};

let input = [];
let output = new Set();

let buchstabenfilterLaenge = 7;
let buchstabenfilter_1 = "A";
let buchstabenStelle_1 = false;
let buchstabenfilter_2 = "";
let buchstabenStelle_2 = false;
let buchstabenfilter_3 = "";
let buchstabenStelle_3 = false;
let buchstabenfilter_4 = "";
let buchstabenStelle_4 = false;
let buchstabenfilter_5 = "";
let buchstabenStelle_5 = false;
let buchstabenfilter_6 = "";
let buchstabenStelle_6 = false;
let buchstabenfilter_7 = "";
let buchstabenStelle_7 = false;
let buchstabenfilter_8 = "";
let buchstabenStelle_8 = false;
let buchstabenfilter_9 = "";
let buchstabenStelle_9 = false;
let buchstabenfilter_10 = "";
let buchstabenStelle_10 = false;










let letterSearch = function () {
  //console.log(coinWert)
  let coinWert = filterArray(Object.values(inputFilesCoin));

  coinWert.forEach(function (e, i, a) {
    if (a[i].length === buchstabenfilterLaenge) {
      if (a[i].match(buchstabenfilter_1)) {
        input.push(`${a[i]}`);
      }
    }
  });

  input.forEach(function (e, i, a) {
    if (a[i].length === buchstabenfilterLaenge && a[i].match(regEx) !== null) {
      if (
        buchstabenfilter_1 !== "" &&
        buchstabenfilter_2 === "" &&
        a[i].match(buchstabenfilter_1) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter_2 !== "" &&
        buchstabenfilter_3 === "" &&
        a[i].match(buchstabenfilter_2) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter_3 !== "" &&
        buchstabenfilter_4 === "" &&
        a[i].match(buchstabenfilter_3) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter_4 !== "" &&
        buchstabenfilter_5 === "" &&
        a[i].match(buchstabenfilter_4) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter_5 !== "" &&
        buchstabenfilter_6 === "" &&
        a[i].match(buchstabenfilter_5) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter_6 !== "" &&
        buchstabenfilter_7 === "" &&
        a[i].match(buchstabenfilter_6) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter_7 !== "" &&
        buchstabenfilter_8 === "" &&
        a[i].match(buchstabenfilter_7) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter_8 !== "" &&
        buchstabenfilter_9 === "" &&
        a[i].match(buchstabenfilter_8) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter_9 !== "" &&
        buchstabenfilter_10 === "" &&
        a[i].match(buchstabenfilter_9) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (
        buchstabenfilter_10 !== "" &&
        a[i].match(buchstabenfilter_10) !== null
      ) {
        output.add(`${a[i]} `);
      } else if (buchstabenfilter_1 === "") {
        output.add(`${a[i]} 0`);
      }
    }
  });

  input = [];
  /* console.log(Array.from(output).sort()); */

};

letterSearch();


let stelle = function (buchstabenStelle, buchstabenfilter, stelle) {
  let cleanOutput = [];

  output.forEach(function (e, a, i) {
    if (
      !buchstabenStelle &&
      buchstabenfilter
    ) {
      cleanOutput.push(e)
    }
    else if (
      buchstabenStelle_1 &&
      buchstabenfilter_1 &&
      stelle >= 0
    ) {

      if (e.charAt(stelle) === buchstabenfilter) {
        cleanOutput.push(e)
      }

    }
    
    
    
    
    
    
    
    
    
    
    
    
    else { console.log(stelle) }
  })
      console.log()
      create_li(Array.from(cleanOutput).sort(), "ausgabe_1");

}

 stelle(buchstabenStelle_1, buchstabenfilter_1, 1)



let test = function () {
  if (condition) {

  }
}

