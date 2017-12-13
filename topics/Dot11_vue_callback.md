以下是一个实际的案例。
```javascript
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      postsList: []
    },
    methods: {
      fetchData () {
        axios.get('/api/posts')
          .then(function(response) {
            vm.postsList = response.data.postsList;
            vm.postsList.forEach((element) => element.url = '/posts/show?id=' + element._id);
          })
      }
    },
  });
  
  vm.fetchData();
</script>
```
先初始化vm，然后调用vm的fetchData()函数来获取数据，一切看上去很完美。
但是，我觉得存在一些调用时机不清晰的问题。

如何能保证在html构建完了后才去获取数据呢？

---

### vue生命周期说明

[Vue生命周期图示](https://cn.vuejs.org/images/lifecycle.png)