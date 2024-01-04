const searchInput = document.querySelector('.search');
const listItems = document.querySelectorAll('.list li');
const resultImagesContainer = document.getElementById('resultImagesContainer');

// Correspondance entre les éléments de la liste, les chemins des images et les légendes
const imagePaths = {
  'Thrustmaster T248': {
    paths: ['images/T248_profiler.jpg', 'images/T248_AMS2.jpg', 'images/T248_RF2.jpg', 'images/T248_ACC.jpg'], //chemin des images dans ce tableau
    legends: ['Volant', 'Automobilista 2', 'rFactor 2', 'Assetto Corsa Competizione'] // Légende de chaque image dans ce tableau
  },
  'Simagic Alpha Ultimate': {
    paths: ['images/Simagic_alpha_ultimate.jpg', 'images/Simagic_alpha_ultimate.jpg'],
    legends: ['Légende 3', 'Légende 4']
  },
  'Fanatec CSL DD': {
    paths: ['chemin/vers/images/image3_1.jpg', 'chemin/vers/images/image3_2.jpg'],
    legends: ['Légende 5', 'Légende 6']
  },
  'Logitech G29 / G920': {
    paths: ['chemin/vers/images/image3_1.jpg', 'chemin/vers/images/image3_2.jpg'],
    legends: ['Légende 7', 'Légende 8']
  },
  // Ajoutez d'autres éléments au besoin
};

// Gestionnaire d'événements pour la recherche
searchInput.addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();
  
  listItems.forEach(item => {
    const itemText = item.textContent.toLowerCase();
    const isMatch = itemText.includes(searchValue);

    // Utilisation d'une classe pour gérer la visibilité des éléments
    if (isMatch) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
});

// Gestionnaire d'événements pour la sélection d'un élément de la liste
listItems.forEach(item => {
  item.addEventListener('click', function () {
    // Récupérez le chemin de l'image et la légende à partir de la correspondance
    const imageData = imagePaths[this.textContent];

    // Effacez le contenu précédent du conteneur d'images
    resultImagesContainer.innerHTML = '';

    // Affichez chaque image dans le conteneur avec sa légende
    imageData.paths.forEach((path, index) => {
      const figureElement = document.createElement('figure');
      const figcaptionElement = document.createElement('figcaption');
      const imageElement = document.createElement('img');

      // Ajoutez une classe pour permettre le placement côte à côte
      figureElement.classList.add('image-container');

      imageElement.src = path;
      figcaptionElement.textContent = imageData.legends[index] || '';

      figureElement.appendChild(figcaptionElement);
      figureElement.appendChild(imageElement);

      resultImagesContainer.appendChild(figureElement);
    });

    // Retirez la classe 'hidden' pour afficher le conteneur d'images
    resultImagesContainer.classList.remove('hidden');

    // Réinitialisez la barre de recherche lors du clic sur un volant
    // searchInput.value = '';

    // Affichez tous les éléments de la liste en retirant la classe 'hidden' (affiche tous les volants quand je clique sur un)
    // listItems.forEach(item => item.classList.remove('hidden'));
  });
});
