<template>
    <div id="customers" class="container">
        <h1 class="page-header">用户管理系统</h1>
        <alert v-if="alert" v-bind:msg="alert"></alert>
        <input type="text" class="form-control" placeholder="Search name / phone / emial ..." v-model="filterSearch">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in filterBy(customers,filterSearch)">
                    <td>{{customer.userName}}</td>
                    <td>{{customer.userPhone}}</td>
                    <td>{{customer.userEmail}}</td>
                    <td>
                        <router-link class="btn btn-primary btn-info" role="button" v-bind:to="'/customers/'+customer.userId">详细信息</router-link>
                        <button type="button" class="btn btn-danger" v-on:click="delCustomer(customer.userId)">删除用户</button>
                        <router-link class="btn btn-success" v-bind:to="'/editCustomer/'+customer.userId">编辑详情</router-link>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>


<script>

    import Alert from './Alert'

    export default {
        name: "Customers",
        data(){
            return {
                customers:[],
                alert:"",
                filterSearch:""
            }
        },
        methods:{
            fetchCustomers(){
                this.$axios.get("/back_user/user").then((response)=>{
                    if(response.data.code === '0'){
                        this.customers = response.data.data;
                    }
                }).catch((error) =>{
                    if(error.response){
                        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
            },
            delCustomer(id){
                this.$axios.delete("/back_user/user/"+id).then((response)=>{
                    console.log(response);
                    if(response.data.code === '0' && response.data.data === 1){
                        this.$router.push({path:"/",query:{alert:"用户删除成功!!!"}});
                    }
                }).catch((error) =>{
                    if(error.response){
                        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
            },
            filterBy(customers,filterSearch){
                return customers.filter((customer)=>{
                    if(customer.userName.toLowerCase().match(filterSearch.toLowerCase())){
                        return customer.userName.toLowerCase().match(filterSearch.toLowerCase());
                    } else if(customer.userPhone.toLowerCase().match(filterSearch.toLowerCase())) {
                        return customer.userPhone.toLowerCase().match(filterSearch.toLowerCase());
                    } else {
                        return customer.userEmail.toLowerCase().match(filterSearch.toLowerCase());
                    }

                })
            }
        },
        created(){
            this.fetchCustomers();
        },
        updated(){
            this.alert = this.$route.query.alert;
            this.fetchCustomers();
        },
        components:{
            "alert":Alert
        }

    }
</script>

<style scoped>

</style>
