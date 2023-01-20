

function Login(event) {
  // Evite d'avoir une actualisation de la page lors du click sur le button
  event.preventDefault();

  // On récupére les valeurs des inputs
  var nom = document.getElementById("nom").value;
  var mail = document.getElementById("mail").value;
  var password = document.getElementById("password").value;
 
  
  

  // On test si la récupération marche
  console.log(nom,mail,password);

  var contenuHTML =document.getElementById("prophil");
  
  // On change l'HTML intérieur de la section par la carte du produit
  contenuHTML.innerHTML += `
    <div class="carte">   

        <div class="loging">
          <h5>${nom}</h5>
          <h5>${mail} </h5>
        <div>

    </div>
  `;
    
}


var listProduits = [
    {
      titre: "Absolu-T1",
      auteur:"Auteur",
      publication:"12/1/2022",
      note:2,
      description:"Genres",
      prix:400,
      image: "images/Absolu-T1.jpg",
    },
    {
        titre: "Atlas-Pa-Salt",
        auteur:"Auteur",
        publication:"1/10/2021",
        note:1,
        description:"Genres",
        prix:200,
        image: "images/Atlas-L-histoire-de-Pa-Salt.jpg",
      },
      {
        titre: "A-tout-jamais",
        auteur:"Auteur",
        publication:"12/11/2017",
        note:1,
        description:"Genres",
        prix:300,
        image: "images/A-tout-jamais.jpg",
      },
      {
        titre: "Captive",
        auteur:"Auteur",
        publication:"1/10/2016",
        note:2,
        description:"Genres",
        prix:400,
        image: "images/Captive.jpg",
      },
      {
        titre: "Connaiance-illimitee",
        auteur:"Auteur",
        publication:"3/11/2022",
        note:2,
        description:"Genres",
        prix:500,
        image: "images/Connaiance-illimitee.jpg",
      },
      {
        titre: "humour",
        auteur:"Auteur",
        publication:"22/1/2019",
        note:3,
        description:"Genres",
        prix:600,
        image: "images/humour.jpeg",
      },
      {
        titre: "Inheritance-Games",
        auteur:"Auteur",
        publication:"5/1/2015",
        note:3,
        description:"Genres",
        prix:700,
        image: "images/Inheritance-Games.jpg",
      },
      {
        titre: "La-saga-d-auren",
        auteur:"Auteur",
        publication:"12/11/2022",
        note:3,
        description:"Genres",
        prix:720,
        image: "images/La-saga-d-auren.jpg",
      },
      {
        titre: "Le-Silence-et-la-Colere",
        auteur:"Auteur",
        publication:"10/1/2021",
        note:3,
        description:"Genres",
        prix:750,
        image: "images/Le-Silence-et-la-Colere.jpg",
      },
      {
        titre: "Le-temps-des-feminismes",
        auteur:"Auteur",
        publication:"12/7/2019",
        note:3,
        description:"Genres",
        prix:800,
        image: "images/Le-temps-des-feminismes.jpg",
      },
      {
        titre: "Mon-programme",
        auteur:"Auteur",
        publication:"9/7/2022",
        note:4,
        description:"Genres",
        prix:850,
        image: "images/Mon-programme.jpg",
      },

    {
      titre: "Petit-Pays",
      auteur:"Auteur",
      publication:"1/1/2021",
      note:7,
      description:"Genres",
      prix:900,
      image: "images/Petit-Pays.jpg",
    },
    {
        titre: "Reuite-Concours",
        auteur:"Auteur",
        publication:"22/5/2022",
        note:3,
        description:"Genres",
        prix:1000,
        image: "images/Reuite-Concours.jpg",
      },
      {
        titre: "humour",
        auteur:"Auteur",
        publication:"12/1/2022",
        note:7,
        description:"Genres",
        prix:2000,
        image: "images/humour.jpeg",
      },
      {
        titre: "paris",
        auteur:"Auteur",
        publication:"12/1/2016",
        note:9,
        description:"Genres",
        prix:3000,
        image: "images/paris.jpg",
      },
      {
        titre: "Absolu-T1",
        auteur:"Auteur",
        publication:"12/1/2022",
        note:2,
        description:"Genres",
        prix:4000,
        image: "images/Absolu-T1.jpg",
      },
      {
        titre: "La-saga-d-auren",
        auteur:"Auteur",
        publication:"12/1/2016",
        note:11,
        description:"Genres",
        prix:5000,
        image: "images/La-saga-d-auren.jpg",
      },
      {
        titre: "paris",
        auteur:"Auteur",
        publication:"12/1/2012",
        note:12,
        description:"Genres",
        prix:6000,
        image: "images/paris.jpg",
      },
      {
        titre: "Connaiance-illimitee",
        auteur:"Auteur",
        publication:"12/1/2014",
        note:13,
        description:"Genres",
        prix:7000,
        image: "images/Connaiance-illimitee.jpg",
      },
      {
        titre: "Le-temps-des-feminismes",
        auteur:"Auteur",
        publication:"12/1/2018",
        note:14,
        description:"Genres",
        prix:8000,
        image: "images/Le-temps-des-feminismes.jpg",
      },
      {
        titre: "Atlas-Pa-Salt",
        auteur:"Auteur",
        publication:"1/10/2021",
        note:1,
        description:"Genres",
        prix:200,
        image: "images/Atlas-L-histoire-de-Pa-Salt.jpg",
      },
      {
        titre: "A-tout-jamais",
        auteur:"Auteur",
        publication:"12/1/2019",
        note:16,
        description:"Genres",
        prix:10000,
        image: "images/A-tout-jamais.jpg",
      },
      {
        titre: "Reuite-Concours",
        auteur:"Auteur",
        publication:"22/5/2022",
        note:3,
        description:"Genres",
        prix:1000,
        image: "images/Reuite-Concours.jpg",
      },
      {
        titre: "A-tout-jamais",
        auteur:"Auteur",
        publication:"12/11/2017",
        note:1,
        description:"Genres",
        prix:300,
        image: "images/A-tout-jamais.jpg",
      },
      {
        titre: "Captive",
        auteur:"Auteur",
        publication:"1/10/2016",
        note:2,
        description:"Genres",
        prix:400,
        image: "images/Captive.jpg",
      },
      {
        titre: "Connaiance-illimitee",
        auteur:"Auteur",
        publication:"3/11/2022",
        note:2,
        description:"Genres",
        prix:500,
        image: "images/Connaiance-illimitee.jpg",
      },
      {
        titre: "humour",
        auteur:"Auteur",
        publication:"22/1/2019",
        note:3,
        description:"Genres",
        prix:600,
        image: "images/humour.jpeg",
      }
      
  
  ];


  
  for (let index = 0; index < listProduits.length; index++) {
    // La div où on veut afficher nos produits
    // var contenuHTML = document.getElementById("products-bn-container");
  
    // Le produit actuel
    var produit = listProduits[index];

        var contenuHTML =document.getElementById("products-container");
  
    // On change l'HTML intérieur de la section par la carte du produit
    contenuHTML.innerHTML += `
      <div class="tous" class="carte">
        
          <div >
          <img class="ima" src=${produit.image}
          </div>
          <p><span class="red">${produit.titre}</span></p>
          <p><span class="black">${produit.description}</span></p
          <p><span class="red">${produit.prix}$ </span> </p>
          <h6>${produit.auteur} </h6>
          <p><span class="black">${produit.publication} </span> </p>
          <p><span class="green">Note:</span> <span class="red">${produit.note} </span></p> 
      </div>
    `;
      }

