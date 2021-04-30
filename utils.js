
export function getLawfulImage(someLawfulNumber) {
    if (someLawfulNumber > 7) {
        return './assets/lawfulgood.jpg';
    } else if (someLawfulNumber > 4) {
        return '/assets/lawfulneutral.jpg';
    } else {
        return '/assets/lawfulevil.jpg';
    }
}

export function getNeutralImage(someNeutralNumber) {
    if (someNeutralNumber > 7) {
        return './assets/neutralgood.jpg';
    } else if (someNeutralNumber > 4) {
        return '/assets/trueneutral.jpg';
    } else {
        return '/assets/neutralevil.jpg';
    }
}

export function getChaoticImage(someChaoticNumber) {
    if (someChaoticNumber > 7) {
        return './assets/chaoticgood.jpg';
    } else if (someChaoticNumber > 4) {
        return '/assets/chaoticneutral.jpg';
    } else {
        return '/assets/chaoticevil.jpg';
    }
}