function getSecondsToday() {
    let tempDate = new Date();
    return Math.floor(((new Date()) - (new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())).getTime()) / 1000);
}

console.log(getSecondsToday());