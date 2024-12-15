"use strict";
/*
let skaicius = 3;
console.log(typeof skaicius);

skaicius = "Jonas";
console.log(typeof skaicius);

skaicius = true;
console.log(typeof skaicius);

let kazkas;
console.log(typeof kazkas);

kazkas = null;
console.log(typeof kazkas);

const name = "Jonas";
let age = 25;

console.log(`I am ${name} and I am ${age} years old.`);
console.log("I am " + name + " and I am " + age + " years old.");

age = 26;
console.log(`I am ${name} and I am ${age} years old.`);
age = 27;
console.log(`I am ${name} and I am ${age} years old.`);

// "" ir '' neturi jokiu skirtumu uztat `` backticks (template literals) turi sugebejima ivesti

const vardas = "Petras";
console.log(vardas.charAt(0));
console.log(vardas.charAt(vardas.length - 1));
console.log(vardas.charAt(5));
console.log(vardas.charAt(2));

console.log(vardas.concat(1));
// brings the written value to the back of the string

console.log(vardas.endsWith("s"));
// checks if written value is the same as the last value of a string

console.log(vardas.indexOf("a"));

console.log(vardas.lastIndexOf("s"));

console.log(vardas.length);

let vardasExp = "Petraset";

console.log(vardasExp.match(/et/g));
// suranda kiek kartu kartojasi nurodyta reiksme kintamajam

console.log(vardas.repeat(5));
// kartoja tiek kartu kiek nurodyta argumente : 5

console.log(vardasExp.replace("et", "|"));
//nurodyta reiksme pakeicia i pateikta

console.log(vardas.search("et"));
// iesko nurodytos reiksmes ir atiduoda kiek rado

console.log(vardas.slice(2, 4));
// nukerpa nurodytu skaiciu indexus

console.log(vardas.split("t"));

console.log(vardas.startsWith("P"));
// patikrina ar reiksme prasideda su nurodytu parametru

console.log(vardas.substring(1, 4));
// grazina sub-string tarp nurodytos indekso pradzios ir pabaigos

console.log(vardas.toLowerCase());
// All lower case no matter if the variable is already all lower case

console.log(age.toString());
// From foreign variable to string

console.log(vardas.toUpperCase());
// all upper case

console.log(vardas.trim());
// trims the empty space in the front and end of the string variable

console.log(vardas.substring(1, 4));
// grazina sub-string tarp nurodytos indekso pradzios ir pabaigos

let skaiciu = 5;
console.log(skaiciu);
skaiciu++;
// ++skaiciu
console.log(skaiciu);
skaiciu--;
// --skaiciu
console.log(skaiciu);

let name1 = "Jonas";
let name2 = "Antanas";

console.log(name1 && name2 == name2);

let num1 = "10";
console.log(+num1 + 10);
// console.log(-num1 + 10)

console.log(typeof +num1);

let kint = "hello";
kint = "labas";
console.log(kint);

// uzd 1
let uzd1 = 10;
console.log(uzd1++);
console.log(uzd1++);
console.log(uzd1++);
//uzd 1

//uzd2
let uzd2 = 10;
uzd2--;
uzd2--;
uzd2--;
console.log(uzd2--);
//uzd2

//uzd3
let uzd3 = "10";
console.log(typeof +uzd3);
console.log(typeof -uzd3);
console.log(typeof Number(uzd3));
//uzd3

//uzd4
let uzd4 = 10;
let uzd42 = 12 + uzd4;
console.log(uzd42);
//uzd4

//kmi uzd
const human1 = {
  name: "Tom",
  heightMeters: 1.96,
  weightKilos: 92,
};
const human2 = {
  name: "Peter",
  heightMeters: 1.85,
  weightKilos: 85,
};

function bmiCalc(x) {
  let bmi = x.weightKilos / x.heightMeters ** 2;
  return Math.round(bmi);
}

if (bmiCalc(human1) > bmiCalc(human2)) {
  console.log(
    `${human1.name}s BMI is ${bmiCalc(human1)}. ${
      human2.name
    }s BMI is ${bmiCalc(human2)}. ${human1.name}s BMI is bigger than ${
      human2.name
    }s BMI.`
  );
} else if (bmiCalc(human1) < bmiCalc(human2)) {
  console.log(
    `${human1.name}s BMI is ${bmiCalc(human1)}. ${
      human2.name
    }s BMI is ${bmiCalc(human2)}. ${human1.name}s BMI is smaller than ${
      human2.name
    }s BMI.`
  );
} else if (bmiCalc(human1) === bmiCalc(human2)) {
  console.log(
    `${human1.name}s BMI is ${bmiCalc(human1)}. ${
      human2.name
    }s BMI is ${bmiCalc(human2)}. ${human1.name}s BMI and ${
      human2.name
    }s BMI are the same.`
  );
}
// kmi uzd

//pitagoro teorema
let a;
let b;
let c;
function pitagoro(a, b) {
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  console.log(Math.round(c));
}
pitagoro(12, 6);
// pitagoro teorema

// celsijus i farenhaitus
function convertCtoF(x) {
  console.log(`${x * 1.8 + 32}° degrees Fahrenheit`);
}

convertCtoF(30);

//prezidento amzius

let amzius = 25;
if (amzius < 40) {
  console.log("Jus per jauni :( ");
} else {
  console.log("Jus galite stoti i rinkimus!");
}

// prezidento amzius

// lyginis ar ne

let int = 2;
if (int % 2 == 0) {
  console.log("jusu skaicius yra lyginis");
} else {
  console.log("jusu skaicius yra nelyginis");
}

//lyginis ar ne

// saskaita ir mokesciai

let fondai = 1208.34;
if (fondai > 500) {
  console.log("jus galite pilnai susimoketi savo mokescius");
} else
  console.log(
    "deja jus neturite pakankamai lesu kad susimoketumete savo mokesciu;"
  );

//saskaita ir mokesciai

//vidurkis ir lankomumas

let lank = true;
let average = 9;

if (average >= 8 && lank) {
  console.log(`Jusu vidurkis ${average} ir lankomumas yra geras!`);
} else {
  console.log(`deja, stipendija nepriklauso`);
}
// vidurkis ir lankomumas

// tris skaiciai

let x = 12;
let y = 16;
let z = 20;

if (x > y && x > z) {
  console.log(`${x} skaicius yra didesnis uz ${y} ir ${z}`);
} else if (y > x && y > z) {
  console.log(`${y} skaicius yra didesnis uz ${x} ir ${z}`);
} else {
  console.log(`${z} skaicius yra didesnis uz ${x} ir ${y}`);
}

//tris skaiciai

//paskola

let atlyg = 1000;
let vedes = true;

if (atlyg >= 1500 && vedes) {
  console.log("Paskola bus suteikta");
} else if (atlyg >= 950 && vedes) {
  console.log("Sveikiname, jus gavote paskola!");
} else {
  console.log("Kai uzdirbsi daugiau, ateik, pakalbesim.");
}

//paskola
*/

