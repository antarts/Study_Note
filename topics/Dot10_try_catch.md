## try-catch中抛出一个错误

在使用try-catch时经常会处理异常问题。

```javascript
let count = 100;
try {
   if ( count < 100) {
     throw "哇喔，错误了";
  } else {
     // work well.
  }
} catch (e) {
    console.log(e);
}
let count = 100;
try {
   if ( count < 100) {
     throw  new Error("哇喔，错误了");
  } else {
     // work well.
  }
} catch (e) {
    console.log(e);
}
```

以上throw用了两种做法，你觉得那种好，为什么？

