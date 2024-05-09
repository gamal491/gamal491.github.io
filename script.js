let myHeart= document.getElementById("heart");
console.log(myHeart);
let bodyElem= document.body;

bodyElem.onmousemove= function(e){
    myHeart.style.top= e.clientY + "px";
    myHeart.style.left= e.clientX + "px";
}

bodyElem.onkeydown= function(e){
    if (e.key== " "){
        bodyElem.style.backgroundColor="orange";
    }
  }
  bodyElem.onkeyup= function(e){
    bodyElem.style.backgroundColor="#78866b";
} 