/* PROTOYPES 

const array = [
  "Vakaris",
  "Martynas",
  "Ignas",
  "Nojus",
  "Naglis",
  "Julius",
  "Ernestas",
  "Gytis",
]
console.log(array[1])

console.log(array);

const array1 = [];
array[0] = "Vakaris";
array[1] = "Martynas";
array[2] = "Ignas";
array[3] = "Nojus";
array[4] = "Naglis";
array[5] = "Julius";
array[6] = "Ernestas";
array[7] = "Gytis";

console.log(array1);

const array2 = new Array(
  "obuolys", 
  "kriause", 
  "bananas", 
  "vynuoge", 
  "melionas"
)

console.log(array2);

const array3 = Array.of(
  "obuolys", 
  "kriause", 
  "bananas", 
  "vynuoge", 
  "melionas"
)

console.log(array3);


const newArray = new Array(5).fill(0).map((e, index) => (e += index + 1))
console.log(newArray);
*/


/* OBJECTS
const person = {
  name: "Jonas",
  age: 19,
  hobbies: ["reading", "watching movies", "video games"],
  grade: [{
    subject: "JavaScript",
    average: 8.2,
  },
  {
    subject: "Python",
    average: 9.1,
  }],
  likes:{
    "music band": "Korn",
    movie: "Titanic",
    ice_cream: "vanilla"
  },
  printInfo: function(){
    console.log(
      `Hello, I am ${this.name}, I am ${this.age} and I like ${this.movie}. I aint no pussy nigga.`
    );
  },
}

console.log(person.age);
console.log(person.hobbies);
console.log(person.grade[1].subject);
console.log(person.likes["music band"]);

person.printInfo();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const zmogus = {};

const asmuo = Object.create(zmogus);
asmuo.vardas = "Petras";
asmuo.pavarde = "Petraitis";
asmuo.amzius = 30;

console.log(asmuo);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Zmogus(vardas, pavarde, amzius) {
  this.name = vardas;
  this.lastName = pavarde;
  this.age = amzius;
}

const persona = new Zmogus("Tomas", "Tomaitis", 19);
console.log(persona);


let keys = Object.keys(persona);
console.log(keys);

let values = Object.values(persona);
console.log(values);

let entries = Object.entries(persona);
console.log(entries)


/* 

delete object method

console.log(persona.name);

delete persona.name;

console.log(persona.name);

*/
/*
const {name, lastName} = persona;
// const persona.name = 
// const persona.lastName = 
console.log(persona.name);
console.log(persona.lastName);
*/




