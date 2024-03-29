// Target each by its ID and store each one in a variable.
console.log("hello world!");
document.getElementById("letter1");
let a=document.getElementById("letter1");
console.log(a);

document.getElementById("letter2");
let b=document.getElementById("letter2");

document.getElementById("letter3");
let c=document.getElementById("letter3");
console.log(c);

document.getElementById("letter4");
let d=document.getElementById("letter4");

document.getElementById("letter5");
let e=document.getElementById("letter5");

document.getElementById("letter6");
let f=document.getElementById("letter6");
console.log(a);

document.getElementById("letter7");
let g=document.getElementById("letter7");

document.getElementById("letter8");
let h=document.getElementById("letter8");
console.log(h);

document.getElementById("letter9");
let i=document.getElementById("letter9");

document.getElementById("letter10");
let j=document.getElementById("letter10");

let k=document.getElementById("letter11");
console.log(k);

document.getElementById("letter12");
let l=document.getElementById("letter12");

document.getElementById("letter13");
let m=document.getElementById("letter13");
console.log(c);

document.getElementById("letter14");
let n=document.getElementById("letter14");

document.getElementById("letter15");
let o=document.getElementById("letter15");

document.getElementById("letter16");
let p=document.getElementById("letter16");
console.log(p);

document.getElementById("letter17");
let q=document.getElementById("letter17");

document.getElementById("letter18");
let r=document.getElementById("letter18");
console.log(h);

document.getElementById("letter19");
let s=document.getElementById("letter19");

document.getElementById("letter20");
let t=document.getElementById("letter20");

document.getElementById("letter21");
let u=document.getElementById("letter21");

document.getElementById("letter22");
let v=document.getElementById("letter22");

document.getElementById("letter23");
let w=document.getElementById("letter23");

document.getElementById("letter24");
let x=document.getElementById("letter24");

document.getElementById("letter25");
let y=document.getElementById("letter25");

// ARRAY OF COLORS
let colors= ["blue","green","#92664A","red","orange","yellow"];
console.log(colors.length);
console.log(colors[4]);
console.log(colors[0]);
a.style.backgroundColor= "blue";
b.style.backgroundColor= "orange";
c.style.backgroundColor=(colors[0]);


let randomColor=Math.floor(Math.random() * colors.length);
a.style.backgroundColor= colors[randomColor];
b.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
c.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
d.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
e.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
f.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
g.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
h.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
i.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
j.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
k.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
l.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
m.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
n.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
o.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
p.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
q.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
r.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
s.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
t.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
u.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
v.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
w.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
x.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
y.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];

// RANDOM LETTER COLOR

let lettercolor= ["white","black"];
console.log(lettercolor[1]);
let randomLetterColor= Math.floor(Math.random() * lettercolor.length);
console.log(randomLetterColor);

a.style.color=lettercolor[randomLetterColor]; 
b.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
c.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
d.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
e.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
f.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
g.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
h.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
i.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
j.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 

k.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
l.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
m.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
n.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
o.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
p.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
q.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
r.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
s.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
t.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
u.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
v.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
w.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
x.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 
y.style.color=lettercolor[Math.floor(Math.random() * lettercolor.length)]; ; 

// // firstSquare.style.width="50px";
// firstSquare.style.height= [Math.floor(Math.random() * 160)] + "px";
// firstSquare.style.width=[randomSize] + "px";
// secondSquare.style.width=[Math.floor(Math.random() * 160)] + "px";
// thirdSquare.style.height=[Math.floor(Math.random() * 160)] + "px";
// fourthSquare.style.height=[Math.floor(Math.random() * 160)] + "px";
// fifthSquare.style.height=[Math.floor(Math.random() * 160)] + "px";
// //trying out template literals
// fifthSquare.style.width= `${randomSize}px`;
