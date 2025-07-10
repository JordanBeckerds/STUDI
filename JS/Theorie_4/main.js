let tableau = ["Apple", "HP", "Acer"];

for (let i in tableau) {
  console.log(i);
}

let Tableau = ["Apple", "HP", "Acer"];

let marques = "";

for (let i of Tableau) {
  marques += i + ", " ;
}

console.log (marques);

console.log(" ")

let a = 110;

while (a >= 100 && a <= 150) {
  
  console.log(a);
  a += 10;

  if (a == 130) {
    continue;
  }
  else if (a == 140) {
    break;
  }

  console.log("nv");
}

console.log("fini");

alert("Check console")