function AjouterProduit(event) {
  // Evite d'avoir une actualisation de la page lors du click sur le button
  event.preventDefault();

  // On récupére les valeurs des inputs
  var titre = document.getElementById("titre").value;
  var auteur = document.getElementById("auteur").value;
  var date = document.getElementById("date").value;
  var note = document.getElementById("note").value;
  var description = document.getElementById("description").value;
  var prix = document.getElementById("prix").value;
  
  // var im = document.getElementById("avatar").value;

  // On test si la récupération marche
  console.log(titre,auteur,date,note,description,prix);
  var contenuHTML =document.getElementById("products-container");
  
  // On change l'HTML intérieur de la section par la carte du produit
  contenuHTML.innerHTML += `
    <div class="tous" class="carte">   

    <p><span class="red">${titre}</span></p>
    <p><span class="black">${description}</span></p>
    <p><span class="red">${prix} $</span></p>
    <h6>${auteur} </h6>
    <p><span class="black">${date} </span></p>
    <p><span class="green">Note:</span> <span class="red">${note} </span></p>

    </div>
  `;
    
  if (prix <=800 ) {
         // La div où on veut afficher nos produits
         var contenuHTML = document.getElementById("products-pp-container");

                // On change l'HTML intérieur de la section par la carte du produit
        contenuHTML.innerHTML += `
        <div class="tous" class="carte">
          
        <p><span class="red">${titre}</span></p>
        <p><span class="black">${description}</span></p>
        <p><span class="red">${prix} $</span></p>
        <h6>${auteur} </h6>
        <p><span class="black">${date} </span></p>
        <p><span class="green">Note:</span> <span class="red">${note} </span></p>
    
          
        </div>
      `;

      }

   if(note >= 4){
        // La div où on veut afficher nos produits
        var contenuHTML = document.getElementById("products-mn-container");

               // On change l'HTML intérieur de la section par la carte du produit
       contenuHTML.innerHTML += `
       <div class="tous" class="carte">
         
       <p><span class="red">${titre}</span></p>
       <p><span class="black">${description}</span></p>
       <p><span class="red">${prix} $</span></p>
       <h6>${auteur} </h6>
       <p><span class="black">${date} </span></p>
       <p><span class="green">Note:</span> <span class="red">${note} </span></p>
   
         
       
       </div>
     `;

     }
 

 
}

