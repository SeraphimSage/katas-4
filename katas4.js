//global variables/arrays
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
let gotCitiesCSVArray = [gotCitiesCSV];
let bestThingArray = [bestThing]

//Write a function that returns an array with the cities in 'gotCitiesCSV'. Remember to also append the results to the page.
function kata1() {
    let kata1 = document.createElement("p");

    //Output1 creates text to be added
    let output1 = document.createTextNode(gotCitiesCSVArray);

    //Append text to the end of new div
    kata1.appendChild(output1);

    //Add new content and elements to DOM
    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata1, currentDiv);
}
kata1();

//Write a function that returns an array of words from the sentence in 'bestThing'. Remember to also append the results to the page.
function kata2() {
  let kata2 = document.createElement("p");

  let output2 = document.createTextNode(bestThingArray);

  kata2.appendChild(output2);

  let currentDiv = document.getElementById("h1");
  document.body.insertBefore(kata2, currentDiv);
}
kata2();

//Write a function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'. Remember to also append the results to the page.
function kata3() {
    let kata3 = document.createElement("p");

    let kata3split = gotCitiesCSV.split(",")

    for (let i = 0; i < kata3split.length; i++){
    let output3 = document.createTextNode(kata3split[i] + "; ");

    kata3.appendChild(output3);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata3, currentDiv);
    }

}
kata3();

//Write a function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'. Remember to also append the results to the page.
function kata4() {
    let kata4 = document.createElement("p");

    for (let i = 0; i < lotrCitiesArray.length; i++){
    let output4 = document.createTextNode(lotrCitiesArray[i] + ", ");

    kata4.appendChild(output4);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata4, currentDiv);
    }
}
kata4();

//Write a function that returns an array with the first 5 cities in 'lotrCitiesArray'. Remember to also append the results to the page.
function kata5() {
    let kata5 = document.createElement("p");

    for (let i = 0; i < 5; i++){
        let output5 = document.createTextNode(lotrCitiesArray[i] + ", ");

        kata5.appendChild(output5);

        let currentDiv = document.getElementById("h1");
        document.body.insertBefore(kata5, currentDiv);
    }
}
kata5();

//Write a function that returns an array with the last 5 cities in 'lotrCitiesArray'. Remember to also append the results to the page.
function kata6() {
    let kata6 = document.createElement("p");

    for (let i = 3; i < lotrCitiesArray.length; i++){
        let output6 = document.createTextNode(lotrCitiesArray[i] + ", ");

        kata6.appendChild(output6);

        let currentDiv = document.getElementById("h1");
        document.body.insertBefore(kata6, currentDiv);
    }
}
kata6();

//Write a function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'. Remember to also append the results to the page.
function kata7() {
    let kata7 = document.createElement("p");

    for (let i = 2; i <= 4; i++){
        let output7 = document.createTextNode(lotrCitiesArray[i] + ", ");

        kata7.appendChild(output7);

        let currentDiv = document.getElementById("h1");
        document.body.insertBefore(kata7, currentDiv);
    }
}
kata7();

//Write a function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
function kata8() {
    let kata8 = document.createElement("p");

    let rememoveRohan = lotrCitiesArray.splice(2,1);

    let output8 = document.createTextNode(lotrCitiesArray);

    kata8.appendChild(output8);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata8, currentDiv);
}
kata8();

//Write a function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
function kata9() {
    let kata9 = document.createElement("p");

    let removeRhunHarad = lotrCitiesArray.splice(5);

    let output9 = document.createTextNode(lotrCitiesArray);

    kata9.appendChild(output9);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata9, currentDiv);
}
kata9();

//Write a function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
function kata10() {
    let kata10 = document.createElement("p");

    let addRohan = lotrCitiesArray.splice(2, 0, "Rohan");

    let output10 = document.createTextNode(lotrCitiesArray);

    kata10.appendChild(output10);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata10, currentDiv);
}
kata10();

//Write a function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
function kata11() {
    let kata11 = document.createElement("p");

    let renameDeadMarshes = lotrCitiesArray.splice(5,1, "Deadest Marshes");

    let output11 = document.createTextNode(lotrCitiesArray);

    kata11.appendChild(output11);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata11, currentDiv);
}
kata11();

//Write a function that uses 'slice' to return a string with the first 14 characters from 'bestThing'. Remember to also append the results to the page.
function kata12() {
    let kata12 = document.createElement("p");

    let beginBestThing = bestThing.split("").splice(0,14).join("");

    let output12 = document.createTextNode(beginBestThing);

    kata12.appendChild(output12);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata12, currentDiv);
}
kata12();

