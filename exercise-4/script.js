//Testing out
console.log("Hello world");
console.log(100/2);

//Defining an array
let nouns=["Roses","Violets","Puppies","Onions","Empanadas","Radishes","Sunsets","Bicycles","Umbrellas","Mountains","Guitars","Books"];
console.log(nouns.length); //12!!
console.log(nouns[4]); //Empanadas! :)
console.log(nouns.length-1); //11, how do i make it say the actual noun again and not the number?
console.log(nouns[nouns.length-1]); //Yay! That's how!

//Defining adjective array
let adjectives1=["red","sweet","furry","stinky","yummy","hairy","loud","squishy","bizarre","vibrant","yellow","motherly"];
console.log(adjectives1.length);//12
console.log(adjectives1[adjectives1.length-1]);
let adjectives2=["blue","true","new", "few", "overdue", "reviewed"];
console.log(adjectives2[4]);
console.log(adjectives2.length);//6
let nouns2=["you","cocoons","shoes", "tunes", "zoos", "tattoos"];
console.log(nouns2.length);//6

let nouns3=["Mom","Parsons","New York","Coding","Sugar"];

console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*nouns.length));
//Nouns
let randomNoun=Math.floor(Math.random()*nouns.length);
console.log(nouns[randomNoun]);

let randomNoun3=Math.floor(Math.random()*nouns3.length);
console.log(nouns3[randomNoun3]);

//Last noun in poem, rhymes with you
console.log(Math.floor(Math.random()*nouns2.length));
let randomNoun2=Math.floor(Math.random()*nouns2.length);
console.log(nouns2[randomNoun2]);

//Adjectives
console.log(Math.floor(Math.random()*adjectives1.length));
let randomAdjective=Math.floor(Math.random()*adjectives1.length);
console.log(adjectives1[randomAdjective]);

//Adjectives that rhyme with blue
console.log(Math.floor(Math.random()*adjectives2.length));
let randomAdjective2=Math.floor(Math.random()*adjectives2.length);
console.log(adjectives2[randomAdjective2]);

//Changing the HTML
// document.getElementById("myDiv").innerHTML="Replaced Text!";
console.log(document.getElementById("noun1"));
let roses=document.getElementById("noun1"); //why doesn't getElementByClassName work?
console.log(roses);
let red=document.getElementById("adj1");
let violets=document.getElementById("noun2");
let blue=document.getElementById("adj2");
let sugar=document.getElementById("noun3");
let sweet=document.getElementById("adj3");
let you=document.getElementById("noun4");

roses.innerHTML=nouns[randomNoun];
red.innerHTML=adjectives1[randomAdjective];
violets.innerHTML=nouns[Math.floor(Math.random()*nouns.length)];
blue.innerHTML=adjectives2[randomAdjective2];
sugar.innerHTML=nouns3[randomNoun3];
sweet.innerHTML=adjectives1[Math.floor(Math.random()*adjectives1.length)];
you.innerHTML=nouns2[randomNoun2];





