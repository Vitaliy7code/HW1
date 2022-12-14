
//1

for(let i = 1; i <= 10; i++) {
    if(i%3 === 0) {
        console.log('FizBuz');
    } else if(i%2 === 0) {
        console.log('Fiz');
    } else if(i%2 === 1) {
        console.log('Buz');
    }
}

// 2

let num = 1;

for(let i = 1; i<=10; i++) {
    num = num * i;
}

//3

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let allPaperAmount = weeksAmount * consumptionPerWeek;
let PaperBoxes = 0;

while(allPaperAmount > 0) {
 allPaperAmount = allPaperAmount - sheetsInReamPaper;
 PaperBoxes++;
}

console.log(paperBoxes);

