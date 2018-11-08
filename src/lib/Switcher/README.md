## Description

A radio switcher that display a series of optinos and allow the user to select just one.

## How to use

Component example:

```js
const displayContent = [{id: 'item1', label: 'Item 1'}, {id: 'item2', label: 'Item 2'}, {id: 'item3', label: 'Item 3'}];

<Switcher content={displayContent} header="Header text" footer="Footer text" action={i => console.log(i)} />;
```

Component with activeElement:

```js
const displayContent = [{id: 'item1', label: 'Item 1'}, {id: 'item2', label: 'Item 2'}, {id: 'item3', label: 'Item 3'}];

<Switcher
  content={displayContent}
  header="Header text"
  footer="Footer text"
  action={i => console.log(i)}
  elementActive={1}
/>;
```
