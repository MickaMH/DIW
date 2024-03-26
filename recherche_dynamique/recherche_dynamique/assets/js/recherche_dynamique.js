        // Récupérez le champ de texte et la liste de suggestions
        let searchInput = document.querySelector('#recherche_dynamique');
        let suggestionsList = document.querySelector('#suggestions');

        // Liste de mots clés (vous pouvez la remplacer par vos propres données)
        let keywords = 'assets\js\the_district.json';

        // Écoutez l'événement de saisie dans le champ de texte
        searchInput.addEventListener('input', displaySuggestions);

        function displaySuggestions() {
            let inputValue = searchInput.value.toLowerCase();
            let filteredKeywords = keywords.filter(plat => plat.libelle.toLowerCase().startsWith(inputValue));

            // Affichez les suggestions correspondantes
            suggestionsList.innerHTML = '';
            filteredKeywords.forEach(plat => {
                let li = document.createElement('li');
                li.textContent = plat.libelle;
                suggestionsList.appendChild(li);
            });

            // Affichez la liste de suggestions
            suggestionsList.style.display = 'block';
        }

