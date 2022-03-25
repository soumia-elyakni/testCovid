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