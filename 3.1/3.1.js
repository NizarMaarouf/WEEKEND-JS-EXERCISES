function nb_year(currentP, pAfter, percentageIncrease, moreOver) {

    let count = 0;
    while (currentP <= pAfter) {
        currentP += (((percentageIncrease / 100)) * currentP) + moreOver;

        count++;
    }
    return count;
}

console.log(nb_year(1000, 1200, 2, 50));
console.log(nb_year(1500, 5000, 5, 100));
console.log(nb_year(1500000, 2000000, 2.5, 10000));