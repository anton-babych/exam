export function sumOfArithmeticProgression(n: number): number | null {
    if(n < 0) return null;

    if (!Number.isInteger(n)) {
        console.log('Помилка: n повинне бути цілим числом.');
        return null;
    }

    let a = 2;
    let d = 2;
    let sum = n / 2 * (2 * a + (n - 1) * d);
    return sum;
}
