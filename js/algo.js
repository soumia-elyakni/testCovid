//FACTEURS DE GRAVITES
let facteursGravité = {
    facteursGravitéMineurs: 0,
    facteursGravitéMajeurs: 0
}

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
let facteurPronostique = {
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
} = 0


//qst1 : FIEVRE
if (reponse == 'oui') {
    fievre == true;
}

//qst2 : TEMPERATURE
if (temperature >= 39) {
    facteursGravité.facteursGravitéMineurs++;
}
if (temperature <= 35.4) {
    facteursGravité.facteursGravitéMajeurs++;
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
    facteursGravité.facteursGravitéMineurs++;
}

//qst8 : DIFFICULTES D'AVALAISON
if (reponse == 'oui') {
    difficulteAvalaison = true;
    facteursGravité.facteursGravitéMajeurs++;
}

//qst9 : MANQUE DE SOUFFLE
if (reponse == 'oui') {
    manqueSouffle = true;
    facteursGravité.facteursGravitéMajeurs++;
}

//qst10 : SENSATION
if (sensation == 'fatigué' || sensation == 'très fatigué') {
    facteursGravité.facteursGravitéMineurs++;
}

//qst11 : AGE (facteur de risque spécifique)
//qst12 : POIDS
//qst13 : TAILLE

//qst14 : l’hypertension, maladie cardiaque ou vasculaire
if (reponse == 'oui') {
    facteurPronostique.hypertension = true;
}

//qst15 : DIABETE
if (reponse == 'oui') {
    facteurPronostique.diabete = true;
}

//qst16 : CANCER
if (reponse == 'oui') {
    facteurPronostique.cancer = true
}

//qst17 : Maladie respiratoire
if (reponse == 'oui') {
    facteurPronostique.maladieRespiratoire = true;
}

//qst18 : Insuffisance rénale chronique dialysée
if (reponse == 'oui') {
    facteurPronostique.dialyse = true;
}

//qst19 : MALADIE DU FOIE
if (reponse == 'oui') {
    facteurPronostique.foie = true
}

//qst20 : ENCEINTE
if (reponse == 'oui') {
    facteurPronostique.enceiente = true;
}

//qst21 : une maladie connue pour diminuer vos défenses immunitaires
if (reponse == 'oui') {
    facteurPronostique.diminutionImmunitaire = true;
}

//qst22 : traitement immunosuppresseur
if (reponse == 'oui') {
    facteurPronostique.traitementImmunosuppresseur = true;
}

//RESULTS
if ((fievre == true || toux == true) && (malGorge == true || toux == true) && (courbatures == true || fievre == true) && (diarrhee == true)) {
    if (facteurPronostique == 0) {
        if (facteursGravité == 0 && age < 50) {
            console.log(' nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’ apparition de nouveaux symptômes.Vous pourrez aussi utiliser à nouveau l’ application pour réévaluer vos symptômes.')
        }

        if ((facteursGravité == 0 && age > 50 && age < 69) || facteursGravitéMineurs >= 1) {
            console.log('téléconsultation ou médecin généraliste ou visite à domicile')
            if (manqueSouffle == true || difficulteAvalaison == true) {
                console.log('appelez le 141 ')
            }
        }
    } else
    if (facteurPronostique >= 1) {
        if (facteursGravité == 0) {
            console.log(': téléconsultation ou médecin généraliste ou visite à domicile')
            if (manqueSouffle == true || difficulteAvalaison == true) {
                console.log('appelez le 141 ')
            }
        } else if (facteursGravitéMineurs == 1) {
            console.log('téléconsultation ou médecin généraliste ou visite à domicile ')
            if (manqueSouffle == true || difficulteAvalaison == true) {
                console.log('appelez le 141 ')
            }
        } else if (facteursGravitéMineurs >= 2) {
            console.log('appel 141')
        }
    } else if (facteursGravitéMajeurs >= 1) {
        console.log('Appel 141')
    }

} else if (fievre == true && toux == true) {
    if (facteurPronostique == 0) {
        if ((facteursGravité == 0) || (facteursGravitéMineurs >= 1 && facteursGravitéMajeurs == 0)) {
            console.log(' téléconsultation ou médecin généraliste ou visite à domicile')
        }
    } else if (facteurPronostique >= 1) {
        if (facteursGravité == 0) {
            console.log('téléconsultation ou médecin généraliste ou visite à domicile ')
        } else if (facteursGravitéMineurs >= 1) {
            console.log('téléconsultation ou médecin généraliste ou visite à domicile ')
        } else if (facteursGravitéMineurs >= 2) {
            console.log('Appel 141')
        }
    } else if (facteursGravitéMajeurs >= 1) {
        console.log('Appel 141')
    }
} else if (fievre == true || toux == true || malGorge == true || courbatures == true) {
    if (facteursGravité == 0) {
        console.log('Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.')
    } else if (facteurPronostique >= 1 || facteursGravitéMajeurs >= 1 || facteursGravitéMineurs >= 1) {
        console.log('Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé.Au moindre doute, appelez le 141. ')
    }
} else if (facteurPronostique == 0 && facteursGravité == 0) {
    console.log('Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute.Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation.Pour toute information concernant le Covid - 19 allez vers la page d’ accueil.')
}
//Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
//Tout patient avec fièvre et toux :
//Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures :
//Tout patient avec aucun symptôme :
//Pour tous :