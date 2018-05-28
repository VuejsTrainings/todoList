const ToDoComponent = {
    props:{
        todo:{}
    },
    template:`
        <tr :class="{'c-fini': todo.finie }">
            <td> <i :class="{
                'far fa-square': !todo.finie,
                'far fa-check-square': todo.finie,
            }" @click="changeEtat(todo)"></i></td>
            <td>{{ todo.titre }}</td>
            <td>{{ todo.description }}</td>
            <td>
                <i v-show="!todo.finie" class="fa fa-lg" :class="{
                    'fa-arrow-circle-up text-danger': todo.importance == 3,
                    'fa-arrow-circle-right text-warning': todo.importance == 2,
                    'fa-arrow-circle-down text-success': todo.importance == 1
                }"></i>
            </td>
            <td>{{ todo.echeance }}</td>
        </tr>
    `,
    methods:{
        changeEtat(todo){
            todo.finie = !todo.finie;
        }
    }
}