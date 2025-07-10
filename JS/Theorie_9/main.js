const button = document.getElementById("button");

button.addEventListener('click', () => {
  let mot = window.prompt("Quel mot afficher ?", "Saisir un mot");
  // create a new div element
  const newDiv = document.createElement("p");

  // and give it some content
  const newContent = document.createTextNode(mot);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  document.body.insertAdjacentElement("beforeend", newDiv);
});