#### Overview

This code is written in `Typescript`.

The code maintains a transaction history and its sum for each credit card.

When a new transaction comes in, it incrementally adds the new amount and reduces the amounts from the transactions which have exceeded 24 hours period. If the sum exceeds the given threshold, the hashed credit card number will be returned as fraudulent.

##### Files

```
src/
-- detect.ts            // main function to detect fraudulent credit cards and maintain the sum
-- detect.spec.ts
-- utils/
---- parse.ts           // function to parse transaction string
---- parse.spec.ts
---- history.ts         // data store for transaction history.
---- parse.spec.ts
```

### Run Unit Tests

- Run `yarn` to install dependencies.
- Run `yarn test` for unit testing.

##### Run with docker

- Run `docker build -t detection .`
- Run `docker run -it detection test`
