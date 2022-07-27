import { wodl_1 } from "../src/wodl.js"
const inputFilesValue = Object.values(wodl_1)

let searchLetter = []
const wordLength = 3;

let arrayNumbers = Array.from(Array(wordLength).keys());
let map = new Map();
let setCollect = new Set();
let setSort = new Set();

if (wordLength === 0 && searchLetter == "") {
    console.log(inputFilesValue)
} else if (wordLength > 0 && searchLetter=="") {
    inputFilesValue.forEach(function (ele) {
        //Nur elemente mit exakter länge ausgeben
        if (ele.length === wordLength) { 
            console.log(ele)
        }
    })
}
else {
    //Buchstaben array in Map speichern 
    searchLetter.forEach(function (e, inte, array) {
        map.set(inte, `Buchstabelfilter${arrayNumbers[inte]}`)
        //console.log(searchLetter)

        inputFilesValue.forEach(function (ele) {
            //Nur elemente mit exakter länge ausgeben
            if (ele.length === wordLength) {
                for (let i = 0; i < ele.length; i++) {
                    if (ele.charAt([i]) === array[inte]) {
                        let e = inte + 1
                        //console.log(e)
                        if (ele.charAt([e]) === array[inte + 1] && inte + 1 <= ele.length) {
                            setCollect.add(ele)
                        } else {
                            setSort.add(ele)
                        }
                    }
                }
            } 
        }
        )
    })
    if (searchLetter > 1) {    console.log(setSort.values())


    } else {
         console.log(setCollect.values())
       
}

}