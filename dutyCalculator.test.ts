import { sumOfArithmeticProgression } from './arithmeticProgression';

test('Неціле значення', () => {
    expect(sumOfArithmeticProgression(2.5)).toBe(null);
});

test("Від'єне значення", () => {
    expect(sumOfArithmeticProgression(-15)).toBe(null);
});

test('Сума перших 0 членів прогресії', () => {
    expect(sumOfArithmeticProgression(0)).toBe(0);
});

test('Сума перших 1 членів прогресії', () => {
    expect(sumOfArithmeticProgression(1)).toBe(2);
});
