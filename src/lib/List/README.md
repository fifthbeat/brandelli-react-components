## How to use

React component example:

```js
<List border={true} direction={'column'} size={'large'} listHeight={'200px'} />
```

List with items

```js
const Item = require('./Item');
<List
  border={true}
  direction={'column'}
  size={'large'}
  listHeight={'200px'}
  content={[
    {id: 1, label: 'san gennaro'},
    {id: 2, label: 'san giuseppe'},
    {id: 3, label: 'san francesco'},
  ]}
/>;
```
