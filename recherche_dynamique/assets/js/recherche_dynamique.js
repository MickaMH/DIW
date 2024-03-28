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

--------------------------------------------------------------------------

$(document).ready(function() {
    let full_url = document.URL;
    let url_array = full_url.split('=');
    let categorie_id = url_array[url_array.length - 1];
    console.log(categorie_id);

    $.getJSON("assets/js/the_district.json", function(data4) {

        

        // Filtrer les plats ayant le même id_categorie que categorie_id
        let filtre_plats = data4.plat.filter(function(plat) {
            return categorie_id === plat.id_categorie;
        });

        

        filtre_plats.forEach(plat => {

            let plats_par_categorie = $("#plats_par_categorie");

        let element_plats = document.createElement("div");
        element_plats.className="col-lg-4 p-lg-5 pb-lg-0 mb-3 mt-3";
  
        let carte_plat = document.createElement("div");
        carte_plat.className = "card w-100 border-4 bordures rounded-5 ";
  
        let image_plat = document.createElement("img");
        image_plat.src = plat.image;
        image_plat.className = "card-img-top p-3 rounded-5";
  
        let libelle_plat = document.createElement("h5");
        libelle_plat.textContent = plat.libelle;
        libelle_plat.className = "card-text fs-3 fw-medium ms-3";
        console.log(plat.libelle);

        let description_plat = document.createElement("p");
        description_plat.textContent = plat.description;
        description_plat.className = "card-text fst-italic fw-medium ms-3 me-3";
  
        let commander_plat = document.createElement("a");
        commander_plat.textContent = "Commander";
        commander_plat.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
        commander_plat.href = "commande_json.html?id=" + data4.plat.id_plat;
  
    plats_par_categorie.append(element_plats);
  
    element_plats.append(carte_plat);
  
    carte_plat.append(image_plat, libelle_plat, description_plat, commander_plat);}
       

    
    )})})

