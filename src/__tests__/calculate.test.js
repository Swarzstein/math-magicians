import calculate from '../logic/calculate';

describe('test all calculator function', () => {
  test('Should return 4 after adding 2 + 2', () => {
    const obj = {
      total: '2', next: '2', operation: '+',
    };
    const res = {
      total: '4', next: null, operation: null,
    };
    expect(calculate(obj, '=')).toEqual(res);
  });
  test('Should return 5 after substracting 10 - 5', () => {
    const obj = {
      total: '10', next: '5', operation: '-',
    };
    const res = {
      total: '5', next: null, operation: null,
    };
    expect(calculate(obj, '=')).toEqual(res);
  });
  test('Should return null after pressing AC button', () => {
    const obj = {
      total: '26', next: '2', operation: '÷',
    };
    const res = {
      total: null, next: null, operation: null,
    };
    expect(calculate(obj, 'AC')).toEqual(res);
  });
  test('Should return 49 after multiplying 7 x 7', () => {
    const obj = {
      total: '7', next: '7', operation: 'x',
    };
    const res = {
      total: '49', next: null, operation: null,
    };
    expect(calculate(obj, '=')).toEqual(res);
  });
  test('Should return "Can\'t divide by 0." after Dividing by 0', () => {
    const obj = {
      total: '5', next: '0', operation: '÷',
    };
    const res = {
      total: "Can't divide by 0.", next: null, operation: null,
    };
    expect(calculate(obj, '=')).toEqual(res);
  });
  test('Should change 10 to -10 after changing the it\'s sign from total', () => {
    const obj = {
      total: '10', next: null, operation: null,
    };
    const res = {
      total: '-10', next: null, operation: null,
    };
    expect(calculate(obj, '+/-')).toEqual(res);
  });
  test('Should Change 3 to -3 after changing it\'s sign from next', () => {
    const obj = {
      total: '10', next: '3', operation: '+',
    };
    const res = {
      total: '10', next: '-3', operation: '+',
    };
    expect(calculate(obj, '+/-')).toEqual(res);
  });
  test('Should return 1 after getting the rest of 5 % 2', () => {
    const obj = {
      total: '5', next: '2', operation: '%',
    };
    const res = {
      total: '1', next: null, operation: null,
    };
    expect(calculate(obj, '=')).toEqual(res);
  });
});
