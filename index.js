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

/* 1 PRATYBOS */

// 1. isspausdinti visus masyvo elementus panaudojant for cikla ir array metoda

//  const arr = Array(5).fill().map(() => Math.floor(Math.random() * 5));
//  for(let i in arr){
//    console.log(arr[i]);
//  }

// 2. Susumuoti visus masyvo tkaicius timis budais: naudoti for cikla ir du skirtingus array metodus 

//  const arr = Array(5).fill().map(() => Math.floor(Math.random() * 5));
//  let sum = 0;
//  for(let i in arr){
//    sum += arr[i];
//  }
//  console.log("1 budas: " + sum);

//  arr.forEach((i) => sum += i);
//  console.log("2 budas: " + sum);

//  arr.every((i) => sum += i);
//  console.log("3 budas: " + sum);


/*  
  3. is sugalvoto 10 zodziu sakinio sukurti masyva. 
  Is to masyvo padaryti du masyvus: lyginiu indeksu zodzius iskelti i nauja masyva, 
  neliginiu indeksu zodzius - i kita masyva. 
  Is tu atskiru masyvu padaryti du atskirus sakinius.
*/
/*
const sentence = "Hello there Vsauce does Micheal go here the ! immediately.";
const sentenceArr = sentence.split(" ");
const evenArr = [];
const oddArr = [];
for(let i in sentenceArr){
  if(i % 2 == 0){
    evenArr.push(sentenceArr[i]);
  } else {
    oddArr.push(sentenceArr[i]);
  }
}
console.log(evenArr.join(" "));
console.log(oddArr.join(" "));
*/

// 4. Is skaiciu masyvo pasalinti tris elementus nuo to elemento, kurio reikme yra maziausia. 
/*
const arr = Array(10).fill().map(() => Math.floor(Math.random() * 10));
console.log(arr);
const min = Math.min(...arr);
const minIndex = arr.indexOf(min);
arr.splice(minIndex, 3);
console.log(arr);
*/


/* 2 PRATYBOS */

// 1. Rasti automobiliu markiu masyve "bentley" ir jei jo nera, ideti.
/*
const arr = ["bmw", "audi", "mercedes"];

if(!arr.includes("bentley")){
  arr.push("bentley");
}
console.log(arr);
*/

// 2. Sukurti prekiu masyva, kuriame butu pasaikartojanciu elementu. 
// Loopinti per masyva ir sukurti nauja unikaliu prekiu masyva (naudoti indexOf) 
// is pirmojo prekiu masyvo.

/*
const arr = ["banana", "apple juice", "olive oil", "sunflower seeds", "banana", "diapers", "banana", "newspaper"];
const newArr = [];
for(let i in arr){
  if(newArr.indexOf(arr[i]) == -1){
    newArr.push(arr[i]);
  }
}
console.log(newArr);
*/

// 3. Sukurti vaisiu masyva, kuriame butu pasikartojanciu elementu. Loopinti per masyva ir sukurti nauja unikaliu prekiu masyva (naudoti includes) is pirmojo vaisiu masyvo.
/*
const arr = ["banana", "apple", "pear", "banana", "peach", "pineapple", "banana", "pear", "lychee", "pomegranate", "pear"];
const newArr = [];
for(let i in arr){
  if(!newArr.includes(arr[i])){
    newArr.push(arr[i]);
  }
}
console.log(newArr);
*/

// 4. Sukurti skaiciu masyva
// a. prasukti cikla ir lyginius skaicius pakeisti vardais
// b. panaudojant string metoda pakeisti visas raides i didziasias.

/*
const arr = Array(10).fill().map(() => Math.floor(Math.random() * 10));
for(let i in arr){
  if(arr[i] % 2 == 0){
    arr[i] = "vardas".toUpperCase();
  }
}
console.log(arr);
*/


/* 4 PRATYBOS */

// Isspausdinti konsoleje objekto duomenis

/*
let duomenys = {
  id : "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  topping: [
    {
      id: "5001",
      type: "None"
    },
    {
      id: "5002",
      type: "Glazed"
    },
    {
      id: "5005",
      type: "Sugar"
    },
    {
      id: "5007",
      type: "Powdered Sugar"
    },
    {
      id: "5006",
      type: "Chocolate with Sprinkles"
    },
    {
      id: "5003",
      type: "Chocolate"
    },
    {
      id: "5004",
      type: "Maple"
    }
  ]
}

for(let i = 0; i < duomenys.topping.length; i++) {
  console.log("id: " + duomenys.topping[i].id);
  console.log("type: " + duomenys.topping[i].type);
}

*/


