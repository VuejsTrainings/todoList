const UserFormComponent = {
    props:['nom'],
    data(){
        return {
            name:this.nom
        }
    },
    template:`
        <div class="opacifieur" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Nom de l'utilisateur</h5>
                        <button type="button" class="close" aria-label="Close" @click="closing">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" v-model="name" placeholder="Propriétaire des todos">    
                            <div class="input-group-append">
                                <button type="button" class="input-group-text btn btn-success" @click="user_input">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    `,
    methods:{ 
        user_input(){
            this.$emit('user-changed', this.name );
            this.$emit('closed');
        },
        closing(){
            this.$emit('closed');
        }
    }
}