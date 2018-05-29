
Vue.filter('toUpper',
    /**
    * Convertit en majuscules
    * @param {String} val 
    */
    (val) => val.toUpperCase()
);

new Vue({
    el:'#app',
    data:  {
        user: 'eric'
    },
    components:{
        'todo-list': ToDosListComponent,
        'user-form': UserFormComponent
    },
    filters:{
        
    }
})