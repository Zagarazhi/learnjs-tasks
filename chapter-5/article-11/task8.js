function formatDate(date) {
    let tempDate = new Date();
    let diff = tempDate.getTime() - date.getTime();
    if(diff < 1000) {
        return 'Прямо сейчас';
    } else if (diff < 60000) {
        return `${Math.floor(diff / 1000)} сек. назад`;
    } else if (diff <= 360000) {
        return `${Math.floor(diff / 60000)} мин. назад`;
    }
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );