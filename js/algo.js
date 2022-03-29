//FACTEURS DE GRAVITES (si un element dans l'objet est incrementé l'objet aussi sera incrementé et si les 2 egal 0 l'objet aussi = 0)
let facteursGravité = {
    facteursGravitéMineurs: 0,
    facteursGravitéMajeurs: 0
}

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
if (reponse == 'oui') {
    symptômes.fievre == true;
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
    symptômes.toux = true;
}

//qst4 : COURBATURES 
if (reponse == 'oui') {
    symptômes.courbatures = true;
}

//qst5 : MAL DE GORGE
if (reponse == 'oui') {
    symptômes.malGorge = true;
}

//qst6 : DIARREE
if (reponse == 'oui') {
    symptômes.diarrhee = true
}

//qst7 :  FATIGUE
if (reponse == 'oui') {
    symptômes.fatigue = true;
    facteursGravité.facteursGravitéMineurs++;
}

//qst8 : DIFFICULTES D'AVALAISON
if (reponse == 'oui') {
    symptômes.difficulteAvalaison = true;
    facteursGravité.facteursGravitéMajeurs++;
}

//qst9 : MANQUE DE SOUFFLE
if (reponse == 'oui') {
    symptômes.manqueSouffle = true;
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
    facteursPronostiques.hypertension = true;
}

//qst15 : DIABETE
if (reponse == 'oui') {
    facteursPronostiques.diabete = true;
}

//qst16 : CANCER
if (reponse == 'oui') {
    facteursPronostiques.cancer = true
}

//qst17 : Maladie respiratoire
if (reponse == 'oui') {
    facteursPronostiques.maladieRespiratoire = true;
}

//qst18 : Insuffisance rénale chronique dialysée
if (reponse == 'oui') {
    facteursPronostiques.dialyse = true;
}

//qst19 : MALADIE DU FOIE
if (reponse == 'oui') {
    facteursPronostiques.foie = true
}

//qst20 : ENCEINTE
if (reponse == 'oui') {
    facteursPronostiques.enceiente = true;
}

//qst21 : une maladie connue pour diminuer vos défenses immunitaires
if (reponse == 'oui') {
    facteursPronostiques.diminutionImmunitaire = true;
}

//qst22 : traitement immunosuppresseur
if (reponse == 'oui') {
    facteursPronostiques.traitementImmunosuppresseur = true;
}

//RESULTS
if ((symptômes.fievre == true || symptômes.toux == true) && (symptômes.malGorge == true || symptômes.toux == true) && (symptômes.courbatures == true || symptômes.fievre == true) && (symptômes.diarrhee == true)) {
    if (facteursPronostiques == 0) {
        if (facteursGravité == 0 && age < 50) {
            quiz.push(' nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’ apparition de nouveaux symptômes.Vous pourrez aussi utiliser à nouveau l’ application pour réévaluer vos symptômes.')
        }

        if ((facteursGravité == 0 && age > 50 && age < 69) || facteursGravitéMineurs >= 1) {
            a.push('téléconsultation ou médecin généraliste ou visite à domicile')
            if (manqueSouffle == true || difficulteAvalaison == true) {
                a.push('appelez le 141 ')
            }
        }
    } else
    if (facteursPronostiques >= 1) {
        if (facteursGravité == 0) {
            quiz.push('téléconsultation ou médecin généraliste ou visite à domicile')
            if (manqueSouffle == true || difficulteAvalaison == true) {
                a.push('appelez le 141 ')
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

} else
if (symptômes.fievre == true && symptômes.toux == true) {
    if (facteursPronostiques == 0) {
        if ((facteursGravité == 0) || (facteursGravitéMineurs >= 1 && facteursGravitéMajeurs == 0)) {
            quiz.push(' téléconsultation ou médecin généraliste ou visite à domicile')
        }
    } else if (facteursPronostiques >= 1) {
        if (facteursGravité == 0) {
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
    if (facteursGravité == 0) {
        quiz.push('Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.')
    } else if (facteursPronostiques >= 1 || facteursGravitéMajeurs >= 1 || facteursGravitéMineurs >= 1) {
        quiz.push('Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé.Au moindre doute, appelez le 141. ')
    }
} else if (facteursPronostiques == 0 && facteursGravité == 0) {
    quiz.push('Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute.Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation.Pour toute information concernant le Covid - 19 allez vers la page d’ accueil.')
}