/* 1.1. Sugeneruokite masyva is 30 elementu (indeksai nuo 0 iki 29), kuriu reiksmes yra atsitiktiniai skaiciai nuo 5 iki 25

const masyvas = Array(30).fill().map(() => Math.floor(Math.random() * 21) + 5);
console.log(masyvas)


// a. Suskaiciuokite kiek masyve yra reiksmiu didesniu nei 10

console.log("a.", masyvas.filter((index) => index > 10).length);



// b. Suraskite didziausia masyvo reiksme ir jos indeksa ar indeksus jeigu yra keli

let max = Math.max(...masyvas);
let maxIndex = masyvas.indexOf(max);
console.log("b.", maxIndex);


// c. suskaiciuokite visu poriniu (lyginiu) indeksu reiksmiu suma
let suma = 0;
for (let i = 0; i < masyvas.length; i++){
  if(i % 2 == 0){
    suma += masyvas[i];
  }
}
console.log("c.", suma);

// d. sukurkite nauja masyva, kurio reiksmes yra 1 uzdavinio masyvo reikmes minus tos reikmes indeksas
const naujasMasyvas = masyvas.map((value, index) => value - index);
console.log(naujasMasyvas);

// e. Papildykite masyva papildomais 10 elementu su reiksmemis nuo 5 iki 25, kad bendras masyvas padidetu iki indekso 39
masyvas.push(...Array(10).fill().map(() => Math.floor(Math.random() *21) + 5));
console.log(masyvas);

// f. is masyvo elemento sukurkite 2 naujus masyvus. Vienas turi buti sudarytas is neporiniu indekso reiksmiu, o kitas is poriniu
const neporiniai = masyvas.filter((index) => index % 2 != 0 );
const poriniai = masyvas.filter((index) => index % 2 == 0);
console.log(neporiniai, poriniai);

// g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni uz 15
for (let i = 0; i < masyvas.length; i++){
  if(i % 2 == 0 && masyvas[i] >= 15){
    masyvas[i] = 0;
  }
}
console.log(masyvas);

// h. Suraskite pirma (maziausia) indeksa, kurio elementp reiksme didesne uz 10
let minIndex = masyvas.findIndex((value) => value > 10);
console.log(minIndex);

*/

/* 1.2 pratybos */

/* 1.2.1 Sugeneruokite masyva, kurio reiksmes atsitiktines raides A, B, C, D, o ilgis 200. */

