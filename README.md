# useDataApi React Hook

[![Build Status](https://travis-ci.org/the-road-to-learn-react/use-data-api.svg?branch=master)](https://travis-ci.org/the-road-to-learn-react/use-data-api) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-learn-react/use-data-api.svg)](https://greenkeeper.io/) ![NPM](https://img.shields.io/npm/l/use-data-api.svg)

Custom hook for React Components to fetch data from an API. [Read more about it.](https://www.robinwieruch.de/react-hooks-fetch-data/).

[Example over here.](https://github.com/the-road-to-learn-react/react-hooks-introduction/blob/master/src/useDataApiHook-external-example/index.js)

## Installation

`npm install use-data-api`

## Usage

Accepts as first argument an endpoint URL and as second argument an initial state for `data`. It returns as first item in an array an object which holds the data, isLoading and isError states, and the actual function to fetch the data (e.g. on a button click).

```
import React from 'react';

import useDataApi from 'use-data-api';

const AnyComponent = props => {
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'http://hn.algolia.com/api/v1/search?query=redux',
    null,
  );

  ...
};
```

## Contribute

* `git clone git@github.com:the-road-to-learn-react/use-data-api.git`
* `cd use-data-api`
* `npm install`
* `npm run test`

### More

* [Publishing a Node Package to NPM](https://www.robinwieruch.de/publish-npm-package-node/)
* [Node.js Testing Setup](https://www.robinwieruch.de/node-js-testing-mocha-chai/)
* [React Testing Setup](https://www.robinwieruch.de/react-testing-tutorial/)
