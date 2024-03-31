$(document).ready(function() {
  
    $.getJSON("assets/js/the_district.json", function(data) {
      
        let categorie_1 = $("#promo_categorie");
    
        let indexCategorieChoisie = 7;
    
        let element = document.createElement("div");
        element.className = "mb-3 mt-3 mb-lg-5 mt-lg-5";
    
        let carte_categorie = document.createElement("div");
        carte_categorie.className = "card w-100 border-4 bordures rounded-5 ";
    
        let image_categorie = document.createElement("img");
        image_categorie.src = data.categorie[indexCategorieChoisie].image;
        image_categorie.className = "card-img-top p-3 rounded-5";
    
        let libelle_categorie = document.createElement("a");
        libelle_categorie.textContent = data.categorie[indexCategorieChoisie].libelle;
        libelle_categorie.className = "card-text fs-3 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none text-uppercase fond_logo lettres_blanches";
        libelle_categorie.href = "plats_par_categorie.html?id=" + data.categorie[indexCategorieChoisie].id_categorie;
    
        categorie_1.append(element);
        element.append(carte_categorie);
        carte_categorie.append(image_categorie, libelle_categorie);
    });


    $.getJSON("assets/js/the_district.json", function(data1) {

        let plat_1 = $("#promo_plat_1");
  
        let indexPlat1 = 0;

        let element_plats1 = document.createElement("div");
        element_plats1.className = "col-lg-4 p-lg-5 pb-lg-0 mb-3 mt-3";
    
        let carte_plat1 = document.createElement("div");
        carte_plat1.className = "card w-100 border-4 bordures rounded-5 ";
    
        let image_plat1 = document.createElement("img");
        image_plat1.src = data1.plat[indexPlat1].image;
        image_plat1.className = "card-img-top p-3 rounded-5";
    
        let libelle_plat1 = document.createElement("h5");
        libelle_plat1.textContent = data1.plat[indexPlat1].libelle;
        libelle_plat1.className = "card-text fs-3 fw-medium ms-3";

        let description_plat1 = document.createElement("p");
        description_plat1.textContent = data1.plat[indexPlat1].description;
        description_plat1.className = "card-text fst-italic fw-medium ms-3 me-3";
  
        let commander_plat1 = document.createElement("a");
        commander_plat1.textContent = "Commander";
        commander_plat1.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
        commander_plat1.href = "commande_json.html?id=" + data1.plat[indexPlat1].id_plat;
    
        plat_1.append(element_plats1);
        element_plats1.append(carte_plat1);
        carte_plat1.append(image_plat1, libelle_plat1, description_plat1, commander_plat1);

    });


        $.getJSON("assets/js/the_district.json", function(data2) {

        let plat_2 = $("#promo_plat_2");

        let indexPlat2 = 4;

        let element_plats2 = document.createElement("div");
        element_plats2.className = "col-lg-4 p-lg-5 pb-lg-0 mb-3 mt-3";
    
        let carte_plat2 = document.createElement("div");
        carte_plat2.className = "card w-100 border-4 bordures rounded-5 ";
    
        let image_plat2 = document.createElement("img");
        image_plat2.src = data2.plat[indexPlat2].image;
        image_plat2.className = "card-img-top p-3 rounded-5";
    
        let libelle_plat2 = document.createElement("h5");
        libelle_plat2.textContent = data2.plat[indexPlat2].libelle;
        libelle_plat2.className = "card-text fs-3 fw-medium ms-3";

        let description_plat2 = document.createElement("p");
        description_plat2.textContent = data2.plat[indexPlat2].description;
        description_plat2.className = "card-text fst-italic fw-medium ms-3 me-3";
  
        let commander_plat2 = document.createElement("a");
        commander_plat2.textContent = "Commander";
        commander_plat2.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
        commander_plat2.href = "commande_json.html?id=" + data2.plat[indexPlat2].id_plat;
    
        plat_2.append(element_plats2);
        element_plats2.append(carte_plat2);
        carte_plat2.append(image_plat2, libelle_plat2, description_plat2, commander_plat2);
    });

});
