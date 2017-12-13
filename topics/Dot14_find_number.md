## 一道有趣的查找题

以下是一个二维数组，如何用最最最简单的方式把每个item的第一个元素找出来。

let list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
结果应该是1, 4, 7。

---

一种解题方法：

```javascript
let list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var firstItem = list.map(item => item[0]);

console.log(firstItem);
```