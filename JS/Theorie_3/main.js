var marque = "samsung";

switch (marque) {
  case "Apple":
    console.log("Smarthpone haut de gamme avec système IOS");
    break;
  case "Samsung", "samsung":
    console.log("Smarthpone haut de gamme avec système Android");
    break;
  case "Xiaomi":
    console.log("Smarthpone bon marché avec système Android");
    break;
  case "Huawei":
    console.log("Smarthpone bon marché avec système Android");
    break;
  default:
    console.log("Marque non référencée");
    break;
}

alert("Check console")