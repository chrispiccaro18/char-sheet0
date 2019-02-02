function rollD6DropLowest(dice) {
    let rollArray = [];
    let result = 0;
    for(let i = 0; i < dice; i++) {
        rollArray[i] = Math.floor(Math.random() * Math.floor(6)) + 1;   
        result += rollArray[i];
    }
    const lowestDie = Math.min(...rollArray);
    result -= lowestDie;
    return result;
}

export default rollD6DropLowest;