# Component Library
React-based UI library of commonly used components following atomic design concepts.

## Quick Start
### Install dependencies and run storybook
```
npm install
npm run storybook
```

### Build component(s)
1. Create new component or new component collection namespace (i.e. markets, videoplayer) folder in `components`
2. Build component(s) and create `.storybook.jsx` templates
3. Include `Knobs` in storybook where necessary (https://www.npmjs.com/package/@storybook/addon-knobs)

### Run code linting
```
npm run lint
```

### Run build to create `lib` files
The lib folder has JavaScript and CSS transpiled and distributed for production use.

```
npm run build
```

### Push changes to necessary branch
```
git push origin [BRANCH_NAME]
```

## Naming Conventions
* Folders - `lowercase` (i.e. markets, videoplayer)
* Components - `TitleCase` (i.e. TextLabel, TickerTape)
* Props - `snake_case` (i.e. initial_index, quote_lists)
* Functions - `camelCase`
* Knobs - same casing as prop they are assigned to (usually `snake_case`)
