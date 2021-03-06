import parse from './parse';

describe('parse', () => {
  test('should parse transaction string', () => {
    const { hash, timestamp, amount } = parse(
      '10d7ce2f43e35fa57d1bbf8b1e2, 2014-04-29T13:15:54, 10.05',
    );

    expect(hash).toBe('10d7ce2f43e35fa57d1bbf8b1e2');
    expect(new Date(timestamp).toISOString()).toBe('2014-04-29T13:15:54.000Z');
    expect(amount).toBe(10.05);
  });
});
