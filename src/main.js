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
let regEx = /^[^$1234567890LGOBEMSN]+$/i;

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
  let coinWert = filterArray(Object.values(coinObj));

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

let buchstabenfilterLaenge = 3;
let buchstabenfilter1 = "A";
let buchstabenStelle_1 = false;
let buchstabenfilter2 = "D";
let buchstabenfilter3 = "A";
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
      // create_li(Array.from(output).sort(), "ausgabe_1");
      cleanOutput.push(e)

    }
    else if (
      buchstabenStelle &&
      buchstabenfilter &&
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

 stelle(buchstabenStelle_1, buchstabenfilter1, 0)



let test = function () {
  if (condition) {

  }
}

