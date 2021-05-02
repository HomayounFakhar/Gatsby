---
title: What is React ?
date: "2021-04-28T10:10:01.169Z"
description: React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
Reference : https://en.wikipedia.org/wiki/React_(JavaScript_library)
---

React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

![React](./React.png)

 [How to install React JS](https://reactjs.org/docs/getting-started.html)

## Sample Code

Sample of Render :

```js
class App extends React.Component {
  render() {
    const i = 1;
    return (
      <div>
        <h1>{ i === 1 ? 'true' : 'false' }</h1>
      </div>
    );
  }
}
```