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
