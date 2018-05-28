const ToDoComponent = {
    props:{
        todo:{}
    },
    template:`
        <tr>
            <td>{{ todo.titre }}</td>
            <td>{{ todo.description }}</td>
            <td>{{ todo.importance }}</td>
            <td>{{ todo.echeance }}</td>
        </tr>
    `
}