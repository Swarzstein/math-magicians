import operate from '../logic/operate';

describe('operate', () => {
  test('shoud return 15 after adding 10 + 5', () => {
    expect(operate('10', '5', '+')).toEqual('15');
  });
  test('shoud return 0 after substracting 6 - 6', () => {
    expect(operate('6', '6', '-')).toEqual('0');
  });
  test('shoud return 48 after mutiplying 6 x 8', () => {
    expect(operate('6', '8', 'x')).toEqual('48');
  });
  test('shoud return 2 after dividing 10 ÷ 5', () => {
    expect(operate('10', '5', '÷')).toEqual('2');
  });
  test('shoud return 1 after getting the rest of 9 % 5', () => {
    expect(operate('9', '5', '%')).toEqual('4');
  });
});
