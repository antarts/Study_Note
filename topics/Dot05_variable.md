## 变量提前声明的特点

1. var

```javascript
console.log(name);
var name = 'xiaoming';
console.log(name);
```
以上两个输出分别是什么？为什么？

2. let

```javascript
console.log(name);
let name = 'xiaoming';
console.log(name);
```
以上两个输出分别是什么？为什么？

3. const

```javascript
console.log(name);
const name = 'xiaoming';
console.log(name);
```
以上两个输出分别是什么？为什么？

---
作用域：scope，也可以称有效范围。

1. var 输出：
```
undefined
xiaoming
```
var 变量声明无论出现在代码的任何位置，都会在任何代码执行之前处理。声明定义的变量可以重复声明定义，亦可以重复赋值。作用域是整个封闭函数。

>给一个非声明变量赋值会隐式创建一个全局变量（全局object的一个属性）。声明变量（Declared Variable）和非声明变量（Undeclared Variable）的区别是：
>1). 声明变量的作用域限制在其声明位置的上下文中，而非声明变量总是全局的。
>2). 声明变量在任何代码执行前创建，而非声明变量只有在执行赋值操作的时候才会被创建。
>3). 声明变量是它所在上下文环境的不可配置属性（non-configurable property），非声明变量是可配置的（例如非声明变量可以被删除）。

2. let 输出：
```
ReferenceError: name is not defined  
```
报错，提示name未定义。

let声明的变量只在其声明的块或子块中可用。不提前处理。可以赋值，但不能重复声明定义。

3. const 输出：
```
ReferenceError: name is not defined
```
const声明的常数只在其声明的块或子块中可用。不提前处理。不能重复声明定义，也不能重复申明定义。



老师做了解答：[前往阅读](http://code.7xinsheng.com/post/59d5acf609b7934a9f6b40cc?tmplate=club)
