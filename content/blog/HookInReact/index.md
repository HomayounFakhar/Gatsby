---
title: Hook In React!
date: "2021-04-29T10:10:01.169Z"
description: "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."
Reference : https://reactjs.org/docs/hooks-overview.html
---

For using Hook in React


1. First add {useState} 

```js
import React, { useState } from 'react';
```




2. Define according to the methods below

```js
  const [count, setCount] = useState(0);
```
Or
```js
  const [strtext, setStrtext] = useState("");
```

3. Use

```js
  setCount(100);
```
`setCount(100)` changes the value of `count`
Or
```js
  setStrtext("NewString");
```
`setStrtext("NewString")` changes the value of `strtext`

4. Change in function

```js
<button onClick={() => setCount(100)}>
```
or
```js
<button onClick={() => setCount(count + 1)}>
```

4. How to use ?

```js
<p>You score is {count}</p>
```
or
```js
<p>You comment is {Strtext}</p>
```

> Do you want to know more about Hook?
>([https://reactjs.org/docs/hooks-state.html](https://reactjs.org/docs/hooks-state.html))