//    const masyvas = Array(200).fill().map(() => ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]);
//    console.log(masyvas);

/* 1.2.2  Isrusiuokite 1 uzdavinio masyva pagal abecele */

//    console.log(masyvas.sort());


/* 1.2.3 Sugeneruokite du masyvus, kurie reiksmes yra atsitiktinai skaiciai nuo 100 iki 999. Masyvu ilgiai 100. Masyvu reikmes turi buti unikalios savo masyve (t.y. neturi kartotis). */

//    const masyvas1 = Array(100).fill().map(() => Math.floor(Math.random() * 900) + 100);
//    const masyvas2 = Array(100).fill().map(() => Math.floor(Math.random() * 900) + 100);
//    console.log(masyvas1, masyvas2);

/* 1.2.4 Sugeneruokite masyva, kuris butu sudarytas is reiksmiu, kurios yra pirmame 3 uzdavinio masyve, bet nera antrame 3 uzdavinio masyve. */

//    const masyvas11 = masyvas1.filter((x) => x !== masyvas2);
//    console.log(Math.floor(masyvas11);

/* 1.2.5 Sugeneruokite masyva is elementu, kurie kartojasi abiejuose 3 uzdavinio masyvuose. */

//    let masyvas12 = masyvas1.filter((x) => masyvas2.includes(x));
//    console.log(masyvas12);

/* 1.2.6 Sugeneruokite 10 skaiciu masyva pagal taisykle. Du pirmi skaiciai - atsitiktinai nuo 5 iki 25. Trecias, pirmo ir antro suma. Ketvirtas - antro ir trecip suma. Penktas trecio ir ketvirto suma ir t.t. */

//  const arr = Array(10).fill(0);
//  arr.map(() => {
//    arr[0] = Math.floor(Math.random() * 21) + 5;
//    arr[1] = Math.floor(Math.random() * 21) + 5;
//    for(let i = 2; i < arr.length; i++){
//      arr[i] = arr[i - 1] + arr[i - 2];
//    };
//  });
//  console.log(arr);

/* 1.3 PRATYBOS */

/* 1.3.1 Sukurkite objekta su keliomis savybemis, o tada pridekite nauja savybe. */

// const obj = {
// name: "Tomas",
//  lastName: "Tomaitis"
// };
//  obj.age = 18;
//  console.log(obj);

/* 1.3.2 Istrinkita savybe is objekto ir parodykite likusias savybes */

//  delete obj.age;
//  console.log(obj);

/* 1.3.3 Patikrinkite ar tam tikra saybe egzistuoja objekte */

//  console.log(obj.hasOwnProperty("age"));

/* 1.3.4 Sukurti objekta, kuris turetu skaitnes reiksmes. Apsaiciuoti visu savybiu reiksmiu suma. */

//  const obj = {
//    a: 1,
//    b: 2,
//    c: 3,
//    d: 4,
//    e: 5,
//    f: 6,
//    g: 7,
//    h: 8,
//    i: 9,
//    j: 10
//  };
//  let suma = 0;
//  for(let key in obj){
//    suma += obj[key];
//  }
//  console.log(suma);


/* 1.3.5 Sukurkite funkcija, kuri priima objekta ir grazina nauja objekta, kuriame yra tik tos savybes, kuriu reiksmes yra didesnes uz tam tikra skaiciu*/

//  function filter(obj, x){
//    let newObj = {};
//    for(let key in obj){
//      if(obj[key] > x){
//          newObj[key] = obj[key];
//        }
//      }
//      return newObj;
//    }
//    console.log(filter(obj, 5));

/* 1.3.6 Sukurkite funkcija, kuri priima objekta ir grazina tekstini aprasyma su visomis savybemis */

// function objToString(obj){
//    let str = "";
//    for(let key in obj){
//    str += key + "\n";
//    }
//    return str;
// };
// console.log(objToString(obj));


/* 1.3.7 Sukurkite funkcija, kuri grazina objekto savybiu sskaiciu. */

