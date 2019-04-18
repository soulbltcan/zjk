<template>
    <div id="" class="container">
        <router-link to="/" class="btn btn-default">返回</router-link>
        <h1 class="page-header">详细信息
            <span class="pull-right">
                <router-link class="btn btn-info" v-bind:to="'/editCustomer/'+customer.userId">编辑详情</router-link>
                <button type="button" class="btn btn-danger" v-on:click="delCustomer(customer.userId)">删除用户</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-user mr-1"></span>
                <span>{{customer.userName}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-phone mr-1"></span>
                <span>{{customer.userPhone}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-envelope mr-1"></span>
                <span>{{customer.userEmail}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-tower mr-1"></span>
                <span>{{customer.userAge}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon glyphicon-home mr-1"></span>
                <span>{{customer.userGraduationSchool}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-education mr-1"></span>
                <span>{{customer.userEducation}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-briefcase mr-1"></span>
                <span>{{customer.userProfession}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-pencil mr-1"></span>
                <span>{{customer.userProfile}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CustomerDetails",
        data(){
            return {
                customer: {}
            }
        },
        methods: {
            fetchCustomers(id){
                this.$axios.get("/back_user/user/" + id).then((response) =>{
                    if(response.data.code === '0'){
                        this.customer = response.data.data;
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
                this.$axios.delete("/back_user/user/" + id).then((response) =>{
                    console.log(response);
                    if(response.data.code === '0' && response.data.data === 1){
                        this.$router.push({path: "/", query: {alert: "用户删除成功!!!"}});
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
            }
        },
        created(){
            this.fetchCustomers(this.$route.params.id);
        }

    }
</script>

<style scoped>

    .mr-1 {
        margin-right: 1%;
    }

</style>
