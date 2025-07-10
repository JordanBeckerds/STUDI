// Fonction pour calculer le périmètre d’un rectangle 

function perimetreR (a, b) {
    return 2 * a + 2 * b;
}

// Fonction pour calculer l’aire d’un rectangle 

function aireR (a, b) {
    return a * b
}

// Fonction pour comparer avec un if l’aire de 2 rectangles

function compareAire(rectangleOne, rectangleTwo) {
    if (aireR(rectangle1[0], rectangle1[1]) < aireR(rectangle2[0], rectangle2[1])) {
        alert("Le rectangle 1 est plus petit que le rectangle 2")
    }
    else if ((aireR(rectangle1[0], rectangle1[1]) > aireR(rectangle2[0], rectangle2[1]))) {
        alert("Le rectangle 1 est plus grand que le rectangle 2")
    }
    else {
        alert("Les rectangles ont la même aire")
    }
}

var rectangle1 = [8, 4]

var rectangle2 = [8, 5]

//Appel de la fonction compareAire en passant en paramètre les 2 tableaux contenant les valeurs des côtés des rectangles 

function Compare() {
    window.open("https://www.linkedin.com/in/xaviermarcbecker")

}

alert("Check console")