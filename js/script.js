// Progress Bar 
const progress = document.querySelector('.progress-done');
let pre = document.querySelector('#pre');
let sui = document.querySelector('#sui');
let prog = parseFloat(progress.getAttribute('data-done'));

progress.style.width = prog + '%';
progress.style.opacity = 1;
progress.textContent = prog / 4.5 + ' / ' + '22';
sui.addEventListener('click' , function(){
    if(prog <= 99){

    prog += 100/22;
    progress.style.width = prog + '%';
    progress.textContent = parseInt(prog/4.5) + ' / ' + '22';
    console.log(prog)
}

})
pre.addEventListener('click' , function(){
    if(prog > 4.5){
    prog -= 4.5;
    progress.style.width = prog + '%';
    progress.textContent = prog/4.5 + ' / ' + '22';
    console.log(prog)
}
})

// Quiz de Question
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

var cont = 0 ;
ques.innerHTML = `${quiz[cont].question}`;
contentCh.innerHTML += choix();

function next() {
    cont++;
    ques.innerHTML = `${quiz[cont].question} `;
    contentCh.innerHTML = choix();

}

function precedent() {
    cont--;
    ques.innerHTML = `${quiz[cont].question} `;
    contentCh.innerHTML = choix();
}


function choix() {
    var content = "";

  if(quiz[cont].type == "radio"){
    for(let i = 0 ; i <= quiz[cont].choix.length-1; i++){
      content +=  '<input type="'+ quiz[cont].type +'" value="'+quiz[cont].choix[i]+'" onclick="check('+ i +')" name="ouiAndNon"> <label for="'+quiz[cont].choix[i]+'">'+quiz[cont].choix[i]+'</label>';
    }
    
  }
    if (quiz[cont].type == "number") {
        content += '<input type="number"  max="' + quiz[cont].choix[1] + '" min="' + quiz[cont].choix[0] + '" placeholder="' + quiz[cont].choix[1] + '-' + quiz[cont].choix[0] + '">'
    }
    return content;

}

function check(i){
  quiz[cont].reponse =  quiz[cont].choix[i]
}

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
if (quiz[cont].reponse == 'oui') {
  fievre == true;
}

//qst3 : TOUX
if (quiz[cont].reponse == 'oui') {
  toux = true;
}

//qst4 : COURBATURES 
if (quiz[cont].reponse == 'oui') {
  courbatures = true;
}

//qst5 : MAL DE GORGE
if (quiz[cont].reponse == 'oui') {
  malGorge = true;
}

//qst6 : DIARREE
if (quiz[cont].reponse == 'oui') {
  diarrhee = true
}

//qst7 :  FATIGUE
if (quiz[cont].reponse == 'oui') {
  fatigue = true;
  facteursGravitéMineurs++;
}

//qst8 : DIFFICULTES D'AVALAISON
if (quiz[cont].reponse == 'oui') {
  difficulteAvalaison = true;
  facteursGravitéMajeurs++;
}

//qst9 : MANQUE DE SOUFFLE
if (quiz[cont].reponse == 'oui') {
  manqueSouffle = true;
  facteursGravitéMajeurs++;
}

//qst14 : l’hypertension, maladie cardiaque ou vasculaire
if (quiz[cont].reponse == 'oui') {
  hypertension = true;
}

//qst15 : DIABETE
if (quiz[cont].reponse == 'oui') {
  diabete = true;
}

//qst16 : CANCER
if (quiz[cont].reponse == 'oui') {
  cancer = true
}

//qst17 : Maladie respiratoire
if (quiz[cont].reponse == 'oui') {
  maladieRespiratoire = true;
}

//qst18 : Insuffisance rénale chronique dialysée
if (quiz[cont].reponse == 'oui') {
  dialyse = true;
}

//qst19 : MALADIE DU FOIE
if (quiz[cont].reponse == 'oui') {
  foie = true
}

//qst20 : ENCEINTE
if (quiz[cont].reponse == 'oui') {
  enceiente = true;
}

//qst21 : une maladie connue pour diminuer vos défenses immunitaires
if (quiz[cont].reponse == 'oui') {
  diminutionImmunitaire = true;
}

//qst22 : traitement immunosuppresseur
if (quiz[cont].reponse == 'oui') {
  traitementImmunosuppresseur = true;
}