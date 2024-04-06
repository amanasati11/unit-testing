import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('CalcService', () => {
  it('should multiply two numbers', () => {
    const shared = new SharedService();
    const calc = new CalcService(shared);
    const result = calc.multiply(2, 10);
    expect(result).toBe(20);
  });

  it('should call the mySharedFuntion', () => {
    // const shared = new SharedService();
    const shared = jasmine.createSpyObj("SharedService", ["mySharedFunction"]);
    const calc = new CalcService(shared);
    // spyOn(shared, 'mySharedFunction');
    // spyOn(shared, 'mySharedFunction').and.callThrough();
    const result = calc.multiply(2, 10);
    expect(shared.mySharedFunction).toHaveBeenCalled();
  });
});
