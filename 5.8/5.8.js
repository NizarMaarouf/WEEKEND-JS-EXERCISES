var str1 = "I am Nizar Maarouf";

function findShortest(str) {
    var newstr = str.split(' ');
    //console.log(newstr);
    var shortest = newstr.reduce((shortest, current) => {
        return current.length > shortest.length ? current : shortest;
    }, newstr[0]);
    return shortest;
}

console.log(findShortest(str1));