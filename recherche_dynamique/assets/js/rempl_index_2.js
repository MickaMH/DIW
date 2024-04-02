// Promo Catégorie
$.getJSON("assets/js/the_district.json", function(data) {
      
    let categorie_1 = $("#promo_categorie");

    let indexCategorieChoisie = 7;

    let element = document.createElement("div");
    element.className = "mb-3 ";

    let carte_categorie = document.createElement("div");
    carte_categorie.className = "card w-100 border-4 bordures rounded-5 ";

    let image_categorie = document.createElement("img");
    image_categorie.src = data.categorie[indexCategorieChoisie].image;
    image_categorie.className = "card-img-top p-3 rounded-5";

    let libelle_categorie = document.createElement("a");
    libelle_categorie.textContent = data.categorie[indexCategorieChoisie].libelle;
    libelle_categorie.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none text-uppercase fond_logo lettres_blanches";
    libelle_categorie.href = "plats_par_categorie.html?id=" + data.categorie[indexCategorieChoisie].id_categorie;

    categorie_1.append(element);
    element.append(carte_categorie);
    carte_categorie.append(image_categorie, libelle_categorie);
});

// Promo Plat 1
function createDishCard(data1) {
    const card = document.createElement("div");
    card.className = "card w-100 border-4 bordures rounded-5";
  
    const image = document.createElement("img");
    image.src = data1.image;
    image.className = "card-img-top p-3 rounded-5";
  
    const title = document.createElement("h5");
    title.textContent = data1.libelle;
    title.className = "card-text fs-3 fw-medium ms-3";
  
    const description = document.createElement("p");
    description.textContent = data1.description;
    description.className = "card-text fst-italic fw-medium ms-3 me-3 mb-3";
  
    const orderButton = document.createElement("a");
    orderButton.textContent = "Commander";
    orderButton.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
    orderButton.href = `./commande.html?id=${data1.id_plat}`;
  
    const accordion = document.createElement("div");
    accordion.className = "accordion-item";
  
    const accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";
  
    const accordionButton = document.createElement("button");
    accordionButton.className = "accordion-button collapsed fw-medium ms-3 mb-2";
    accordionButton.textContent = "Lire la description du plat";
  
    const accordionCollapse = document.createElement("div");
    accordionCollapse.className = "accordion-collapse collapse";
  
    const accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";
  
    accordionBody.append(description);
  
    accordionCollapse.append(accordionBody);
  
    accordionButton.addEventListener("click", () => {
      accordionCollapse.classList.toggle("show");
    });
  
    accordionHeader.append(accordionButton);
  
    accordion.append(accordionHeader, accordionCollapse);
  
    card.append(image, title, accordion, orderButton);
  
    return card;
  }
  
  $.getJSON("assets/js/the_district.json", (data1) => {
    const plat_1 = $("#promo_plat_1");
  
    const dishData = data1.plat[0];
    const dishCard = createDishCard(dishData);
  
    plat_1.append(dishCard);
  });


//   Promo Plat 2
  function createDishCard(data2) {
    const card = document.createElement("div");
    card.className = "card w-100 border-4 bordures rounded-5";
  
    const image = document.createElement("img");
    image.src = data2.image;
    image.className = "card-img-top p-3 rounded-5";
  
    const title = document.createElement("h5");
    title.textContent = data2.libelle;
    title.className = "card-text fs-3 fw-medium ms-3";
  
    const description = document.createElement("p");
    description.textContent = data2.description;
    description.className = "card-text fst-italic fw-medium ms-3 me-3 mb-3";
  
    const orderButton = document.createElement("a");
    orderButton.textContent = "Commander";
    orderButton.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
    orderButton.href = `./commande.html?id=${data2.id_plat}`;
  
    const accordion = document.createElement("div");
    accordion.className = "accordion-item";
  
    const accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";
  
    const accordionButton = document.createElement("button");
    accordionButton.className = "accordion-button collapsed fw-medium ms-3 mb-2";
    accordionButton.textContent = "Lire la description du plat";
  
    const accordionCollapse = document.createElement("div");
    accordionCollapse.className = "accordion-collapse collapse";
  
    const accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";
  
    accordionBody.append(description);
  
    accordionCollapse.append(accordionBody);
  
    accordionButton.addEventListener("click", () => {
      accordionCollapse.classList.toggle("show");
    });
  
    accordionHeader.append(accordionButton);
  
    accordion.append(accordionHeader, accordionCollapse);
  
    card.append(image, title, accordion, orderButton);
  
    return card;
  }
  
  $.getJSON("assets/js/the_district.json", (data2) => {
    const plat_2 = $("#promo_plat_2");
  
    const dishData = data2.plat[4];
    const dishCard = createDishCard(dishData);
  
    plat_2.append(dishCard);
  });


