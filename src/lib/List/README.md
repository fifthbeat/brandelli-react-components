## Description

An hightly customizable list component.

## How to use

Component example:

```js
const displayContent = [{id: 1, label: 'Item 1'}, {id: 2, label: 'Item 2 '}, {id: 3, label: 'Item 3'}];

<List border direction={'column'} size={'large'} content={displayContent} />;
```

List with custom items

```js
const displayContent = [{id: 1, label: 'Item pippo'}, {id: 2, label: 'Item 2 '}, {id: 3, label: 'Item 3'}];
<List border content={displayContent} renderItem={item => <List.Item content={item} />} />;
```
