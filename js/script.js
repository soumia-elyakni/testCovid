let facteursGravitéMineurs = 0;
let facteursGravitéMajeurs = 0;
let facteurPronostique = 0;
let fievre = false;
let toux = false;
let courbatures = false;
let malGorge = false;
let diarrhee = false;
let fatigue = false;
let difficulteAvalaison = false;
let manqueSouffle = false;
let sensation = '';
//FACTEURS PRONOSTIQUES
let age;
let hypertension = false;
let diabete = false;
let cancer = false;
let maladieRespiratoire = false;
let dialyse = false;
let foie = false;
let enceiente = false;
let diminutionImmunitaire = false;
let traitementImmunosuppresseur = false;



//qst1 : FIEVRE
if (reponse == 'oui') {
    fievre == true;
}

//qst2 : TEMPERATURE
if (temperature >= 39) {
    facteursGravitéMineurs++;
}
if (temperature <= 35.4) {
    facteursGravitéMajeurs++;
}

//qst3 : TOUX
if (reponse == 'oui') {
    toux = true;
}

//qst4 : COURBATURES 
if (reponse == 'oui') {
    courbatures = true;
}

//qst5 : MAL DE GORGE
if (reponse == 'oui') {
    malGorge = true;
}

//qst6 : DIARREE
if (reponse == 'oui') {
    diarrhee = true
}

//qst7 :  FATIGUE
if (reponse == 'oui') {
    fatigue = true;
    facteursGravitéMineurs++;
}

//qst8 : DIFFICULTES D'AVALAISON
if (reponse == 'oui') {
    difficulteAvalaison = true;
    facteursGravitéMajeurs++;
}

//qst9 : MANQUE DE SOUFFLE
if (reponse == 'oui') {
    manqueSouffle = true;
    facteursGravitéMajeurs++;
}

//qst10 : SENSATION
if (sensation == 'fatigué' || sensation == 'très fatigué') {
    facteursGravitéMineurs++;
}

//qst11 : AGE (facteur de risque spécifique)
//qst12 : POIDS
//qst13 : TAILLE

//qst14 : l’hypertension, maladie cardiaque ou vasculaire
if (reponse == 'oui') {
    hypertension = true;
}

//qst15 : DIABETE
if (reponse == 'oui') {
    diabete = true;
}

//qst16 : CANCER
if (reponse == 'oui') {
    cancer = true
}

//qst17 : Maladie respiratoire
if (reponse == 'oui') {
    maladieRespiratoire = true;
}

//qst18 : Insuffisance rénale chronique dialysée
if (reponse == 'oui') {
    dialyse = true;
}

//qst19 : MALADIE DU FOIE
if (reponse == 'oui') {
    foie = true
}

//qst20 : ENCEINTE
if (reponse == 'oui') {
    enceiente = true;
}

//qst21 : une maladie connue pour diminuer vos défenses immunitaires
if (reponse == 'oui') {
    diminutionImmunitaire = true;
}

//qst22 : traitement immunosuppresseur
if (reponse == 'oui') {
    traitementImmunosuppresseur = true;
}

//RESULTS

//Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
if ((fievre == true || toux == true) && (malGorge == true || toux == true) && (courbatures == true || fievre == true) && (diarrhee == true)) {
    if (facteurPronostique == 0) {
        if (facteursGravitéMajeurs == 0 && facteursGravitéMineurs == 0 && age < 50) {
            console.log(' nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’ apparition de nouveaux symptômes.Vous pourrez aussi utiliser à nouveau l’ application pour réévaluer vos symptômes.')
        }
        if ((facteursGravitéMajeurs == 0 && facteursGravitéMineurs == 0 && age > 50 && age < 69) || facteursGravitéMineurs >= 1) {
            console.log('téléconsultation ou médecin généraliste ou visite à domicile')
        }
    } else if (facteurPronostique >= 1) {
        if (facteursGravitéMajeurs == 0 && facteursGravitéMineurs == 0) {
            console.log(': téléconsultation ou médecin généraliste ou visite à domicile')
        } else if () {

        }
    }
    if (facteursGravitéMajeurs >= 1) {
        console.log('Appel 141')
    }

} else if (fievre == true && toux == true) {

} else if (fievre == true || toux == true || malGorge == true || courbatures == true) {

} else {

}
//Tout patient avec fièvre et toux :
//Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures :
//Tout patient avec aucun symptôme :

//Pour tous :
const quiz = [
  {
    question: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs)?",
    choix: ["Oui","Non"],
    type: "radio",
    reponse: null
  },

  {
    question: "Quelle est votre température corporelle ?",
    choix: ["25","45"],
    type: "number",
    reponse: null
  },
  
  {
    question: "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
    choix: ["oui","non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
    choix: ["oui","non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Ces derniers jours, avez-vous un mal de gorge ?",
    choix: ["oui","non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
    choix: ["oui","non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
    choix: ["oui","non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
    choix: ["oui","non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
    choix: ["oui","non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Actuellement, comment vous vous sentez ?",
    choix: ["Bien", "Assez Bien", "Fatigué(e)", "Trés fatigué(e)"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique",
    choix: ["15","115"],
    type: "number",
    reponse: null
  },
  
  {
    question: "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
    choix: ["20","250"],
    type: "number",
    reponse: null
  },
  
  {
    question: "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
    choix: ["80","250"],
    type: "number",
    reponse: null
  },
  
  {
    question: "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
    choix: ["Oui","Non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Êtes-vous diabétique ?",
    choix: ["Oui","Non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Avez-vous ou avez-vous eu un cancer ?",
    choix: ["Oui","Non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
    choix: ["Oui","Non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Avez-vous une insuffisance rénale chronique dialysée ?",
    choix: ["Oui","Non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Avez-vous une maladie chronique du foie ?",
    choix: ["Oui","Non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Êtes-vous enceinte ?",
    choix: ["Oui","Non","Homme"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
    choix: ["Oui","Non"],
    type: "radio",
    reponse: null
  },
  
  {
    question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
    choix: ["Oui","Non"],
    type: "radio",
    reponse: null
  },

]

const ques = document.getElementById("ques");
const contentCh = document.getElementById("contentCh");

// for (let i = 0; i < quiz.length; i++){
//    document.body.innerHTML += `${quiz[i].question} <br>`;
// }

var cont = 0 ;
ques.innerHTML = `${quiz[cont].question} `;
contentCh.innerHTML += choix();




function next(){
  cont++;
  ques.innerHTML = `${quiz[cont].question} `;
  contentCh.innerHTML = choix();
  
}
function precedent(){
  cont--;
  ques.innerHTML = `${quiz[cont].question} `;
  contentCh.innerHTML = choix();

}


function choix(){
  var content = "";

  if(quiz[cont].type == "radio" ){
    for(let i = 0 ; i <= quiz[cont].choix.length-1; i++){
      content +=  '<input type="'+ quiz[cont].type +'" value="'+quiz[cont].choix[i]+'" name="'+quiz[cont].choix[i]+'"> <label for="'+quiz[cont].choix[i]+'">'+quiz[cont].choix[i]+'</label>'  ;
    } 
  }

  if(quiz[cont].type == "number" ){
    content += '<input type="number"  max="'+quiz[cont].choix[1]+'" min="'+quiz[cont].choix[0]+'" placeholder="'+quiz[cont].choix[1]+'-'+quiz[cont].choix[0]+'">'
  }

  return content ;
  
}
