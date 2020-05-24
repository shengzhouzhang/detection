import parse from 'src/utils/parse';
import { getHistory, setHistory } from 'src/utils/history';

const ONE_DAY = 24 * 60 * 60 * 1000;

const getNewSum = (hash: string, timestamp: number, amount: number): number => {
  const history = getHistory(hash);

  for (let i = 0; i < history.trans.length; ) {
    if (history.trans[i].timestamp > timestamp - ONE_DAY) {
      break;
    }

    history.sum -= history.trans.shift()?.amount ?? 0;
  }

  history.sum += amount;
  history.trans.push({ timestamp, amount });

  setHistory(hash, history);

  return history.sum;
};

const detect = (transactions: string[], threshold: number): string[] => {
  const fraudSet = transactions.reduce((fraud, transaction) => {
    const { hash, timestamp, amount } = parse(transaction);

    if (!fraud.has(hash) && getNewSum(hash, timestamp, amount) > threshold) {
      fraud.add(hash);
    }

    return fraud;
  }, new Set<string>());

  return Array.from(fraudSet);
};

export default detect;
