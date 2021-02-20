function findPerimeter(length, width) {

    const perimeter = (2 * length + 2 * width);
    return perimeter;
}
console.log(findPerimeter(2, 26));
console.log(findPerimeter(2, 9));
console.log(findPerimeter(20, 10));


function findPerimeter1(length, width) {
    this.length = length;
    this.width = width;
    this.perimeter = function() {
        return (2 * this.length + 2 * this.width);
    };
}
var f = new findPerimeter1(2, 9);
var f1 = new findPerimeter1(2, 26);
var f2 = new findPerimeter1(20, 10);

console.log('perimeter =', Number(f.perimeter()));
console.log('perimeter =', Number(f1.perimeter()));
console.log('perimeter =', Number(f2.perimeter()));