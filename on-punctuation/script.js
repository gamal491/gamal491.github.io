console.log(
    "hello"
)
let clickedElement=document.getElementById(
    "click"
)
console.log(
    clickedElement
)
let showElement=document.getElementById(
   "text-reveal" 
)
console.log(
    showElement
)
clickedElement.onclick=function(){
    showElement.style.display="block"
}

// clickedElement.onclick=function(){
//     var element=document.getElementById("text-reveal");
//     element.classList.toggle("mystyle");
// }

let bringElement=document.getElementById(
    "begin"
)
console.log(
    bringElement
)
let punctuationElement=document.getElementById(
    "punctuation-show" 
)
bringElement.onclick=function(){
    punctuationElement.style.display="block"
}
