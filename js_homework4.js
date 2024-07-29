"use strict";

function checkProbabilityTheory(count) {
    const min = 100;
    const max = 1000;

    let evenNumbersCount = 0;
    let oddNumbersCount = 0;

    for (let i = 0; i < count; i++) {
        let rnd = Math.floor(Math.random() * (max + 1 - min) + min);
        rnd % 2 == 0 ? evenNumbersCount++ : oddNumbersCount++;
    }

    let evenNumbersPercentage = Math.round((evenNumbersCount/count)*100);
    let oddNumbersPercentage = Math.round((oddNumbersCount/count)*100);
    
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + evenNumbersCount);
    console.log("Не парних чисел: " + oddNumbersCount);
    console.log("Відсоток парних до не парних: " + evenNumbersPercentage + "%" + oddNumbersPercentage);
}