<template>
    <div>
       <h2>Product</h2>

       <form class="research" v-on:submit.prevent>
           <label for="whereName"> Name : </label>
            <input id="whereName" type ="text" name="whereName" v-model="whereName">

            <label for="wherePrix"> Prix : </label>
            <input id="wherePrix" type ="number" name="wherePrix" v-model="wherePrix">

            <label for="order">Order by :</label>
            <select name="order" id="order" v-model="order">
                <option value="desc">descending</option>
                <option value="asc">ascending</option>
            </select>
            <button type="submit" class="btnResearch" id="btnResearch" name="btnResearch" v-on:click="Research()">Research</button>
            <button type="submit" class="btnGoAdd" id="btnGoAdd" name="btnGoAdd" v-on:click="GoAdd()">Add a product</button>
       </form>

        <div class="main">
            <div v-for="p in product" :key="p.id">
                <div class="product" v-if="p.isActive" @click="detail(`${ p.id  }`)">
                    <h5>{{ p.name }}</h5>
                    <p>{{ reduceString(p.content) }}</p>
                    <p>{{ p.prix }}€</p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import axios from "axios";
    import swal from 'sweetalert';

    export default {
        name: 'Home',
        props: {
            msg: String
        },
        data () {
            return {
                whereName:"",
                product: [],
                wherePrix:0,
                order:"desc",
            }
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            reduceString(c){
               if(c.length > 20) {
                    c = c.substr(0, 20) + '...';
                }
               return c;
            },
            GoAdd(){
                window.location.href = "http://localhost:8080/add";
            },
            Research(){
                this.product = []
                const params = new URLSearchParams([['name', this.whereName], ['prix', parseInt(this.wherePrix)], ['order', this.order]]);
                axios.get('http://localhost:3000/Product/Research', { params }).then((r) => {
                    if(r.status== 200){
                        if(r.data.length != 0){
                            r.data.forEach(d => {
                                this.product.push({"id" : d.id ,"name" : d.name, "content" :  d.content, "prix" : d.prix, "createdAt" :  d.createdAt, "isActive" :  d.isActive});
                            });
                        }
                    }else{
                        swal('', "An error has occurred", "error");
                    }
                }).catch((error) => {
                    swal('', error.response.data.message, "error");
                });
            },
            detail(id){
               window.location.href = "http://localhost:8080/detail/"+id;
            }
        },
        mounted() {
            axios.get('http://localhost:3000/Product').then((r) => {
                if(r.status== 200){
                    if(r.data.length != 0){
                        r.data.forEach(d => {
                            this.product.push({"id" : d.id ,"name" : d.name, "content" :  d.content, "prix" : d.prix, "createdAt" :  d.createdAt, "isActive" :  d.isActive});
                        });
                    }
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
    .main {
        padding: 25px;
        flex-wrap: wrap;
        display: flex;
    }

    .product{
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 15px;
        width: 171px;
        margin: 4px;
    }

    .product:hover {
        background-color: #cecbcb;
        cursor: pointer;
    }

    h5 {
        margin: 0px;
    }
    
    #wherePrix, #whereName{
        width: 100px !important;
        padding: 0px 0px !important;
        margin-right: 10px;
    }

    #btnResearch, .btnGoAdd{
        padding: 2px 16px !important;
        font-size: 13px !important;
        margin-left: 10px;
    }

    .research {
        margin-left: 30px !important;
    }
</style>
