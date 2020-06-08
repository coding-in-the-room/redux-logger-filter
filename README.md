# Redux-logger-filter

`Redux-logger-filter` is a helper module to provide filter function to `redux-logger`.

You can configure `Redux-logger` to log only certain actions.

## Install

```shell
npm i -D redux-logger-filter
```

## Usage

Use the `predicate` parameter of the `createLogger` function.

```js
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import makeLogFilter from 'redux-logger-filter';

// Set to log only 'INCREASE' and 'DECREASE'.
const logger = createLogger({
  predicate: makeLogFilter('INCREASE', 'DECREASE'),
});

const store = createStore(reducer, applyMiddleware(logger));
```

### Other Options

```js
// You can pass it in array.
const filterList = ['counter/INCREASE', 'counter/DECREASE'];

const logger = createLogger({
  predicate: makeLogFilter(filterList)
});

// You can also put Action Creator directly.
import { increase, decrease } from './modules/counter.js';

const logger = createLogger({
  predicate: makeLogFilter(increase, decrease)
});
const logger = createLogger({
  predicate: makeLogFilter([increase, decrease])
});

// Action Objects
const logger = createLogger({
  predicate: makeLogFilter(increase(), decrease())
});
*/
```

## Author

> BitYounjgae (bityoungjae@gmail.com)

## License

MIT