// function numOfKeys(obj){
//    let count = 0;
//    for(let key in obj){
//    count++;
//    }
//    return count;
// };;
// console.log(numOfKeys(obj));




/* LOOPS PRATYBOS */

/* 1. Parasykite programa kuri atspausdintu visus vienazenklius skaicius */

//  for(let i = 0; i < 10; i++){
//    console.log(i)
//  }
//  



/* 2. parasykite programa kuri parasytu visus vienazenklius skaicius pakeltus kvadratu */

//  for(let i = 0; i < 10; i++){
//    console.log(Math.pow(i, 2));
//  }


/* 3. Parasykite programa kuri atspausdintu visus dvizenklius lyginius skaicius */

//  for(let i = 10; i < 100; i++){
//    if(i % 2 == 0){
//      console.log(i);
//    }
//  }


/* 4. Parasykite programa, kuri atspausdintu tik tiek skaiciu, pradedant nuo 1, iki to kuri ivede vartotojas */

//  let input = Number(prompt("Iveskite skaiciu iki kurio noretumete, kad programa suskaiciuotu."));
//  for(let i = 0; i <= input; i++){
//    console.log(i);
//  }


/* 5. Parasykite programa, kuri atspausdintu skaicius is jusu nurodyto intervalo [a,b]. */

//  let intervalStart = Number(prompt("Iveskite skaiciu nuo kurio noretumete, kad programa pradetu suskaiciuotu."));
//  let intervalEnd = Number(prompt("Iveskite skaiciu iki kurio noretumete, kad programa suskaiciuotu."));
//  
//  for(let i = intervalStart; i <= intervalEnd; i++){
//    console.log(i);
//  }


/* 6. Parasykite programa, kuri atspausdintu jusu varda n kartu */

//  let inputName = prompt("Iveskite savo varda");
//  let inputX = Number(prompt("iveskite kiek kartu noretumete kad programa atspausdintu jusu varda."));
//  
//  let i = 0;
//  while(i <= inputX) {
//    console.log(`${i + 1}. ${inputName}`);
//    i++;
//  };


/* 7. Parasykite programa kur atspausdintu ivesto skaiciaus daugybos lentele nuo 1 iki 10 */

//  let input = Number(prompt("Iveskite skaiciu kurio daugybos lentele norite pamatyti"));
//  
//  for(let i = 0; i <= 10; i++){
//    console.log(`${input} * ${i} = ${input * i}`);
//  }


/* 8. Parasykite programa, skaiciuojancia funkcijos y = 7 * 2 + 5x - 3 reikmes, kai x kinta [-10; 10] */

//  let count = 1;
//  for(let i = -10; i <= 10; i++){
//    console.log(`${count}. Kai y = ${i}: 7 * 2 + 5 * ${i} - 3 = ${7 * 2 + 5 * i - 3}`);
//    count++;
//  }


/* 9. Pries Kaledas misko uredijos prekiauja ivairaus auksio eglutemis. 
      I prekybos vieta atvezta n kiekis egluciu. 
      Ju auksciai yra h1, h2, ..., hn. 
      Parasykite programa, skaiciuojancia vidutini eglutes auksti.
      NENAUDOTI masyvo, egluciu kieki ir aukscius ivesti prompt pagalba, 
      rezultata grazinti alert zinute. 


      const average = count > 0 ? sum / count : 0;
      
      
*/

//  const treeN = Number(prompt("Iveskite kiek egluciu isviso yra:"));
//  let treeSum = 0;
//  
//  for(let i = 1; i <= treeN; i++){
//    let treeHinput = prompt(`iveskite ${i} eglutes auksti metrais.`);
//    let treeH = Number(treeHinput);
//    treeSum += treeH;
//    console.log(treeSum)
//    if(i == treeN){
//      const treeAvg = treeN > 0 ? treeSum / treeN : 0;
//      window.alert(`visu egluciu auksciu vidurkis: ${treeAvg}`)
//    }
//  }