/* 5 PRATYBOS */

// Atspausdinti duomenis fmaily ir Knygos is nuorodos pagal pateikta pavyzdi:
// Sukurti masyva su knygu pavadinimais, kuriu isleidimo metai velesni nei 2015m.

/*
const arr = [
  {
    name: "Book 1",
    author: "Author 1",
    year: 2016,
    isbn: "978-0-123456-01-2",
    price: 19.99
  },
  {
    name: "Book 2",
    author: "Author 2",
    year: 2017,
    isbn: "978-0-123456-02-9",
    price: 24.99
  },
  {
    name: "Book 3",
    author: "Author 3",
    year: 2014,
    isbn: "978-0-123456-03-6",
    price: 29.99
  },
  {
    name: "Book 4",
    author: "Author 4",
    year: 2019,
    isbn: "978-0-123456-04-3",
    price: 22.99
  },
  {
    name: "Book 5",
    author: "Author 5",
    year: 2020,
    isbn: "978-0-123456-05-0",
    price: 27.99
  },
  {
    name: "Book 6",
    author: "Author 6",
    year: 2003,
    isbn: "978-0-123456-06-7",
    price: 21.99
  },
  {
    name: "Book 7",
    author: "Author 7",
    year: 2022,
    isbn: "978-0-123456-07-4",
    price: 25.99
  }
]
for(let i in arr){
  if(arr[i].year >= 2015){
    console.log("isbn --> " + arr[i].isbn);
    console.log("price --> " + arr[i].price);
    console.log("year --> " + arr[i].year);
    console.log("name --> " + arr[i].name);
    console.log("author --> " + arr[i].author);
    if(i < arr.length - 1){
      console.log("--------------------------------");
    };
  }
}
*/


/*
const family = {
  grandparents: {
    grandma: 'Marge',
    grandpa: 'Homer'
  },
  parents: {
    mom: 'Lisa',
    dad: 'Millhouse'
  },
  children: {
    daughter: 'Anne',
    son1: 'Peter',
    son2: 'Bob',
  }
};
for(let i in family){
  console.log([i] + ": " + [i] );
}
*/



/* 6 PRATYBOS */

/* Restorane pietavo trys seimos. Visi isleido skirtingas sumas pinigu. Apsakaiciuokite kiek arbatpinigiu tures palikti kiekviena seima ir kokia bus galutine sumokama pinigu suma, jei: 

1. saskaita maziau nei 50 eur, paliekama 20% nuo saskaitos suma,
2. saskaita didesne nei 50eur, bet maziau uz 200eur - 15%,
3. saskaita didesne ar lygi 200eur - 10%.

Atsakymus atspausdinti konsoleje masyvu pavidalu
*/

/*
const families = [
  {
    familyNr: 1,
    moneySpent: 35
  },
  {
    familyNr: 2,
    moneySpent: 125
  },
  {
    familyNr: 3,
    moneySpent: 225
  }
]

for(let i in families){
  const spent = families[i].moneySpent;
  let tip = 0;
  if(spent >= 200){
    tip = spent / 100 * 10; 
  } else if(spent > 50 && spent < 200){
    tip = spent / 100 * 15;
  } else if(spent <= 50){
    tip = spent / 100 * 20;
  }
  console.log(`Family number ${families[i].familyNr} has spent ${spent}$ and should leave a ${tip}$ tip.`);
}
*/



/* 7 PRATYBOS */



