import {DutyCalculator, GoodsGroup, THROW_NEGATIVE_ERROR, THROW_UNDEFINED_GROUP_ERROR} from './DutyCalculator';


describe('DutyCalculator', () => {
    let calculator: DutyCalculator;

    beforeEach(() => {
        calculator = new DutyCalculator();
    });

    it('мито для групи A', () => {
        const duty = calculator.calculateDuty(1000, GoodsGroup.A);
        expect(duty).toBe(100);
    });

    it('неціле число', () => {
        const duty = calculator.calculateDuty(20.213, GoodsGroup.B);
        expect(duty).toBe(4.0426);
    });

    it('якщо невідома група', () => {
        expect(() => calculator.calculateDuty(100, undefined))
            .toThrow(THROW_UNDEFINED_GROUP_ERROR);
    });

    it('менше ніж 0', () => {
        expect(() => calculator.calculateDuty(-1, GoodsGroup.A))
            .toThrow(THROW_NEGATIVE_ERROR);
    });
});
