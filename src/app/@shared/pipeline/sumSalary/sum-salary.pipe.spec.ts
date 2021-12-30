import { SumSalaryPipe } from './sum-salary.pipe';

describe('SumSalaryPipe', () => {
  it('create an instance', () => {
    const pipe = new SumSalaryPipe();
    expect(pipe).toBeTruthy();
  });
});
