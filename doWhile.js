'use strict';

// DO ... WHILE

/*
    1. Parasykite programa, kuri leidzia vartotojui ivesti skaicius iki tol, 
    kol vartotojas ives neigiama skaiciu. Programa turi susumuoti visus ivestus skaicius ir, 
    baigus ivedima, atspausdinti gautos sumos vidurki.
*/


//  let sum = 0;
//  let count = 0;
//  
//  do {
//      let input = prompt("Iveskite skaiciu. Jei skaicius neigiamas programa nustos veikima.");
//      let number = Number(input);
//      
//      if (number < 0 || input === null) {
//          const average = count > 0 ? sum / count : 0;
//          window.alert(`Average: ${average.toFixed(2)}\nSum: ${sum}`);
//          break;
//      }
//      
//      sum += number;
//      count++;
//      window.alert(`Current sum: ${sum}`);
//  } while (true);


/* 
    2. Parasykite programa, kuri generuotu atsitiktinius skaicius nuo 1 iki 10 ir leistu vartotojui speti juos. 
    Vartotojas turi testi spejimus tol, kol spes teisnga skaiciu.
    Po kiekvieno spejimo programa turi informuoti vartotoja, ar spetas skaicius per didelis, per mazas arba teisingas.
    Programa baigesi, kai vartotojas atspeja teisinga skaiciu. 
*/


//  const randomNumber = Math.floor((Math.random() * 10) + 1);
//  let guess;
//  let count = 0;
//  
//  do{
//      guess = Number(prompt("Iveskite skaiciu nuo 1 iki 10"));
//      if(guess === randomNumber){
//          window.alert(`Sveikinimai!!! Atspejote is ${count} karto!`)
//      } else if(guess > randomNumber){
//          window.alert(`Apgailestauju, bet spejote per ausktai... Meginkite is naujo.`);
//      } else if(guess < randomNumber){
//          window.alert(`Apgailestauju, bet spejote per zemai... Meginkite is naujo`);
//      }
//      count++;
//  }while(guess !== randomNumber);
