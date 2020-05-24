import { getHistory, setHistory } from './history';

describe('setHistory and getHistory', () => {
  const HISTORY = {
    trans: [
      { timestamp: 0, amount: 1 },
      { timestamp: 1, amount: 2 },
    ],
    sum: 3,
  };

  test('should set and get history transactions and the sum value', () => {
    setHistory('card-1', HISTORY);

    const result = getHistory('card-1');

    expect(result).toEqual(HISTORY);
  });
});
