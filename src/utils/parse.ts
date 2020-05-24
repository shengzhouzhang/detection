const parse = (
  transaction: string
): { hash: string; timestamp: number; amount: number } => {
  const [hash, timestampStr, amountStr] = transaction.split(/, ?/);

  return {
    hash,
    timestamp: new Date(timestampStr).getTime(),
    amount: parseFloat(amountStr),
  };
};

export default parse;
