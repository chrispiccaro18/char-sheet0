import rollD6DropLowest from '../src/roll-d6-drop-lowest.js';
import abilityModify from '../src/ability-modify.js';

// global variable for amount of six-sided-dice for ability score roll
const diceForAbilityScoreRoll = 4;

const d20Button = document.getElementById('d20-button');

const statCells = document.querySelectorAll('.stat-cell');
const modCells = document.querySelectorAll('.mod-cell');

const classForm = document.getElementById('class-form');
const classOptions = classForm.elements.class;

const raceForm = document.getElementById('race-form');
const raceAttributeExplanation = document.getElementById('race-attribute-explanation');

const classImage = document.getElementById('class-image');
const classImageArray = ['../assets/fighter.png', '../assets/wizard.png', '../assets/rogue.png', '../assets/cleric.png'];
let classImageSrc = '';

const raceArray = ['human', 'dwarf', 'elf', 'halfling'];
for(let i = 0; i < raceArray.length; i++) {
    const race = raceArray[i];
    const raceRadio = document.createElement('input');
    raceRadio.type = 'radio';
    raceRadio.name = 'race';
    raceRadio.value = race;
    raceForm.appendChild(raceRadio);

    const raceSpan = document.createElement('span');
    raceSpan.textContent = ' ' + race + ' ';
    raceForm.appendChild(raceSpan);

    raceRadio.addEventListener('change', function() {
        const raceOptions = raceForm.elements.race;
        const racePicked = raceOptions.value;
        switch(racePicked) {
            case 'human':
                // increase all by 1
                raceAttributeExplanation.innerText = 'Humans add one to all attributes';
                break;
            case 'dwarf':
                // increase str and con by 2
                raceAttributeExplanation.innerText = 'Dwarves add 2 to STR and CON';
                break;
            case 'elf':
                // increase dex by 2 and wis by 1
                raceAttributeExplanation.innerText = 'Elves add 2 to DEX and 1 to WIS';
                break;
            case 'halfling':
                // increase dex by 2 and cha by 1
                raceAttributeExplanation.innerText = 'Halflings add 2 to DEX and 1 to CHA';
                break;
            default:
                break;

        }
    });
    
}

const raceOptions = raceForm.elements.race;

d20Button.addEventListener('click', function() {
    const racePicked = raceOptions.value;

    if(racePicked === '') {
        alert('Please pick a race to roll for your stats.');
    } else {
        for(let i = 0; i < statCells.length; i++) {
            const rawAbilityscore = rollD6DropLowest(diceForAbilityScoreRoll);
            statCells[i].value = rawAbilityscore; 
        }
    
        switch(racePicked) {
            case 'human':
                // increase all by 1
                statCells[0].value += 1;
                statCells[1].value += 1;
                statCells[2].value += 1;
                statCells[3].value += 1;
                statCells[4].value += 1;
                statCells[5].value += 1;
                break;
            case 'dwarf':
                // increase str and con by 2
                statCells[0].value += 2;
                statCells[2].value += 2;
                break;
            case 'elf':
                // increase dex by 2 and wis by 1
                statCells[1].value += 2;
                statCells[4].value += 1;
                break;
            case 'halfling':
                // increase dex by 2 and cha by 1
                statCells[1].value += 2;
                statCells[5].value += 1;
                break;
            default:
                break;
        }
        
        for(let i = 0; i < statCells.length; i++) {
            statCells[i].textContent = statCells[i].value;
            modCells[i].textContent = abilityModify(statCells[i].value); 
        }
    }
});

classForm.addEventListener('change', function() {
    for(let i = 0; i < statCells.length; i++) {
        statCells[i].classList.remove('main-attribute-for-class');
        modCells[i].classList.remove('main-attribute-for-class');
    }
    const classPicked = classOptions.value;
    switch(classPicked) {
        case 'fighter':
            classImageSrc = classImageArray[0];
            statCells[0].classList.add('main-attribute-for-class');
            modCells[0].classList.add('main-attribute-for-class');
            break;
        case 'wizard':
            classImageSrc = classImageArray[1];
            statCells[3].classList.add('main-attribute-for-class');
            modCells[3].classList.add('main-attribute-for-class');
            break;
        case 'rogue':
            classImageSrc = classImageArray[2];
            statCells[1].classList.add('main-attribute-for-class');
            modCells[1].classList.add('main-attribute-for-class');
            break;
        case 'cleric':
            classImageSrc = classImageArray[3];
            statCells[4].classList.add('main-attribute-for-class');
            modCells[4].classList.add('main-attribute-for-class');
            break;
        default:
            classImageSrc = '';
            break;
    }
    classImage.src = classImageSrc;
    if(classImage.src !== '') {
        classImage.classList.remove('hidden');
    }
});