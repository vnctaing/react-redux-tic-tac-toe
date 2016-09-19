<<<<<<< HEAD
# React Redux Tic Tac Toe

React Redux Tic Tac Toe is a small app, that lets you simply play Tic Tac Toe

## Getting Started

```
$ npm install
$ npm start
```

## Running the tests

Running flow scripts
```
$ npm run flow
```

Running test
```
$ npm run test
```

### Coding Style

The JavaScript ES6 code style is based on default [create-react-app config](https://github.com/facebookincubator/create-react-app/blob/master/config/eslint.js)

## Challenge 2

>If it was your main project, what would be your next move? What do you think is missing to your solution?
what additional steps would you take to make sure your code runs well in production and in the future.

If I had more time I would have worked on the really basic UI, I would work on that first. It lacks some features. e.g. choosing the first move, giving name to players, A.I would be an interesting task although I don't immediately have the idea of how I could do that.

I would run `npm build` if I wanted to go on production and I would write more test and used Travis CI in order to put safely in production.

I've hear a lot about Flow lately, you will find some surprising annotations in the code. I've quickly abandoned Flow but I have kept some annotation in the code anyway to give it a small taste, I am still curious about your opinion about that tool. I don't come from a strong typed language so I don't feel the lack of typing. Flow seems to be a bit different to TypeScript, you can add type gradually after you have coded which keeps JavaScrip flexibility, I appreciate that.

> Would you approach it differently, with a tool that requires more setup but does the job better? If so, can you walk us through the solution in some bullet points and high level conceptual code? If not, can you explain to us why your solution beats other alternatives?

I am not sure it requires a lot more work to have a 76x76 tic tac toe. In my code, I don't assume so many times that this is a 3x3 square. There's few arrays (`[0,1,2]`) that are hard-coded I think we could easily refactored them, If we ever needed a 76x76 square.

> What did you enjoy about the process of designing and implementing your solution? Is there anything you found frustrating?

I have enjoyed to write dirty code before refactoring it, it felt really good e.g. : I wrote `getWinningRow` before I realize I could easily refactoring it to getWinningDirection() and reuse it to find a winning row or a winning column.

I've liked the functional approach that I took for checking the game, I hope it is concise enough.

ImmutableJs is pretty non-intuitive to use, but really handy and concise when you find the right API in the docs.

There weren't so many edge-cases to test, so it was pretty quick to test it. At some point, I really had trouble to write the functions that checked if the game was over.


## Built With

* [create-react-app](https://github.com/facebookincubator/create-react-app) - Create React apps with no build configuration.
* [React](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
* [Redux](https://github.com/reactjs/redux) - Predictable state container for JavaScript apps
* [Webpack](https://github.com/webpack/webpack) - A bundler for javascript and friends
* [Immutable](https://github.com/facebook/immutable-js) - Immutable persistent data collections for Javascript which increase efficiency and simplicity.
* [Flow](https://flowtype.org/) - A static type checker for JavaScript

I'm looking forward experimenting GraphQL, Relay and drop MongoDB/Mongoose

## Authors

* **Vincent Taing** - *Initial work* - [vnctaing](https://github.com/vnctaing)
