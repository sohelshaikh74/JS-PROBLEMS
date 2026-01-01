function pritnTable(tableOf, tableTill) {
    for (let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf}X${i}=${tableOf * i}`);
    }
}
pritnTable(5, 55);