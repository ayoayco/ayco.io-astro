Started some migrations of JS projects to TypeScript. There are a few moves from TypeScript & node that influenced me to do this:

1. [Node's type stripping](https://nodejs.org/api/typescript.html#type-stripping) - allows execution of TypeScript files that only contains erasable TypeScript syntax.
2. [TypeScript's erasable syntax only](https://www.totaltypescript.com/erasable-syntax-only) - a flag to tell `tsc` to throw error on syntax that are not erasable (e.g., enums, namespaces, and class parameter properties)
3. [TypeScript native compiler](https://devblogs.microsoft.com/typescript/typescript-native-port/) - promises 10x faster typescript compilation
