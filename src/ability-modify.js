function abilityModify(abilityScore) {
    let abilityModifier = '';
    if(abilityScore < 10) {
        abilityModifier = Math.floor((abilityScore - 10) / 2);
    } else {
        abilityModifier = `+${abilityModifier = Math.floor((abilityScore - 10) / 2)}`;
    }
    return abilityModifier;
}

export default abilityModify;