const UserFormComponent = {
    props:['nom'],
    template:`
        <input type="text" id="user" :value="nom" @input="user_input">
    `,
    methods:{ 
        user_input(evt){
            this.$emit('user-changed', evt.target.value );
        }
    }
}