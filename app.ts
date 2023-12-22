import * as readline from 'readline';
import { DutyCalculator, GoodsGroup } from './dutyCalculator';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let calculator = new DutyCalculator();

let goodsGroupMap: { [key: string]: GoodsGroup } = {
    'A': GoodsGroup.A,
    'B': GoodsGroup.B,
    'C': GoodsGroup.C
};

function askQuestion() {
    rl.question('Введіть суму імпорту та групу товарів (A, B, C) через space (або введіть "вихід" для виходу): ',
        (answer) => {
        if (answer.toLowerCase() === 'вихід') {
            rl.close();
        } else {
            let [importAmount, goodsGroup] = answer.split(' ').map((value, index) => index === 0 ? parseFloat(value) : goodsGroupMap[value]);
            try {
                let duty = calculator.calculateDuty(importAmount, goodsGroup);
                console.log(`Мито для суми імпорту ${importAmount} в групі товарів ${GoodsGroup[goodsGroup]} становить ${duty}`);
            } catch (error) {
                console.error((error as Error).message);
            }
            askQuestion();
        }
    });
}

askQuestion();
