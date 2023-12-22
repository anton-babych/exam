export enum GoodsGroup {
    A = 0.1,
    B = 0.2,
    C = 0.3
}

export const THROW_NEGATIVE_ERROR = "Від'ємне число";
export const THROW_UNDEFINED_GROUP_ERROR = "Невідома група";

export class DutyCalculator {
    calculateDuty(importAmount: number, goodsGroup: GoodsGroup): number {
        if (importAmount < 0) {
            throw new Error(THROW_NEGATIVE_ERROR);
        }
        if (typeof goodsGroup === 'undefined') {
            throw new Error(THROW_UNDEFINED_GROUP_ERROR);
        }
        return importAmount * goodsGroup;
    }
}

