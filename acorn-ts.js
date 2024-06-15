import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import tsPlugin from 'acorn-typescript';
import fs from 'fs';

const contents = fs.readFileSync('./main.ts', 'utf-8');

console.log({ contents });

const node = acorn.Parser.extend(tsPlugin()).parse(contents, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})

console.log({ node });

walk.simple(node, {}, {
  // ...walk.base,
  // TSInterfaceDeclaration: () => { }
});