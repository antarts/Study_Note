## 【10.6练习】闭包函数认知

```javascript
function main() {
  var name = 'xiaoming';
  return function () {
    console.log(name);
  }
}

var output = main();
output();
```

main()函数执行会返回一个函数，并赋值给了output。这说明output的定义时再main()外部，但为啥我在main()外部执行output()却可以使用name并正常输出name的值呢？

---

## 闭包（Closure）

函数内部嵌入的函数，能够读取其他函数内部变量的函数。本质上，闭包就是将函数内部和外部连接起来的一座桥梁。

### 用途

闭包最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。