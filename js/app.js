new Vue({
    el:'#app',
    data:  {
        user: 'eric'
    },
    components:{
        'todo-list': ToDosListComponent
    },
    filters:{
        /**
         * Convertit en majuscules
         * @param {String} val 
         */
        toUpper(val){
            return val.toUpperCase();
        }
    }
})