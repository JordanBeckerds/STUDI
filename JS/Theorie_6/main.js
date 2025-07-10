class Ordinateur {

  //définition de propriétés statiques
    
    static OBJETS_PRIS_EN_CHARGE = "ordinateurs";
  
    //définition de propriétés de classe
  
    type = "laptop";
    clavier = "azerty";
  
    //définition du constructeur
  
    constructor(marque, ram, stockage) {
      this.marque = marque;
      this.ram = ram;
      this.stockage = stockage;
    }
  
    //définition de méthodes statiques
  
    static definition() {
      console.log("Les ordinateurs sont des machines automatisées permettant le traitement d'informations.");
    }
  
    //définition de méthodes d'instance
  
    ficheProduit() {
      console.log("Marque : " + this.marque + "\n" + "Mémoire vive : " + this.ram + "\n" + "Stockage : " + this.stockage);
    }
  
    calcPrice() {
      return this.ram * 100 + this.stockage * 2;
    }
  }
  
  let monOrdi = new Ordinateur("Apple", 8, 512);
  let monOrdi2 = new Ordinateur("HP", 16, 256);
  
  Ordinateur.definition();
  
  console.log(monOrdi.calcPrice());
  
  console.log(monOrdi2.calcPrice());

  console.log(Ordinateur)

alert("Check console")