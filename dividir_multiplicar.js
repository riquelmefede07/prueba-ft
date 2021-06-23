const dividir = (x1, x2) => {
    if (x1 == 0 || x2 == 0) {
        return "no se puede dividir";
    } else {
        return x1 / x2;
    }
}

const multiplicar = (x1, x2) => {
    if (x1 == 0 || x2 == 0) {
        return "no se puede multiplicar por 0";
    } else {
        return x1 * x2;
    }
}

console.log();
console.log();