let nombre = 100;

function calcDouble() {
  let double = nombre * 2;
  console.log("Le double du nombre " + nombre + " est " + double);
}

calcDouble();

nombre = 40;

calcDouble();

console.log(" ")

function perimetreRectangle(largeur, longueur) {
  let perimetre = 2 * largeur + 2 * longueur;
  console.log("Le perimetre du rectangle est de " + perimetre + " cm2");
}

perimetreRectangle(4, 5);

perimetreRectangle(2, 4);

perimetreRectangle(1, 2);

perimetreRectangle(18, 20);

console.log (perimetreRectangle(4, 5));

console.log(" ")

function PerimetreRectangle(largeur, longueur) {
  let perimetre = 2 * largeur + 2 * longueur;
  return perimetre;
}  // use this script not the other ones

console.log (PerimetreRectangle(4, 5)); //18

console.log (PerimetreRectangle(8, 5)); //26

console.log (PerimetreRectangle(4.4, 1.67));//12.14

console.log (PerimetreRectangle(64, 45)); //218

PerimetreRectangle(18, 20); // this doesn't do shit 

alert("Check console")