/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log("kijken als dit werkt!");



//Voor deze code heb ik hulp gekregen van S. Niewenhuizen.

document.addEventListener('keypress', function(e) {
    console.log("key clicked: " + e.keyCode);
    switch (e.keyCode) {

            //toetscode nummer 1.
        case 49: background_change(); break;

    }
});


function background_change() {
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "#05346F";
    }
    else {
        document.body.style.backgroundColor = "black";
    }

}









//Code van de vorige versie.
/*
function background_change() {
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "#05346F";
    }
    else {
        document.body.style.backgroundColor == "black";
    }

}
*/





/*

var heading = document.querySelector('h1');
heading.addEventListener('click', function () {
  heading.style.backgroundColor = 'green';
});
*/


