new Vue({
    el:'#app',
    data:  {
        user: 'Eric'
    },
    components:{
        'todo-list': ToDosListComponent
    }
})