const questions1 = [
  {
    id: 1,
    question: "Kuri HTML versija yra naudojama šiuo metu?",
    answers: [
      { text: 2, isCorrect: false },
      { text: 5, isCorrect: true },
      { text: 7, isCorrect: false },
      { text: 3, isCorrect: false },
      { text: 8.3, isCorrect: false },
    ],
  },
  {
    id: 2,
    question:
      "Kokį HTML semantinį elementą parinktumėte tinklapio naujienai aprašyti?",
    answers: [
      { text: "<news>", isCorrect: false },
      { text: "<article>", isCorrect: true },
      { text: "<section>", isCorrect: false },
      { text: "<main>", isCorrect: false },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Kokią display reikšmę turi HTML a elementas pagal nutylėjimą?",
    answers: [
      { text: "inline", isCorrect: true },
      { text: "block", isCorrect: false },
      { text: "inline-block", isCorrect: false },
      { text: "table", isCorrect: false },
    ],
  },
  {
    id: 4,
    question:
      "Kuris selektorius yra teisingas norint stilių taikyti tik pdf failams?",
    answers: [
      { text: "a[href >='.pdf']", isCorrect: false },
      { text: "a[href $='.pdf']", isCorrect: false },
      { text: "a[href only ='.pdf']", isCorrect: false },
      { text: "a[href='.pdf']", isCorrect: true },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 5,
    question:
      "Kokią klasę reikia priskirti HTML blokui, kad jis Bootstrap grid'e užimtų 5 stulpelius praleidžiant vieną stulpelį?",
    answers: [
      { text: ".columns-5-offset-1", isCorrect: false },
      { text: ".col-sm5-1", isCorrect: false },
      { text: ".col-sm-5 .col-offset-1", isCorrect: false },
      { text: ".col-sm-5 .col-sm-offset-1", isCorrect: true }, // ar tikrai?
    ],
  },
  {
    id: 6,
    question:
      "Kaip kintamajam antraste, kuriam priskirtas HTML elementas header pakeisti fono spalvą naudojant JavaScript?",
    answers: [
      { text: "antraste.style.background-color = 'tomato';", isCorrect: false },
      { text: "antraste.style.backgroundColor = 'tomato';", isCorrect: true },
      { text: "antraste.css.background-color= 'tomato';", isCorrect: false },
      { text: "Teisingo atsakymo nėra", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "Kaip importuoti išorinį scss failą į pagrindinį scss failą?",
    answers: [
      { text: "@include isorinis_failas", isCorrect: false },
      { text: "@add isorinis_failas", isCorrect: false },
      { text: "@import isorinis_failas", isCorrect: true },
      { text: "Nėra teisingo varianto", isCorrect: false },
    ],
  },
  {
    id: 8,
    question:
      "Kaip padaryt nuorodą į tėvinį html elementą a su tikslu aprašyti pseudo klasės :hover formatavimą?",
    answers: [
      { text: "extend a:hover", isCorrect: false },
      { text: "into a:hover", isCorrect: false },
      { text: "&:hover", isCorrect: true },
      { text: "@:hover", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "Kuris iš sąrašo nėra preprocesorius?",
    answers: [
      { text: "Ruby", isCorrect: true },
      { text: "SASS", isCorrect: false },
      { text: "LESS", isCorrect: false },
      { text: "Stylus", isCorrect: false },
      { text: "Nėra teisingo varianto", isCorrect: false },
    ],
  },
  {
    id: 10,
    question:
      "Kaip pasirinkti header elementą ir jį paslėpti naudojant jQuery?",
    answers: [
      { text: "$('header').diplayNone();", isCorrect: false }, //nezinau
      { text: "$('header').hide();", isCorrect: true },
      { text: "$('header').hideIt();", isCorrect: false },
      { text: "Nėra teisingo atsakymo.", isCorrect: false },
    ],
  },
  {
    id: 11,
    question: "Kokią template sistemą naudoja Drupal 8?",
    answers: [
      { text: "HTML", isCorrect: false },
      { text: "Smarty", isCorrect: false },
      { text: "Twig", isCorrect: true },
      { text: "PHP", isCorrect: false },
      { text: "Nėra teisingo varianto", isCorrect: false },
    ],
  },
  {
    id: 12,
    question: "Kuo skiriasi kintamieji let nuo var ?",
    answers: [
      { text: "Nesiskiria", isCorrect: false },
      {
        text: "Var yra globalus kintamasis naudojamas visoje funkcijoje, o let yra vietinis kintamasis, naudojamas blokuose",
        isCorrect: true,
      },
      {
        text: "Var kintamasis yra skirtas tik tekstiniams kintamiesiams aprašyti, o let numerių kintamiesiems",
        isCorrect: false,
      },
      {
        text: "Var naudojamas tuomet kai kintamojo ilgis ne didesnis nei 5 simboliai, o let, kuomet daugiau nei 5",
        isCorrect: false,
      },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 13,
    question: "Kam naudojamas 'use strict'?",
    answers: [
      {
        text: "‘Use strict’ naudojimas apsaugo neleisdamas atlikti tam tikrų veiksmų ir suteikia daugiau išimčių",
        isCorrect: false,
      },
      {
        text: "Užkerta kelią klaidoms kai atliekami palyginti “nesaugūs” veiksami",
        isCorrect: false,
      },
      {
        text: "Išjungia painias ir blogai apgalvotas funkcijas",
        isCorrect: false,
      },
      { text: "Visi atsakymai tesisingi", isCorrect: true },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 14,
    question: "Kodėl CSS vadinami pakopiniais stiliais?",
    answers: [
      { text: "Kodas rašomas pakopomis", isCorrect: false },
      {
        text: "Pakopos nusako, kuri taisyklė yra svarbesnė ir bus taikoma elementui",
        isCorrect: true,
      },
      {
        text: "Įjungus CSS pakopas, galima naudoti !important",
        isCorrect: false,
      },
      { text: "Teisingo atsakymo nėra", isCorrect: false },
    ],
  },
  {
    id: 15,
    question: "Koks metodas naudojamas, norint sužinoti masyvo ilgį JS?",
    answers: [
      { text: "count", isCorrect: false },
      { text: "length", isCorrect: true },
      { text: "valueOf", isCorrect: false },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 16,
    question: "Kiek laiko duomenys saugomi local storage?",
    answers: [
      { text: "Iki perkraunant puslapį", isCorrect: false },
      { text: "Vieną parą", isCorrect: false },
      { text: "Vieną mėnesį", isCorrect: false },
      { text: "Metus laiko", isCorrect: false },
      { text: "Neturi galiojimo laiko", isCorrect: true },
    ],
  },
  {
    id: 17,
    question:
      "let kiekis = 12; \n" +
      "console.log(++kiekis); \n" +
      "Ką išves konsolėje?",
    answers: [
      { text: "undefined", isCorrect: false },
      { text: "12", isCorrect: false },
      { text: "13", isCorrect: true },
      { text: "Nieko", isCorrect: false },
    ],
  },
  {
    id: 18,
    question: "Koks metodas naudojamas eilutės duomenis konvertuoti į masyvą?",
    answers: [
      { text: "shift()", isCorrect: false },
      { text: "pop()", isCorrect: false },
      { text: "splice()", isCorrect: false },
      { text: "split()", isCorrect: true },
    ],
  },
  {
    id: 19,
    question:
      "function sveikas(){ \n" +
      ' let vardas="Jonas" \n' +
      "console.log(vardas)\n" +
      "} \n" +
      "sveikas();\n" +
      "Ką atspausdins konsolėje?",
    answers: [
      { text: "Jonas", isCorrect: true },
      { text: "vardas", isCorrect: false },
      { text: "sveikas", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "nieko", isCorrect: false },
    ],
  },
  {
    id: 20,
    question: "Kaip apibrėžiamas SASS kintamasis vardu spalva?",
    answers: [
      { text: "const sass spalva;", isCorrect: false },
      { text: "const spalva;", isCorrect: false },
      { text: "let spalva;", isCorrect: false },
      { text: "$spalva string", isCorrect: false },
      { text: "$spalva", isCorrect: true },
    ],
  },
];
// 1. Atspausdinti klausima ir teisinga atsakyma
/*
for(let i in questions1){
  const correctAnswer = questions1[i].answers.find(answer => answer.isCorrect);
  console.log(`${i} Klausimas: ${questions1[i].question}`);
  console.log(`atsakymas: ${correctAnswer.text}`);
  console.log('----------------------------------');
}
*/

/* 
  Sukurti interaktyvia viktorina, naudojant prompt ir alert.
  Uzduokite vartotojui klausimus ir pateikite galimus pasirinkimus.
  Jei vartotojas atsako teisingai, naudoti alert su zinute "teisingai".
  Jei atsakymas neteisingas - "Neteisingai".
  Baigus visus klausimus, rodyti tesingu atsakymu skaiciu ir pasveikinimo zinute,
  Jei vartotojas atsake daugiau nei 50% klausimu teisingai.
  Neleisti vartotojui pateikti tuscio atsakymo ar kitokios nei skaiciaus reiksmes.

  questions1[i].answers.find(answer => answer.isCorrect);


*/