//   Promo Catégorie Mobile
$.getJSON("assets/js/the_district.json", function(data) {
      
    let categorie_1 = $("#promo_categorie_mobile");

    let indexCategorieChoisie = 7;

    let element = document.createElement("div");
    element.className = "mb-3 ";

    let carte_categorie = document.createElement("div");
    carte_categorie.className = "card w-100 border-4 bordures rounded-5 ";

    let image_categorie = document.createElement("img");
    image_categorie.src = data.categorie[indexCategorieChoisie].image;
    image_categorie.className = "card-img-top p-3 rounded-5";

    let libelle_categorie = document.createElement("a");
    libelle_categorie.textContent = data.categorie[indexCategorieChoisie].libelle;
    libelle_categorie.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none text-uppercase fond_logo lettres_blanches";
    libelle_categorie.href = "plats_par_categorie.html?id=" + data.categorie[indexCategorieChoisie].id_categorie;

    categorie_1.append(element);
    element.append(carte_categorie);
    carte_categorie.append(image_categorie, libelle_categorie);
});

// Promo Plat 1 Mobile
function createDishCard(data1) {
    const card = document.createElement("div");
    card.className = "card w-100 border-4 bordures rounded-5";
  
    const image = document.createElement("img");
    image.src = data1.image;
    image.className = "card-img-top p-3 rounded-5";
  
    const title = document.createElement("h5");
    title.textContent = data1.libelle;
    title.className = "card-text fs-3 fw-medium ms-3";
  
    const description = document.createElement("p");
    description.textContent = data1.description;
    description.className = "card-text fst-italic fw-medium ms-3 me-3 mb-3";
  
    const orderButton = document.createElement("a");
    orderButton.textContent = "Commander";
    orderButton.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
    orderButton.href = `./commande.html?id=${data1.id_plat}`;
  
    const accordion = document.createElement("div");
    accordion.className = "accordion-item";
  
    const accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";
  
    const accordionButton = document.createElement("button");
    accordionButton.className = "accordion-button collapsed fw-medium ms-3 mb-2";
    accordionButton.textContent = "Lire la description du plat";
  
    const accordionCollapse = document.createElement("div");
    accordionCollapse.className = "accordion-collapse collapse";
  
    const accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";
  
    accordionBody.append(description);
  
    accordionCollapse.append(accordionBody);
  
    accordionButton.addEventListener("click", () => {
      accordionCollapse.classList.toggle("show");
    });
  
    accordionHeader.append(accordionButton);
  
    accordion.append(accordionHeader, accordionCollapse);
  
    card.append(image, title, accordion, orderButton);
  
    return card;
  }
  
  $.getJSON("assets/js/the_district.json", (data1) => {
    const plat_1 = $("#promo_plat_1_mobile");
  
    const dishData = data1.plat[0];
    const dishCard = createDishCard(dishData);
  
    plat_1.append(dishCard);
  });


//   Promo Plat 2 Mobile
  function createDishCard(data2) {
    const card = document.createElement("div");
    card.className = "card w-100 border-4 bordures rounded-5";
  
    const image = document.createElement("img");
    image.src = data2.image;
    image.className = "card-img-top p-3 rounded-5";
  
    const title = document.createElement("h5");
    title.textContent = data2.libelle;
    title.className = "card-text fs-3 fw-medium ms-3";
  
    const description = document.createElement("p");
    description.textContent = data2.description;
    description.className = "card-text fst-italic fw-medium ms-3 me-3 mb-3";
  
    const orderButton = document.createElement("a");
    orderButton.textContent = "Commander";
    orderButton.className = "card-text fs-5 fw-medium text-center shadow-lg p-2 m-3 mt-0 rounded-4 text-decoration-none fond_logo lettres_blanches";
    orderButton.href = `./commande.html?id=${data2.id_plat}`;
  
    const accordion = document.createElement("div");
    accordion.className = "accordion-item";
  
    const accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";
  
    const accordionButton = document.createElement("button");
    accordionButton.className = "accordion-button collapsed fw-medium ms-3 mb-2";
    accordionButton.textContent = "Lire la description du plat";
  
    const accordionCollapse = document.createElement("div");
    accordionCollapse.className = "accordion-collapse collapse";
  
    const accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";
  
    accordionBody.append(description);
  
    accordionCollapse.append(accordionBody);
  
    accordionButton.addEventListener("click", () => {
      accordionCollapse.classList.toggle("show");
    });
  
    accordionHeader.append(accordionButton);
  
    accordion.append(accordionHeader, accordionCollapse);
  
    card.append(image, title, accordion, orderButton);
  
    return card;
  }
  
  $.getJSON("assets/js/the_district.json", (data2) => {
    const plat_2 = $("#promo_plat_2_mobile");
  
    const dishData = data2.plat[4];
    const dishCard = createDishCard(dishData);
  
    plat_2.append(dishCard);
  });
