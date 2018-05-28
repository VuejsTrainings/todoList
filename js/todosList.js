const ToDosListComponent = {
    props:['todos'],
    template:`
        <table class="table table-striped table-hover">
            <thead>
             <tr>
                <th>Titre</th>
                <th>Description</th>
                <th>Importance</th>
                <th>Pour le</th>
             </tr>
            </thead>
            <tbody>
                <todo-item :todo="todo" v-for="todo in todos"></todo-item>
            </tbody>
        </table>
    `,
    components:{
        'todo-item': ToDoComponent
    }
}