## Description

**Generic header for sortable tables**

## How to use

Component example:

```js
<SortableHeader
  arrowColor={'blue'}
  contentToSort={[
    {id: 1, label: 'Title1', hideSort: true},
    {id: 2, label: 'Title2'},
    {id: 3, label: 'Title3'},
    {id: 4, label: 'Title4'},
    {id: 5, label: ''},
  ]}
  action={sort => console.log(sort)}
  customClass={'prova'}
  defaultSort={[0, 0, 0, 1, 0]}
/>
```
