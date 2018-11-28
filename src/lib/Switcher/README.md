## Description

A radio switcher that display a series of optinos and allow the user to select just one.

## How to use

Component example:

```js
const displayContent = [
  {id: 'item1', label: 'Item 1', index: 1},
  {id: 'item2', label: 'Item 2', index: 2},
  {id: 'item3', label: 'Item 3', index: 3},
];

<Switcher action={index => console.log(index)} content={displayContent} header="Header text" footer="Footer text" />;
```

Component with activeElement:

```js
const displayContent = [
  {id: 'item1', label: 'Item 1', index: 1},
  {id: 'item2', label: 'Item 2', index: 2},
  {id: 'item3', label: 'Item 3', index: 3},
];

<Switcher
  action={index => console.log(index)}
  customClass={'test'}
  content={displayContent}
  header="Header text"
  footer="Footer text"
  elementActive={1}
/>;
```
