function getSecondsToTomorrow() {
    let tempDate = new Date();
    return Math.floor((((new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() + 1)).getTime() - new Date())) / 1000);
}

console.log(getSecondsToTomorrow());