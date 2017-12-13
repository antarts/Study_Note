## 【10.8练习】 Multiple choice questions and explain your choice

questions:

Those two are Multiple Choice questions, if possible please do not use your vsCode and give the answers.

When you explain the reasons you may use anything you want.

* question 1:
```
function bar(){
    return foo;
    foo = 10;
    function foo(){
    }
    var foo = "11";
}

console.log(typeof bar());
```
a. String   b. Error    c. function     d. Number   e. undefined

* question 2:
```
function ahahaha(){
    return
    var test= {
        name:"xiaoming"     //换成 xuShuai 会不会被打？
    }

    test = 18

    test = "Thank you for your teaching"
}

console.log( typeof ahahaha());
```
a. String   b. Error    c. function     d. Number   e. undefined  
Give your answer and explain the reason,

Thank you for your reading.

---

1. 第一个问题判断的结果是：function；出来的结果是：function, undfeined。
2. 第二个问题判断的结果是：function；出来的结果是：undefined,undfeined。

第二题判断出错，原来空函数返回结果是undefind。