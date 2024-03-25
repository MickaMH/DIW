// Chargement du fichier JSON (assurez-vous que le chemin est correct)
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const searchInput = document.getElementById('searchInput');
    const resultsList = document.getElementById('results');

    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredFruits = data.fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(searchTerm)
      );

      // Efface les résultats précédents
      resultsList.innerHTML = '';

      // Affiche les résultats filtrés
      filteredFruits.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = `${fruit.name} (${fruit.color})`;
        resultsList.appendChild(li);
      });
    });
  })
  .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));


//   {
//     "fruits": [
//       { "name": "Banane", "color": "Jaune" },
//       { "name": "Pomme", "color": "Rouge" },
//       { "name": "Orange", "color": "Orange" }
//     ]
//   }
  
