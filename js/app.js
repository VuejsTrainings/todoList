new Vue({
    el:'#app',
    data:  {
        todos: ToDos,
        user: 'Eric'
    },
    components:{
        'todo-list': ToDosListComponent
    }
})