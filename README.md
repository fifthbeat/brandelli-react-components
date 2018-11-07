# Brandelli

![](http://images.treccani.it/enc/media/share/images/orig/system/galleries/Iconografico/Esercizio/146160.gif)

**Brandelli** in italian means shreds, like the ones of Arlecchino's costume. (Reference [here](https://en.wikipedia.org/wiki/Harlequin) if you don't know what we are talking about).  
This is a react componet library that works both in typescript and regular JSX.

# Principles

We structured and pampered every component following these simple principles:

1. **Zero impact** – try to create as less components as possible
2. **Recycle** – try to code so you will have to write as less as possible in future
3. **Separate** – try to identify and define each component function

# Install

Add to your project with

```bash
yarn add brandelli
# or
npm install --save brandelli
```

# How to

As simple as

```bash
yarn
# or
npm install
```

and

```bash
yarn start
# or
npm run start
```

# Styles

Styling is powered by styling components allowing you easy customization.

Example:

```javascript
import styled from 'styled-components';
import {Button} from 'brandelli';

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
```

# TODO

Stuff we have to implent to pimp this butterfly

- [ ] Default theming
- [ ] Theme ovveriding options

# Libs we used as inspiration

- [gestalt](https://github.com/pinterest/gestalt)
- [ant-design](https://github.com/ant-design/ant-design)
- [bulma components](https://github.com/couds/react-bulma-components)
