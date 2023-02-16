const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Déclarer une liste avec les chemins des images*/
const listeImage = ["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];
/* Déclarer le texte alternative pour chaque image*/
const texteAltImages = ["oeil", "laveFroide", "petunia", "hieroglyphs", "papillon"];
/* traverser les images */


var nombreImages = listeImage.length;

function changeImage()
{
    displayedImage.src = this.src;
}

for(var i = 0; i < nombreImages; i++)
{
    let imageCourante = document.createElement('img');
    imageCourante.src = listeImage[i];
    imageCourante.alt = texteAltImages[i];
    imageCourante.onclick = changeImage;
    thumbBar.appendChild(imageCourante);
}



/* sombre/clair bouton */

var DARK = false;

function ToggleDark()
{
    if(DARK)
    {
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
        DARK = false;
    } else {
        overlay.style.backgroundColor = "rgba(0,0,0,0)"
        DARK = true;
    }
    
}

btn.onclick = ToggleDark;