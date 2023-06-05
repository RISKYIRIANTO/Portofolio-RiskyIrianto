const elementTeks = ['Graphic Designer', 'Photo and Video Editor'];
let count =0;
let txtIndex =0;
let currentTxt ='';
let words ='';

(function ngetik() {

    if (count == elementTeks.length){
        count = 0;
    }

    currentTxt = elementTeks[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.ketikan').textContent = words;

    
    if (words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 150);
    
})()