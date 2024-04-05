import { CalcService } from './calc.service';

describe('CalcService', () => {
  it('should multiply two numbers', () => {
    const calc = new CalcService();
    const result = calc.multiply(2, 10);
    expect(result).toBe(20);
  });
});
