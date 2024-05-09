let myHeart= document.getElementById("heart");

bodyElem.onmousemove= function(e){
    myHeart.style.top= e.clientY + "px";
    myHeart.style.left= e.clientX + "px";
}