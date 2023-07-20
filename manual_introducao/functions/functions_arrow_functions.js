//  - FUNCTIONS e ARROW FUNCTIONS -

function sum(a, b) {
    console.log(a + b);
}
sum(2, 10);

function sum(a, b = 10) {
    return a + b;
}
const sumValue1 = sum(2);
console.log(sumValue1);

//ARROW FUNCTIONS - mais moderno | mesma coisa que acima
const sumArrow = (a, b = 10) => {
    return a + b;
};

//mesma coisa que acima
const sumArrow2 = (a, b = 10) => a + b;

const sumValue = sumArrow2(2);
console.log(sumValue);
