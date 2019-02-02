function abilityModify(abilityScore) {
    let abilityModifier = '';
    switch(abilityScore) {
        case 1:
            abilityModifier = '-5';
            break;
        case 2:
            abilityModifier = '-4';
            break;
        case 3:
            abilityModifier = '-4';
            break;
        case 4:
            abilityModifier = '-3';
            break;
        case 5:
            abilityModifier = '-3';
            break;
        case 6:
            abilityModifier = '-2';
            break;
        case 7:
            abilityModifier = '-2';
            break;
        case 8:
            abilityModifier = '-1';
            break;
        case 9:
            abilityModifier = '-1';
            break;
        case 10:
            abilityModifier = '+0';
            break;
        case 11:
            abilityModifier = '+0';
            break;
        case 12:
            abilityModifier = '+1';
            break;
        case 13:
            abilityModifier = '+1';
            break;
        case 14:
            abilityModifier = '+2';
            break;
        case 15:
            abilityModifier = '+2';
            break;
        case 16:
            abilityModifier = '+3';
            break;
        case 17:
            abilityModifier = '+3';
            break;
        case 18:
            abilityModifier = '+4';
            break;
        case 19:
            abilityModifier = '+4';
            break;
        case 20:
            abilityModifier = '+5';
            break;
        case 21:
            abilityModifier = '+5';
            break;
        case 22:
            abilityModifier = '+6';
            break;
        default:
            abilityModifier = abilityScore;
            break;
    }
    return abilityModifier;
}

export default abilityModify;