//Write a function that uses 'slice' to return a string with the last 12 characters from 'bestThing'. Remember to also append the results to the page.
function kata13() {
    let kata13 = document.createElement("p");

    let endBestThing = bestThing.split("").splice(69,12).join("");

    let output13 = document.createTextNode(endBestThing);

    kata13.appendChild(output13);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata13, currentDiv);
}
kata13();

//Write a function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even'). Remember to also append the results to the page.
function kata14() {
    let kata14 = document.createElement("p");

    let midBestThing = bestThing.split("").splice(23,15).join("");

    let output14 = document.createTextNode(midBestThing);

    kata14.appendChild(output14);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata14, currentDiv);
}
kata14();

//Write a function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'. Remember to also append the results to the page.
function kata15() {
    kata15 = document.createElement("p");

    let endBestThing2 = bestThing.substring(69,81);

    let output15 = document.createTextNode(endBestThing2);

    kata15.appendChild(output15);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata15, currentDiv);
}
kata15();

//Write a function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'. Remember to also append the results to the page.
function kata16() {
    kata16 = document.createElement("p");

    let midBestThing2 = bestThing.substring(23,38);

    let output16 = document.createTextNode(midBestThing2);

    kata16.appendChild(output16);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata16, currentDiv);
}
kata16();

//Write a function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the new array. Remember to also append the results to the page.
function kata17() {
    kata17 = document.createElement("p");

    let popLotrCitiesArray = lotrCitiesArray.pop();

    let output17 = document.createTextNode(lotrCitiesArray);

    kata17.appendChild(output17);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata17, currentDiv);
}
kata17();

//Write a function that uses 'push' to add back the city from 'lotrCitiesArray' that was removed in #17 to the back of the array and returns the new array. Remember to also append the results to the page.
function kata18() {
    kata18 = document.createElement("p");

    let pushLotrCitiesArray = lotrCitiesArray.push("Deadest Marshes");

    let output18 = document.createTextNode(lotrCitiesArray);

    kata18.appendChild(output18);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata18, currentDiv);
}
kata18();

//Write a function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the new array. Remember to also append the results to the page.
function kata19() {
    kata19 = document.createElement("p");

    let shitLotrCitiesArray = lotrCitiesArray.shift(lotrCitiesArray);

    let output19 = document.createTextNode(lotrCitiesArray);

    kata19.appendChild(output19);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata19, currentDiv);
}
kata19();

//Write a function that uses 'unshift' to add back the city from 'lotrCitiesArray' that was removed in #19 to the front of the array and returns the new array. Remember to also append the results to the page.
function kata20() {
    kata20 = document.createElement("p");

    let unshiftLotrCitiesArray = lotrCitiesArray.unshift("Mordor");

    let output20 = document.createTextNode(lotrCitiesArray);

    kata20.appendChild(output20);

    let currentDiv = document.getElementById("h1");
    document.body.insertBefore(kata20, currentDiv);
}
kata20();

//Bonus
//Write a function that finds and returns the index of 'only' in 'bestThing'. Remember to also append the results to the page.
function kata21() {

}

//Write a function that finds and returns the index of the last word in 'bestThing'. Remember to also append the results to the page.
function kata22() {

}

//Write a function that finds and returns an array of all cities from 'gotCitiesCSV' that use double vowels ('aa', 'ee', etc.). Remember to also append the results to the page.
function kata23() {

}

//Write a function that finds and returns an array with all cities from 'lotrCitiesArray' that end with 'or'. Remember to also append the results to the page.
function kata24() {

}

//Write a function that finds and returns an array with all the words in 'bestThing' that start with a 'b'. Remember to also append the results to the page.
function kata25() {

}

//Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Mirkwood'. Remember to also append the results to the page.
function kata26() {

}

//Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Hollywood'. Remember to also append the results to the page.
function kata27() {

}

//Write a function that returns the index of 'Mirkwood' in 'lotrCitiesArray'. Remember to also append the results to the page.
function kata28() {

}

//Write a function that finds and returns the first city in 'lotrCitiesArray' that has more than one word. Remember to also append the results to the page.
function kata29() {

}

//Write a function that reverses the order of 'lotrCitiesArray' and returns the new array. Remember to also append the results to the page.
function kata30() {

}

//Write a function that sorts 'lotrCitiesArray' alphabetically and returns the new array. Remember to also append the results to the page.
function kata31() {

}

//Write a function that sorts 'lotrCitiesArray' by the number of characters in each city (i.e., shortest city names go first) and return the new array. Remember to also append the results to the page.
function kata32() {

}