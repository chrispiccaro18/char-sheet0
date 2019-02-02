import rollD6DropLowest from '../src/roll-d6-drop-lowest.js';

// global variable for amount of dice for ability score roll
const diceForAbilityScoreRoll = 3;

const d20Button = document.getElementById('d20-button');
const statCells = document.querySelectorAll('.stat-cell');

const classForm = document.getElementById('class-form');
const classOptions = classForm.elements.class;

const classImage = document.getElementById('class-image');
const classImageArray = ['../assets/fighter.png', '../assets/wizard.png', '../assets/rogue.png', '../assets/cleric.png'];

const raceForm = document.getElementById('race-form');
const raceOptions = raceForm.elements.race;

let classImageSrc = '';

d20Button.addEventListener('click', function() {
    const classPicked = classOptions.value;
    const racePicked = raceOptions.value;

    if(classPicked === '' || racePicked === '') {
        alert('Please pick a class and a race to get your stats.');
    } else {
        switch(classPicked) {
            case 'fighter':
                classImageSrc = classImageArray[0];
                break;
            case 'wizard':
                classImageSrc = classImageArray[1];
                break;
            case 'rogue':
                classImageSrc = classImageArray[2];
                break;
            case 'cleric':
                classImageSrc = classImageArray[3];
                break;
            default:
                classImageSrc = '';
                break;
        }
        classImage.src = classImageSrc;
        classImage.classList.remove('hidden');
        
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
        
        // for(let i = 0; i < statCells.length; i++) {
        //     statCells[i].textContent = statCells[i].value;
        //     // pass value into function that gives mod 
        // }
    }
});