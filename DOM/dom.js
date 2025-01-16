"use strict";


/*
const h1 = document.getElementsByTagName("h1");
console.log(h1);

const p1 = document.getElementsByClassName("p1");
console.log(p1);

const myDiv = document.getElementById("myDiv");
console.log(myDiv);

console.log("==========================================================");
const universalSingle = document.querySelector("h1");
const universalSingle1 = document.querySelector(".p1");
const universalSingle2 = document.querySelector("#myDiv");

console.log(universalSingle);
console.log(universalSingle1);
console.log(universalSingle2);

const universalAll = document.querySelectorAll("p");
console.log(universalAll);

console.log("===========================================================");

universalSingle.setAttribute("class", "h1");
universalSingle.id = "mainHeading";

universalAll.forEach((el) => console.log(el.getAttribute("class")));

console.log("===========================================================");

universalSingle2.classList.add("myDiv");
//  universalSingle2.classList.remove("myDiv");
universalSingle2.classList.replace("myDiv", "kitoksDiv");
const checkIsContaining = universalSingle2.classList.contains("kitoksDiv");
console.log(checkIsContaining);

function changeColor() {
  if (window.innerWidth < 400) {
    //  universalSingle2.classList.toggle("klase1", true);
    //  universalSingle2.classList.toggle("klase2", false);
    universalSingle2.classList.remove("klase1", false);
    universalSingle2.classList.add("klase2", true);
  } else {
    //  universalSingle2.classList.toggle("klase1", false);
    //  universalSingle2.classList.toggle("klase2", true);
    universalSingle2.classList.add("klase1", false);
    universalSingle2.classList.remove("klase2", true);
  }
}

//  window.addEventListener("resize", changeColor);
console.log("=======================================================");

const changeP2Color = document.querySelector(".p2");
changeP2Color.style.color = "#f6ff00";
changeP2Color.style.backgroundColor = "black";
changeP2Color.style.padding = "20px";

console.log("===========================================================");

const containerDiv = document.getElementById("containerDiv")

const myImage = document.createElement("img");
myImage.setAttribute("src", "https://picsum.photos/200/300");
myImage.alt = "lorem lorem";
myImage.style.width = "100px";

const textNode = document.createElement("p");
textNode.textContent = "lorem ipsum";
textNode.innerText = "lorem ipsum lorem ipsum";

containerDiv.append(myImage, textNode)//pridedam kelis elementus appendChild tik 1

console.log("===========================================================");

textNode.addEventListener("click", () => {
  textNode.style.fontSize = "48px";
  textNode.style.color = "red";
})

*/

//  UZDUOTYS
// 1. sukurti elementa ir i ji "ideti" savo sugalvota teksta

const textNode = document.createElement("h1");
textNode.innerText = "Hello World! My name is Loremas Ipsumas";
document.body.appendChild(textNode);

// 2. Sukurti elementa ir i ji patalpinti kita elementa su tekstu

const div = document.createElement("div");
document.body.append("div");

const img = document.createElement('img');
img.src = "https://picsum.photos/200/300";
img.alt = "Loremo Ipsumo Album";
img.style.width = "500px";
div.append(img);

// 3. pasizymeti elementa ir prideti jam atributa su reiksme: 
// a. klase "myClass"
textNode.className = "myClass";
// b. id "myId"
textNode.id = "myId";
// c. <a> ir <img> tagu atributus su reiksmemis
const link = document.createElement("a");
link.href = "https://www.google.com";
link.innerText = "HelloWorld";
div.append(link);

const myDiv = document.createElement("div");
myDiv.className = "myClass";
myDiv.id = "myId";
myDiv.style.width = "500px";


