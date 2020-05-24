import { getHistory } from 'src/utils/history';
import detect from './detect';

describe('detect', () => {
  test('should detect card-1 and card-2 as fraudulent', () => {
    const transactions = [
      'card-1, 2020-05-24T00:00:00, 20.50',
      'card-2, 2020-05-24T00:00:00, 10.00',
      'card-3, 2020-05-24T00:00:00, 10.00',
      'card-4, 2020-05-24T00:00:00, 10.00',

      'card-2, 2020-05-24T23:59:59, 10.50',
      'card-3, 2020-05-24T23:59:59, 10.00',
      'card-4, 2020-05-25T00:00:00, 10.50',
    ];

    const result = detect(transactions, 20);

    expect(result).toEqual(['card-1', 'card-2']);

    expect(getHistory('card-1').sum).toBe(20.5);
    expect(getHistory('card-2').sum).toBe(20.5);
    expect(getHistory('card-3').sum).toBe(20);
    expect(getHistory('card-4').sum).toBe(10.5);
  });
});
