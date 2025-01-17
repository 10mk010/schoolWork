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











/////////////////////////////////////////////////////////////////////////////////////
/*  UZDUOTYS
// 1. sukurti elementa ir i ji "ideti" savo sugalvota teksta

const textNode = document.createElement("h1");
textNode.innerText = "Hello World! My name is Loremas Ipsumas";
textNode.style.textAlign = "center";
document.body.appendChild(textNode);

// 2. Sukurti elementa ir i ji patalpinti kita elementa su tekstu

const div2 = document.createElement("div");
document.body.append(div2);

const text2 = document.createElement("p");
text2.innerText = "Sveiki atvyke i lorem ipsum pasauli!"
text2.style.textAlign = "center";
div2.append(text2);

// 3. pasizymeti elementa ir prideti jam atributa su reiksme: 
// a. klase "myClass"
textNode.className = "myClass";
// b. id "myId"
textNode.id = "myId";
// c. <a> ir <img> tagu atributus su reiksmemis

const link = document.createElement("a");
link.setAttribute("href", "https://www.google.com");
link.innerText = "google.com";

const img = document.createElement("img");
img.setAttribute("src", "https://picsum.photos/200/300");
img.style.width = "150px";

div2.append(link, img);

// 4. Sukurti keleta p tagu div viduje, pasizymeti elementu masyva ir 
// prideti jiemas stiliu - kas antro elemento 
// raudonas tekstas ir juodas background, 
// likusiu tekstas baltas, background zalias

const div4 = document.createElement("div");
document.body.append(div4);

for(let i = 0; i < 5; i++) {
  const p = document.createElement("p");
  p.classList.add("p4")
  p.innerText = `Eilute: ${i + 1}`;
  div4.append(p);
}

const pArr = document.getElementsByClassName("p4")

Array.from(pArr).forEach((el, i) => {
  if((i + 1) % 2 != 0){
    el.style.backgroundColor = "black";
    el.style.color = "red";
  } else { 
    el.style.backgroundColor = "green";
    el.style.color = "white";
  }
});

// 5. Paimti reiksme is input ir ja atspausdinti konsoleje bei atvaizduoti puslapyje

const input = document.createElement("input")
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Iveskite teksta")
document.body.appendChild(input);

const inputBtn = document.createElement("input");
inputBtn.setAttribute("type", "button");
inputBtn.value = "Submit";
document.body.appendChild(inputBtn);

const output = document.createElement("p");
output.innerText = "output: ";
document.body.appendChild(output);

inputBtn.addEventListener("click", () => {
  output.innerText = "output: "
  console.log(input.value);
  output.innerText += input.value;
})

// 6. Sukurti du mygtukus: paspaudus pirmaji, 
// sukuriamas naujas elementas, paspaudus antraji - elementas pasalinamas,
// mygtukus stilizuoti su JS.

const addBtn = document.createElement("input");
addBtn.setAttribute("type", "button")
addBtn.value = "Add";
const deleteBtn = document.createElement("input");
deleteBtn.setAttribute("type", 'button');
deleteBtn.value = "Delete";
const div6 = document.createElement("div");
document.body.append(addBtn, deleteBtn, div6);

addBtn.addEventListener("click", () => {
  const newEl = document.createElement("p");
  newEl.innerText = `Elementas: ${div6.children.length + 1}`;
  newEl.style.color = "white";
  newEl.style.border = "2px";
  newEl.style.backgroundColor = "black";
  div6.append(newEl);
})

deleteBtn.addEventListener("click",() => {
  if(div6.children.length > 0){
    let lastEl = div6.children[div6.children.length - 1];
    lastEl.remove();
  } else {
    window.alert("There are no elements in the list!")
  }
})

// 7. sukurti click counter - kad kiekvienas mygtuko paspaudimas butu registruojamas
// Skaicius turi matytis salia mygtuko

const counterBtn = document.createElement("input");
counterBtn.setAttribute("type", "button");
counterBtn.value = "Click me";
const counterP = document.createElement("p");

let count = 0;
counterP.innerText = `Click count: ${count}`;
counterBtn.addEventListener("click", () => {
  count++;
  counterP.innerText = `Click count: ${count}`;
}) 

document.body.append(counterBtn, counterP);

*/
///////////////////////////////////////////////////////////////////////////////////////

/*  5.2 uzduotis */
/*
    1. Turi buti galimybe koreguoti iraso duomenis, paselectinus irasa pagal jo id.
    2. galima surasti konkrecia preke pagal jos id (atskiras input). Ir surasta preke
    atvaizduoti atskiroje lenteleje (kaip pirkiniu krepseli).
    3. galima istrinti konkrecia preke pagal jos id. Istrinta preke turi pradingtri
    is localStorage ir abieju lenteliu (jei atvaizduoajama abiejose). jei tokio input
    nerada - rodyti informacini pranesima.
*/
