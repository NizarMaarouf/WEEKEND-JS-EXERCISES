let isIsogram = (str) => {
    var lowerCase = str.toLowerCase();
    const newSet = lowerCase.split("").every((c, i) => lowerCase.indexOf(c) == i);

    console.log(newSet);
};
isIsogram("Dermatoglyphics");
isIsogram("aba");
isIsogram("moOse");