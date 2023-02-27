function getLastDayOfMonth(year, month) {
    let tempDate = new Date(year, month + 1);
    tempDate.setDate(tempDate.getDate() - 1);
    return tempDate.getDate();
}

console.log(getLastDayOfMonth(2012, 1));