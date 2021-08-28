<template>
    <div>
        <h2>Product detail</h2>
        <form v-on:submit.prevent>
           <div>
               <label for="name"> Name : </label>
               <input id="name" type ="text" name="name" v-model="name">
           </div>

           <div>
               <label for="content"> Content : </label>
               <textarea id="content" name="content" v-model="content"></textarea>
           </div>

           <div>
               <label for="prix"> Prix : </label>
               <input id="prix" type ="number" name="prix" v-model="prix">
           </div>

           <div>
               <label for="isActive"> Is active: </label>
               <input type="checkbox" id="isActive" v-model="isActive">
           </div>

           <div class="button">
               <button type="reset" class="btnReturn" id="btnReturn" name="btnReturn" v-on:click="Return()">Return</button>
               <button type="submit" class="btnAdd" id="btnAdd" name="btnAdd" v-on:click="Update()">Update</button>
           </div>
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    import swal from 'sweetalert';

    export default {
        name: 'Detail',
        props: {
            msg: String
        },
        data () {
            return {
                id: 0,
                name: "",
                content: "", 
                prix: 0,
                isActive: true
            }
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
           Update() {
                axios.put('http://localhost:3000/Product/'+this.id, {name: this.name, content: this.content, prix: parseInt(this.prix), isActive: this.isActive}).then( async(r) => {
                    if(r.status== 200){
                        swal('', "The product was update", "success").then(() =>{
                            window.location.href = "http://localhost:8080";
                        });
                    }else{
                        swal('', "An error has occurred", "error");
                    }
                }).catch((error) => {
                    swal('', error.response.data.message, "error");
                });
            },
            Return(){
                window.location.href = "http://localhost:8080";
            }
        },
        mounted() {
            this.id = this.$route.params.id

            axios.get('http://localhost:3000/Product/'+this.id).then((r) => {
                if(r.status== 200){
                   this.name = r.data.name
                   this.content = r.data.content
                   this.prix = r.data.prix
                   this.isActive = r.data.isActive
                }else{
                    swal('', "An error has occurred", "error");
                }
            }).catch((error) => {
                swal('', error.response.data.message, "error");
            });
        }
    }
</script>

<style>
    form {
        width: 700px;
        margin-left: 53px;
    }

    input[type=text], input[type=number], textarea {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    textarea{
        height: 200px;
        resize: none;
    }

    button {
        background-color: #666866;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 20px;
    }

    button:hover {
        background-color: #444444;
    }

    .button{
        width: 300px;
        display: flex;
        justify-content: space-evenly;
        margin-top: 25px;
    }
</style>