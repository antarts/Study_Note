## 【10.9】如何解决异步深度嵌套的困扰

js编程最困难的就是异步深度嵌套。

比如我们在业务处理时有这样的需求：

你有用户名变量和值，依据用户名去获取用户信息，再依据用户信息里的id去获取该id对应的所有文章。
这种一环套一环的业务模式太常见的。
```
axios.get('/api/user?name=xugaoyang')
  .then(function (response) {
    let userInfo = response.data;
    
    axios.get('api/topics?user_id=' + userInfo._id)
      .then(function (response) {
        let topics = response.data;

        // i got it.
      })
      .catch(function (err) {
        console.log(err);
      });
  })
  .catch(function (err) {
    console.log(err);
  });
```
很多人改进此类问题时，只是简单的把内部嵌套调用封装成函数
```
function getTopics(id) {
  axios.get('api/topics?user_id=' + id)
  .then(function (response) {
    let topics = response.data;

    // i got it.
  })
  .catch(function (err) {
    console.log(err);
  });
}

axios.get('/api/user?name=xugaoyang')
  .then(function (response) {
	let userInfo = response.data;
	
	getTopics(userInfo.id)
  })
  .catch(function (err) {
	console.log(err);
  });
```

以上只是代码结构上的调整，但没有解决深度嵌套的核心问题。
你有好的建议吗？

---

