// 1. Dessinez le modèle par arborescence du DOM (Document Object Model) de index.html


// Éxecuter le Javascript après la création du DOM
window.onload = () => {
  // 2. Remplacez le texte du titre par "DOMaine des Arbres"
  function ChangezTitre(titreModifier) {
    var titre = document.getElementById("titre");
    titre.innerText = titreModifier;
  }
  ChangezTitre("DOMaine des Arbres");
  
  // 3. Changez l'ordre de présentation des images avec flex
document.getElementsByClassName("container")[0].style["flex-direction"] = "column-reverse";
//setAttribute("style", "flex-direction: column-reverse;");



  // 4. Ajoutez le point "Terre" à la liste d'éléments
function AjouterUnElementListe(valeurDeElement)
{
  var baliseVise = document.getElementsByTagName("ul");
  var nouveauElement = document.createElement('li');
  nouveauElement.textContent = valeurDeElement;
  baliseVise[0].prepend(nouveauElement);
}
AjouterUnElementListe("Terre");
  

  // 5. Ajoutez l'attribut href manquant à la balise lien de l'image d'arbre.
  // avec la valeur  href="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
  // Avec le sélecteur suivant, utilisez un "accès par relation" pour faire votre modification.
  const imageSansLien = document.querySelectorAll(
    'img[src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"]'
  )[0];
  // code ici


  // 6. Modifiez la police du texte pour toutes les éléments de la liste
  function ModifierPoliceListePourArial()
  {
    var elementListe = document.querySelectorAll("li");
    foreach (elementEach in elementListe)
    {
      elementEach.style["font-family"] = "Arial, Helvetica, sans-serif"; //fontctionne pas
      
    }
  }

  ModifierPoliceListePourArial();


};
