const ToDosListComponent = {
    data(){
        return {
            todos: ToDos,
            sortedField:''
        };
    }
    ,
    template:`
        <table class="table table-striped table-hover">
            <thead>
             <tr>
                <th>&nbsp;</th>
                <th @click="sortTodos('titre')" style="cursor:pointer">Titre</th>
                <th @click="sortTodos('description')">Description</th>
                <th @click="sortTodos('importance')">Importance</th>
                <th @click="sortTodos('echeance')">Pour le</th>
             </tr>
            </thead>
            <tbody>
                <todo-item :todo="todo" v-for="todo in todos" :key="todo.id"></todo-item>
            </tbody>
        </table>
    `,
    components:{
        'todo-item': ToDoComponent
    },
    methods:{
        /**
         * Trie les Todos selon le champ field
         * par ordre croissant ou décroissant selon que le 
         * champ soit déjà celui sur lequel on a trié ou non.
         * @param {String} field 
         */
        sortTodos(field){
            this.todos.sort( (a,b) => field === this.sortedField  ?
                                            a[field] < b[field]:
                                            b[field] < a[field]
            );
            this.sortedField = (field === this.sortedField) ? "" : field ;
        }
    }
}