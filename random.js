function randomIndex(arr){
    let randomInd = Math.floor(Math.random() * arr.length);
    return randomInd;
}

export { randomIndex };