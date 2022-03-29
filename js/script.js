// Progress Bar 
const progress = document.querySelector('.progress-done');
let pre = document.querySelector('#pre');
let sui = document.querySelector('#sui');
let prog = parseFloat(progress.getAttribute('data-done'));
let cir = document.querySelector('.circle1');
let activecircle = document.querySelector('.circle2');
let circle = document.querySelector('.circle3');

activecircle.style.backgroundColor = '#FFFF00';
activecircle.removeAttribute("id");


progress.style.width = prog + '%';
progress.style.opacity = 1;
progress.textContent = prog / 4.5 + ' / ' + '22';
sui.addEventListener('click', function() {
    if (prog <= 99) {

        prog += 100 / 22;
        progress.style.width = prog + '%';
        progress.textContent = parseInt(prog / 4.5) + ' / ' + '22';

    }

})
pre.addEventListener('click', function() {
    if (prog > 4.5) {
        prog -= 100 / 22;
        progress.style.width = prog + '%';
        progress.textContent = parseInt(prog / 4.5) + ' / ' + '22';
    }
})

// Quiz de Question
const quiz = [{
        question: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs)?",
        choix: ["Oui", "Non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Quelle est votre température corporelle ?",
        choix: ["25", "45"],
        type: "number",
        reponse: null
    },

    {
        question: "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
        choix: ["oui", "non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
        choix: ["oui", "non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Ces derniers jours, avez-vous un mal de gorge ?",
        choix: ["oui", "non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
        choix: ["oui", "non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
        choix: ["oui", "non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
        choix: ["oui", "non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
        choix: ["oui", "non"],
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
        choix: ["15", "115"],
        type: "number",
        reponse: null
    },

    {
        question: "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
        choix: ["20", "250"],
        type: "number",
        reponse: null
    },

    {
        question: "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
        choix: ["80", "250"],
        type: "number",
        reponse: null
    },

    {
        question: "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        choix: ["Oui", "Non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Êtes-vous diabétique ?",
        choix: ["Oui", "Non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Avez-vous ou avez-vous eu un cancer ?",
        choix: ["Oui", "Non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        choix: ["Oui", "Non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        choix: ["Oui", "Non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Avez-vous une maladie chronique du foie ?",
        choix: ["Oui", "Non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Êtes-vous enceinte ?",
        choix: ["Oui", "Non", "Homme"],
        type: "radio",
        reponse: null
    },

    {
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
        choix: ["Oui", "Non"],
        type: "radio",
        reponse: null
    },

    {
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        choix: ["Oui", "Non"],
        type: "radio",
        reponse: null
    },
]

const ques = document.getElementById("ques");
const contentCh = document.getElementById("contentCh");

var cont = 0;
ques.innerHTML = `${quiz[cont].question}`;
contentCh.innerHTML = choix();

if (cont == 0) {
    pre.style.visibility = "hidden"
}


function next() {
    cont++;
    ques.innerHTML = `${quiz[cont].question} `;
    contentCh.innerHTML = choix();
    if (cont > 0 && cont <= 20) {
        pre.style.visibility = "visible"
    } else if (cont == 21) {
        sui.innerText = "Termine"
    }
}

function precedent() {
    cont--;
    ques.innerHTML = `${quiz[cont].question} `;
    contentCh.innerHTML = choix();
    if (cont == 0) {
        pre.style.visibility = "hidden"
    }
    cont--;
    ques.innerHTML = `${quiz[cont].question} `;
    contentCh.innerHTML = choix();
}


function choix() {
    var content = "";

    if (quiz[cont].type == "radio") {
        for (let i = 0; i <= quiz[cont].choix.length - 1; i++) {
            content += '<input type="' + quiz[cont].type + '" value="' + quiz[cont].choix[i] + '" onclick="check(' + i + ')" name="ouiAndNon"> <label for="' + quiz[cont].choix[i] + '">' + quiz[cont].choix[i] + '</label>';
        }
    }

    if (quiz[cont].type == "number") {
        content += '<input type="' + quiz[cont].type + '" max="' + quiz[cont].choix[1] + '" min="' + quiz[cont].choix[0] + '" id="num" oninput="checkNum()" value="' + quiz[cont].choix + '" placeholder="' + quiz[cont].choix[1] + ' - ' + quiz[cont].choix[0] + '">'
    }
    return content;
}



function check(i) {
    quiz[cont].reponse = quiz[cont].choix[i]
}

function checkNum() {
    let num = document.getElementById('num')
    if (num.value != "") {
        sui.disabled = false;
    }
    quiz[cont].reponse = num.value
}

//FACTEURS DE GRAVITES 
let facteursGravitéMineurs = 0
let facteursGravitéMajeurs = 0


//SYMPTOMES
let symptômes = {
    fievre: false,
    toux: false,
    courbatures: false,
    malGorge: false,
    diarrhee: false,
    fatigue: false,
    difficulteAvalaison: false,
    manqueSouffle: false,
    sensation: ''
}

//FACTEURS PRONOSTIQUES
let facteursPronostiques = {
    age,
    hypertension: false,
    diabete: false,
    cancer: false,
    maladieRespiratoire: false,
    dialyse: false,
    foie: false,
    enceiente: false,
    diminutionImmunitaire: false,
    traitementImmunosuppresseur: false
}



//qst1 : FIEVRE
if (quiz[0].reponse == 'oui') {
    symptômes.fievre == true;
}

//qst2 : TEMPERATURE
if (temperature >= 39) {
    facteursGravitéMineurs++;
}
if (temperature <= 35.4) {
    facteursGravitéMajeurs++;
}

//qst3 : TOUX

if (quiz[2].reponse == 'oui') {
    symptômes.toux = true;
}

//qst4 : COURBATURES 
if (quiz[3].reponse == 'oui') {
    symptômes.courbatures = true;
}

//qst5 : MAL DE GORGE
if (quiz[4].reponse == 'oui') {
    symptômes.malGorge = true;
}

//qst6 : DIARREE
if (quiz[5].reponse == 'oui') {
    symptômes.diarrhee = true
}

//qst7 :  FATIGUE
if (quiz[6].reponse == 'oui') {
    symptômes.fatigue = true;
    facteursGravitéMineurs++;
}

//qst8 : DIFFICULTES D'AVALAISON
if (quiz[7].reponse == 'oui') {
    symptômes.difficulteAvalaison = true;
    facteursGravitéMajeurs++;
}

//qst9 : MANQUE DE SOUFFLE
if (quiz[8].reponse == 'oui') {
    symptômes.manqueSouffle = true;
    facteursGravitéMajeurs++;
    if (quiz[cont].reponse == 'oui') {
        toux = true;
    }
}

//qst10 : SENSATION
if (sensation == 'fatigué' || sensation == 'très fatigué') {
    facteursGravitéMineurs++;
}

//qst11 : AGE (facteur de risque spécifique)
//qst12 : POIDS
//qst13 : TAILLE

//qst14 : l’hypertension, maladie cardiaque ou vasculaire
if (quiz[13].reponse == 'oui') {
    facteursPronostiques.hypertension = true;
}

//qst15 : DIABETE
if (quiz[14].reponse == 'oui') {
    facteursPronostiques.diabete = true;
}

//qst16 : CANCER
if (quiz[15].reponse == 'oui') {
    facteursPronostiques.cancer = true
}

//qst17 : Maladie respiratoire
if (quiz[16].reponse == 'oui') {
    facteursPronostiques.maladieRespiratoire = true;
}

//qst18 : Insuffisance rénale chronique dialysée
if (quiz[17].reponse == 'oui') {
    facteursPronostiques.dialyse = true;
}

//qst19 : MALADIE DU FOIE
if (quiz[18].reponse == 'oui') {
    facteursPronostiques.foie = true
}

//qst20 : ENCEINTE
if (quiz[19].reponse == 'oui') {
    facteursPronostiques.enceiente = true;
}

//qst21 : une maladie connue pour diminuer vos défenses immunitaires
if (quiz[20].reponse == 'oui') {
    facteursPronostiques.diminutionImmunitaire = true;
}

//qst22 : traitement immunosuppresseur
if (quiz[21].reponse == 'oui') {
    facteursPronostiques.traitementImmunosuppresseur = true;
}

//RESULTS
if ((symptômes.fievre == true || symptômes.toux == true) && (symptômes.malGorge == true || symptômes.toux == true) && (symptômes.courbatures == true || symptômes.fievre == true) && (symptômes.diarrhee == true)) {
    if (facteursPronostiques == 0) {
        if (facteursGravitéMajeurs == 0 && facteursGravitéMineurs == 0 && age < 50) {
            quiz.push(' nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’ apparition de nouveaux symptômes.Vous pourrez aussi utiliser à nouveau l’ application pour réévaluer vos symptômes.')
        }

        if ((facteursGravitéMajeurs == 0 && facteursGravitéMineurs == 0 && age > 50 && age < 69) || facteursGravitéMineurs >= 1) {
            quiz.push('téléconsultation ou médecin généraliste ou visite à domicile')
            if (manqueSouffle == true || difficulteAvalaison == true) {
                quiz.push('appelez le 141 ')
            }
        }
    } else if (facteursPronostiques >= 1) {
        if (facteursGravitéMajeurs == 0 && facteursGravitéMineurs == 0) {
            quiz.push('téléconsultation ou médecin généraliste ou visite à domicile')
            if (manqueSouffle == true || difficulteAvalaison == true) {
                quiz.push('appelez le 141 ')
            }
        } else if (facteursGravitéMineurs == 1) {
            quiz.push('téléconsultation ou médecin généraliste ou visite à domicile ')
            if (manqueSouffle == true || difficulteAvalaison == true) {
                quiz.push('appelez le 141 ')
            }
        } else if (facteursGravitéMineurs >= 2) {
            quiz.push('appel 141')
        }
    } else if (facteursGravitéMajeurs >= 1) {
        quiz.push('Appel 141')
    }

} else if (symptômes.fievre == true && symptômes.toux == true) {
    if (facteursPronostiques == 0) {
        if ((facteursGravitéMajeurs == 0 && facteursGravitéMineurs == 0) || (facteursGravitéMineurs >= 1 && facteursGravitéMajeurs == 0)) {
            quiz.push(' téléconsultation ou médecin généraliste ou visite à domicile')
        }
    } else if (facteursPronostiques >= 1) {
        if (facteursGravitéMajeurs == 0 && facteursGravitéMineurs == 0) {
            quiz.push('téléconsultation ou médecin généraliste ou visite à domicile ')
        } else if (facteursGravitéMineurs >= 1) {
            quiz.push('téléconsultation ou médecin généraliste ou visite à domicile ')
        } else if (facteursGravitéMineurs >= 2) {
            quiz.push('Appel 141')
        }
    } else if (facteursGravitéMajeurs >= 1) {
        quiz.push('Appel 141')
    }
} else if (symptômes.fievre == true || symptômes.toux == true || symptômes.malGorge == true || symptômes.courbatures == true) {
    if (facteursGravitéMajeurs == 0 && facteursGravitéMineurs == 0) {
        quiz.push('Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.')
    } else if (facteursPronostiques >= 1 || facteursGravitéMajeurs >= 1 || facteursGravitéMineurs >= 1) {
        quiz.push('Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé.Au moindre doute, appelez le 141. ')
    }
} else if (facteursPronostiques == 0 && facteursGravitéMajeurs == 0 && facteursGravitéMineurs == 0) {
    quiz.push('Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute.Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation.Pour toute information concernant le Covid - 19 allez vers la page d’ accueil.')
}