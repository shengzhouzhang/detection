type History = {
  trans: { timestamp: number; amount: number }[];
  sum: number;
};

const store = new Map<string, History>();

export const getHistory = (hash: string): History => {
  return store.get(hash) ?? { trans: [], sum: 0 };
};

export const setHistory = (hash: string, history: History): void => {
  store.set(hash, history);
};
