## 【10.7练习】解释setTimeout的回调执行的原理

```
function output() {
  var name = 'xiaoming';
  setTimeout(function () {
    console.log(name);
  }, 1000);
}

output();
```

能解释一下为啥setTimeout中的回到函数为啥能访问output的变量name吗？

---

### 回复：

在昨天的知识点我们知道闭包，变量的作用域，在其声明的块或子块中可用。所以output函数内的name可以在内嵌的匿名函数中被调用。

* 测试
这里提到setTimeout，我做了下面的测试：

```
console.log("1");
function output() {
  console.log("2");
  var name = 'xiaoming';
  setTimeout(function () {
    console.log(name);
  },1000);
  console.log("3");
}
console.log("4");
output();
console.log("5");
```
在把变量挪个位置，再把时间设置为0：

```
console.log("1");
function output() {
  console.log("2");
  setTimeout(function () {
    console.log(name);
  },0);
  console.log("3");
  var name = 'xiaoming';
}
console.log("4");
output();
console.log("5");
```

* 结果
打印出来的都是一样的结果：
1
4
2
3
5
xiaoming

* 分析
原来Javascript引擎单线程机制，在output函数被执行"setTimeout(function () {” 这行代码时，setTimeout先被放入执行列表，等待排在前面的任务执行结束之后才被执行；如果设置了时间，要等到时间结束才被执行。