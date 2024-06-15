# acorn-ts-example

A repo demonstrating using acorn on TypeScript files.

## Setup

1. Clone the repo
1. Run `npm ci`

Two scripts are available:

- `npm run ts` - Runs `tsc` against the main file
- `npm run acorn` - Loads the contents of the main file into acorn to parse / walk it

## Status

Current issue seems to be that **acorn-typescript** seems to fail
```sh
file:///Users/owenbuckley/Workspace/github/acorn-ts-example/node_modules/acorn-walk/dist/walk.mjs:23
    baseVisitor[type](node, st, c);
                     ^

TypeError: baseVisitor[type] is not a function
    at c (file:///Users/owenbuckley/Workspace/github/acorn-ts-example/node_modules/acorn-walk/dist/walk.mjs:23:22)
    at Module.simple (file:///Users/owenbuckley/Workspace/github/acorn-ts-example/node_modules/acorn-walk/dist/walk.mjs:25:5)
    at file:///Users/owenbuckley/Workspace/github/acorn-ts-example/acorn-ts.js:18:6
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:530:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)
```


Unless `acorn.walk` is initialized with this option to explicitly support the usage of `interface`

```js
walk.simple(node, {}, {
  ...walk.base,
  TSInterfaceDeclaration: () => { }
});
```

Which also seems to be the case with the [**acorn-jsx** plugin](https://github.com/acornjs/acorn/issues/829#issuecomment-1172586171), so does that mean there is an entire list of these TS visitors that we need to configure?  🤔