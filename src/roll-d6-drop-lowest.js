function rollD6DropLowest(die) {
    let rollArray = [];
    let result = 0;
    for(let i = 0; i < die; i++) {
        rollArray[i] = Math.floor(Math.random() * Math.floor(6)) + 1;    
        result += rollArray[i];
    }
    return result;
}

export default rollD6DropLowest;